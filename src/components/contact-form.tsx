"use client";

import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { submitContactForm, type ContactFormState } from "@/app/actions"; // Server Action desabilitada para Static Export
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageSquare } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔴 COLOQUE AQUI O LINK DO SEU GOOGLE APPS SCRIPT (Web App URL)
  // Será algo como: "https://script.google.com/macros/s/AKfycbx.../exec"
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzowbtKh9cYET5WV2zKY09Qho3lLJGiSnHL1ONIp70tbK6VOgIRM3WwLIzrA-B-Efly/exec";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Verificacao removida pois URL ja esta configurada

    try {
      // Envia para o Google Apps Script
      // Usamos 'no-cors' porque o Google retorna um redirecionamento que o navegador bloquearia por segurança
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      // Se o fetch não der erro de rede, assumimos que foi enviado com sucesso
      toast({
        title: "Mensagem Enviada!",
        description: "Obrigado! Entraremos em contato em breve.",
      });
      form.reset();

    } catch (error) {
      console.error("Erro no envio:", error);
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-4">Informações de Contato</h3>
        <p className="text-muted-foreground mb-6">
          Adoraríamos ouvir de você! Preencha o formulário ou entre em contato conosco através dos canais abaixo.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="h-5 w-5 text-primary" />
            <a href="https://wa.me/55981151215" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              Clique aqui e fale conosco! (WhatsApp)
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-foreground">
              (55) 98115-1215
            </span>
          </div>
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 rounded-lg border border-border bg-card p-6 sm:p-8 shadow-lg">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-card-foreground">Nome Completo</Label>
          <Input
            id="name"
            {...form.register("name")}
            className="mt-1 bg-background"
            aria-invalid={!!form.formState.errors.name}
          />
          {form.formState.errors.name && (
            <p className="mt-1 text-sm text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-card-foreground">Seu Melhor Email</Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            className="mt-1 bg-background"
            aria-invalid={!!form.formState.errors.email}
          />
          {form.formState.errors.email && (
            <p className="mt-1 text-sm text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="text-sm font-medium text-card-foreground">Sua Mensagem</Label>
          <Textarea
            id="message"
            {...form.register("message")}
            rows={5}
            className="mt-1 bg-background"
            aria-invalid={!!form.formState.errors.message}
          />
          {form.formState.errors.message && (
            <p className="mt-1 text-sm text-destructive">{form.formState.errors.message.message}</p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground sm:w-auto">
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>
    </div>
  );
}
