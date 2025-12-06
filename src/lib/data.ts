
import type { LucideIcon } from 'lucide-react';
import { Tablet, Presentation, AppWindow, Bot, Gamepad2, Archive } from 'lucide-react';

export interface ProjectDetail {
  detailTitle?: string;
  detailSubtitle?: string;
  detailText?: string[];
  detailImageUrl?: string;
  detailImageHint?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  details?: ProjectDetail;
}

export interface Solution {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const solutions: Solution[] = [
  {
    id: '1',
    icon: Tablet,
    title: "Mesas Touch Screen Interativas",
    description: "Fornecemos uma grande variedade de Mesas Interativas, multitoque, com telas de 32\" a 70\", ideais para engajar o público."
  },
  {
    id: '2',
    icon: Presentation,
    title: "Painéis e Totens Interativos",
    description: "Desenvolvemos painéis e totens sensíveis ao toque que proporcionam uma experiência dinâmica e interativa para os usuários."
  },
  {
    id: '3',
    icon: AppWindow,
    title: "Apps para Telas Touch Screen",
    description: "Criamos conteúdo interativo multiplataforma para Mesas e Painéis, com foco na qualidade visual e experiência do usuário."
  },
  {
    id: '4',
    icon: Bot,
    title: "Animatrônicos e Wearables para Entretenimento",
    description: "Criamos animatrônicos e wearables personalizados que transformam eventos, produções e campanhas em experiências únicas, unindo storytelling visual, engenharia criativa e tecnologia interativa para entregar personagens e figurinos que surpreendem, envolvem e elevam o impacto de cada projeto."
  },
  {
    id: '5',
    icon: Gamepad2,
    title: "Desenvolvimento de Games",
    description: "Criação de games interativos para diversas plataformas, com foco em engajamento e experiências lúdicas."
  },
  {
    id: '6',
    icon: Archive,
    title: "Sistema Collectio",
    description: "Sistema para gerenciamento de acervos museológicos: cadastro de coleções, documentos, objetos e relatórios integrados."
  }
];

const rawProjectsData: Project[] = [
  {
    id: 'ospa-diorama',
    title: 'Totem Interativo e Software para Diorama',
    category: 'Memorial da OSPA',
    description: 'Totem e Software Interativo para o Diorama - Instrumentos de uma Orquestra para o Memorial da Orquestra Sinfônica de Porto Alegre.',
    imageUrl: '/images/ospa2.jpg',
    imageHint: 'interactive totem',
    details: {
      detailTitle: 'Totem Interativo e Software para Diorama',
      detailSubtitle: 'Memorial da OSPA',
      detailText: ['Totem e Software Interativo para o Diorama - Instrumentos de uma Orquestra para o Memorial da Orquestra Sinfônica de Porto Alegre.'],
      detailImageUrl: '/images/ospa2.jpg',
      detailImageHint: 'interactive totem',
    },
  },
  {
    id: 'casa-marvin-grinn',
    title: 'Casa Marvin Grinn',
    category: 'Animatrônicos, Cenários Interativos e Wearables Personalizados',
    description: 'Criamos e desenvolvemos animatrônicos e wearables personalizados unindo storytelling do personagem Marvin Grinn, engenharia criativa e tecnologia interativa para entregar experiências únicas.',
    imageUrl: '/images/18.jpg',
    imageHint: 'Casa Marvin Grinn animatronics',
    details: {
      detailTitle: 'Casa Marvin Grinn',
      detailSubtitle: 'Animatrônicos, Cenários Interativos e Wearables Personalizados',
      detailText: ['Criamos e desenvolvemos animatrônicos e wearables personalizados unindo storytelling do personagem Marvin Grinn, engenharia criativa e tecnologia interativa para entregar experiências únicas.'],
      detailImageUrl: '/images/animatonicos.mp4',
      detailImageHint: 'Casa Marvin Grinn interaction video',
    },
  },
  {
    id: 'ospa-mesa',
    title: 'Mesa Touch Screen e Software',
    category: 'Memorial da OSPA',
    description: 'Mesa Touch Screen e Software Interativo para o Memorial da Orquestra Sinfônica de Porto Alegre.',
    imageUrl: '/images/ospa1.jpg',
    imageHint: 'touchscreen memorial',
    details: {
      detailTitle: 'Mesa Touch Screen e Software',
      detailSubtitle: 'Memorial da OSPA',
      detailText: ['Mesa Touch Screen e Software Interativo para o Memorial da Orquestra Sinfônica de Porto Alegre.'],
      detailImageUrl: '/images/ospa1.jpg', // Consider using a more detailed image or video like '/videos/ospa_mesa.mp4' if available
      detailImageHint: 'touchscreen memorial',
    },
  },
  {
    id: 'simoes-lopes-neto',
    title: 'Exposição Simões Lopes Neto',
    category: 'Exposição Interativa',
    description: 'Soluções interativas para a exposição no Santander Cultural.',
    imageUrl: '/images/exposicao-simoes-lopes-neto.jpg',
    imageHint: 'exhibit interactive',
    details: {
      detailTitle: 'Exposição Simões Lopes Neto',
      detailSubtitle: 'Exposição Interativa',
      detailText: ['Soluções interativas para a exposição sobre o escritor Simões Lopes Neto, originalmente no Theatro São Pedro e também no Santander Cultural. Incluiu mesas interativas, projeções e uma linha do tempo digital.'],
      detailImageUrl: '/images/1.jpg', // Using a related image, original card image is exposicao-simoes-lopes-neto.jpg
      detailImageHint: 'interactive exhibit display',
    },
  },
  {
    id: 'memorial-caminhoneiro',
    title: 'Memorial Vida de Caminhoneiro',
    category: 'Totens Interativos',
    description: 'Desenvolvimento de totens interativos para o memorial.',
    imageUrl: '/images/memorial-vida-de-caminhoneiro.jpg',
    imageHint: 'interactive kiosk',
    details: {
      detailTitle: 'Memorial Vida de Caminhoneiro',
      detailSubtitle: 'Totens Interativos',
      detailText: ['Desenvolvimento de totens interativos para o memorial, apresentando histórias e informações sobre a vida dos caminhoneiros.'],
      detailImageUrl: '/images/2.jpg',
      detailImageHint: 'interactive kiosk detail',
    },
  },
  {
    id: 'chc-santa-casa',
    title: 'CHC Santa Casa de Porto Alegre',
    category: 'Mesa Touch Screen e Software',
    description: 'Mesa Touch Screen e Software Interativo para o centro cultural.',
    imageUrl: '/images/chc-santa-casa-de-porto-alegre.jpg',
    imageHint: 'touchscreen table',
    details: {
      detailTitle: 'CHC Santa Casa de Porto Alegre',
      detailSubtitle: 'Mesa Touch Screen e Software',
      detailText: ['Desenvolvimento de Mesa Touch Screen e Software Interativo para o Centro Histórico-Cultural Santa Casa, permitindo a exploração do acervo e história da instituição.'],
      detailImageUrl: '/images/chc-santa-casa-de-porto-alegre.jpg',
      detailImageHint: 'touchscreen table detail',
    },
  },
  {
    id: 'memorial-sao-miguel',
    title: 'Memorial Antiga Matriz De São Miguel',
    category: 'Solução Interativa',
    description: 'Projeto interativo para o memorial da antiga matriz.',
    imageUrl: '/images/memorial-antiga-matriz-de-sao-miguel.jpg',
    imageHint: 'historical display',
    details: {
      detailTitle: 'Memorial Antiga Matriz De São Miguel',
      detailSubtitle: 'Solução Interativa',
      detailText: ['Criação de uma solução interativa para o memorial da antiga matriz de São Miguel, resgatando sua história e importância cultural.'],
      detailImageUrl: '/images/memorial-antiga-matriz-de-sao-miguel.jpg',
      detailImageHint: 'historical display detail',
    },
  },
  {
    id: 'museu-internacional',
    title: 'Museu do S.C. Internacional',
    category: 'Sistemas Interativos',
    description: 'Desenvolvimento de sistemas interativos para o museu do clube.',
    imageUrl: '/images/museu-do-sc-internacional.jpg',
    imageHint: 'stadium field',
    details: {
      detailTitle: 'Museu do S.C. Internacional',
      detailSubtitle: 'Sistemas Interativos',
      detailText: ['Desenvolvimento de diversos sistemas interativos para o Museu do Sport Club Internacional, enriquecendo a experiência dos visitantes com a história do clube.'],
      detailImageUrl: '/images/5.jpg',
      detailImageHint: 'interactive museum exhibit',
    },
  },
  {
    id: 'poeira-do-tempo',
    title: 'Poeira do Tempo',
    category: 'Game Exploratório',
    description: 'Criação de um game exploratório interativo.',
    imageUrl: '/images/poeira-do-tempo.jpg',
    imageHint: 'adventure game',
    details: {
      detailTitle: 'Poeira do Tempo',
      detailSubtitle: 'Game Exploratório',
      detailText: ['Desenvolvimento de um game exploratório interativo, convidando os jogadores a desvendar mistérios e narrativas em um ambiente digital imersivo.'],
      detailImageUrl: '/images/6.jpg',
      detailImageHint: 'adventure game scene',
    },
  },
  {
    id: 'visita-virtual-mas',
    title: 'Visita Virtual Museu de Arte Sacra RG',
    category: 'Totem e Aplicativo',
    description: 'Totem e aplicativo para visita virtual ao Museu de Arte Sacra de Rio Grande.',
    imageUrl: '/images/visita-virtual-museu-de-arte-sacra-rg.jpg',
    imageHint: 'virtual tour',
    details: {
      detailTitle: 'Visita Virtual Museu de Arte Sacra RG',
      detailSubtitle: 'Totem e Aplicativo',
      detailText: ['Criação de totem e aplicativo para uma visita virtual imersiva ao Museu de Arte Sacra de Rio Grande, tornando o acervo acessível a um público mais amplo.'],
      detailImageUrl: '/images/visita-virtual-museu-de-arte-sacra-rg.jpg',
      detailImageHint: 'virtual museum interface',
    },
  },
  {
    id: 'museu-rio-grande',
    title: 'Museu da Cidade de Rio Grande',
    category: 'Mesa Touch Screen e Software',
    description: 'Mesa Touch Screen e Software Interativo para o museu da cidade.',
    imageUrl: '/images/museu-da-cidade-de-rio-grande.jpg',
    imageHint: 'city museum',
    details: {
      detailTitle: 'Museu da Cidade de Rio Grande',
      detailSubtitle: 'Mesa Touch Screen e Software',
      detailText: ['Implementação de Mesa Touch Screen e Software Interativo para o Museu da Cidade de Rio Grande, oferecendo aos visitantes uma forma moderna de explorar a história local.'],
      detailImageUrl: '/images/museu-da-cidade-de-rio-grande.jpg',
      detailImageHint: 'interactive city history',
    },
  },
  {
    id: 'banrisul-80-anos',
    title: 'Banrisul – Memorial 80 anos',
    category: 'Software Interativo',
    description: 'Software para Mesa Linha do Tempo comemorativa dos 80 anos do Banrisul.',
    imageUrl: '/images/banrisul-memorial-80-anos.jpg',
    imageHint: 'timeline display',
    details: {
      detailTitle: 'Banrisul – Memorial 80 anos',
      detailSubtitle: 'Software Interativo',
      detailText: ['Desenvolvimento de software para uma Mesa Linha do Tempo interativa, celebrando os 80 anos do Banrisul e sua trajetória.'],
      detailImageUrl: '/images/banrisul-memorial-80-anos.jpg',
      detailImageHint: 'interactive timeline interface',
    },
  }
];

export const projectsData: Project[] = rawProjectsData;
export const solutionsData: Solution[] = solutions;

