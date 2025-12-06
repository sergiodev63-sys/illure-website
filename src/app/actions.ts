
"use server";

import { z } from "zod";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

interface SheetRowData {
  timestamp: string;
  name: string;
  email: string;
  message: string;
}

async function appendToGoogleSheet(data: { name: string; email: string; message: string }): Promise<boolean> {
  try {
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'); // Handle escaped newlines
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1'; // Default to Sheet1 if not specified

    if (!serviceAccountEmail || !privateKey || !sheetId) {
      console.warn("Google Sheets environment variables not fully configured. Skipping sheet append.");
      return false; // Indicate that sheet append was skipped or failed due to config
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toISOString();
    const values: SheetRowData[] = [
      {
        timestamp,
        name: data.name,
        email: data.email,
        message: data.message,
      },
    ];

    // Assuming the first row of your sheet has headers: Timestamp, Name, Email, Message
    // Adjust range and valueInputOption as needed.
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetName}!A:D`, // Append to columns A-D of the specified sheet
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: values.map(row => [row.timestamp, row.name, row.email, row.message]),
      },
    });
    console.log("Data successfully appended to Google Sheet:", sheetId);
    return true;
  } catch (error) {
    console.error("Error appending data to Google Sheet:", error);
    // Log the error but don't let it block the primary success message of the form
    return false; 
  }
}


export async function submitContactForm(
  prevState: ContactFormState | undefined,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Por favor, corrija os erros no formulário.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;
  const toEmail = "serge.mello@gmail.com"; 

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: Number(process.env.EMAIL_SERVER_PORT) === 465, 
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_FROM || email}>`, 
    replyTo: email, 
    to: toEmail,
    subject: `Nova mensagem de contato de ${name} (illure site)`,
    text: `Nome: ${name}\nEmail: ${email}\nMensagem:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #333;">Nova Mensagem de Contato do Site illure</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Mensagem:</strong></p>
        <p style="padding: 10px; border-left: 3px solid #eee; white-space: pre-wrap;">${message}</p>
        <hr>
        <p style="font-size: 0.9em; color: #777;">Esta mensagem foi enviada através do formulário de contato do site illure.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email enviado com sucesso para:", toEmail);
    
    // Attempt to append data to Google Sheet
    const sheetAppendSuccess = await appendToGoogleSheet(validatedFields.data);
    if (sheetAppendSuccess) {
      console.log("Dados do formulário também adicionados à planilha Google.");
    } else {
      console.warn("Não foi possível adicionar os dados do formulário à planilha Google ou a configuração está pendente.");
    }

    return {
      success: true,
      message: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
    };
  } catch (error) {
    console.error("Erro ao processar formulário (email ou planilha):", error);
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
    return {
      success: false,
      message: `Ocorreu um erro ao tentar enviar sua mensagem. Por favor, tente novamente mais tarde. (Detalhe: ${errorMessage})`,
    };
  }
}

