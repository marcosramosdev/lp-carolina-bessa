export const SITE_URL = "https://www.carolinabessa.com.br";
export const SITE_NAME = "Dra. Carolina Bessa | Odontologia";
export const SITE_TITLE =
  "Dra. Carolina Bessa — Odontologia estética e reabilitadora | Graças, Recife";
export const SITE_DESCRIPTION =
  "Avaliação odontológica com a Dra. Carolina Bessa no bairro das Graças, Recife. Reabilitação oral, facetas e estética dental com planejamento individual. Agende pelo WhatsApp.";

export const WHATSAPP_NUMBER = "5581997100967";
export const WHATSAPP_DISPLAY = "(81) 99710-0967";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  geral:
    "Olá! Gostaria de receber informações sobre a avaliação odontológica com a Dra. Carolina Bessa.",
  reabilitacao:
    "Olá! Gostaria de agendar uma avaliação de reabilitação oral com a Dra. Carolina Bessa.",
  estetica:
    "Olá! Gostaria de receber informações sobre a avaliação para estética dental com a Dra. Carolina Bessa.",
  flutuante:
    "Olá! Acessei a página da Dra. Carolina Bessa e gostaria de receber informações sobre a avaliação odontológica.",
} as const;

export const CLINIC = {
  building: "Kronos Empresarial",
  street: "Rua das Pernambucanas, 407",
  suite: "Sala 1201",
  neighborhood: "Graças, Recife – PE",
  zip: "52011-010",
  fullAddress:
    "Rua das Pernambucanas, 407, Sala 1201, Graças, Recife – PE, CEP 52011-010",
  hours: "Segunda a sexta-feira, das 8h às 18h, com horário marcado.",
  parking: "Estacionamento pago disponível para visitantes no Kronos Empresarial.",
  payment: "PIX, espécie, débito ou crédito em até 12x sem juros.",
  cro: "CRO/PE 18528",
  credentials:
    "Cirurgiã-dentista especialista em prótese e dentística (reabilitação oral e estética).",
  lat: -8.0509164,
  lng: -34.9026298,
} as const;

// Link oficial do perfil do Google Maps (BESSA Studio Odontológico).
export const MAPS_SEARCH_URL =
  "https://www.google.com/maps/place/BESSA+Studio+Odontol%C3%B3gico/@-8.0467948,-34.9063252,15z/data=!4m10!1m2!2m1!1sdentista+carolina+bessa+Recife+-+PE!3m6!1s0x7ab19001b6cd9f5:0x4be725c5c58727aa!8m2!3d-8.0509164!4d-34.9026298!15sCiNkZW50aXN0YSBjYXJvbGluYSBiZXNzYSBSZWNpZmUgLSBQRVojIiFkZW50aXN0YSBjYXJvbGluYSBiZXNzYSByZWNpZmUgcGWSAQ1kZW50YWxfY2xpbmljmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0d1MxZHJTbEpWUjBveFdsWnZkMVp1VWpWVE0yeHhUa1ZrVldGV1JSQULgAQD6AQUItAIQRw!16s%2Fg%2F11yby0q53y?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D";

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${CLINIC.lat},${CLINIC.lng}&z=17&output=embed`;

// Perfil real do Google Maps — inclui avaliações do Google Meu Negócio.
export const GOOGLE_REVIEWS_URL = MAPS_SEARCH_URL;

export const NAV_LINKS = [
  { label: "Consulta inicial", href: "#avaliacao" },
  { label: "Posicionamento", href: "#posicionamento" },
  { label: "Reabilitação oral", href: "#reabilitacao" },
  { label: "Estética", href: "#estetica" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Localização", href: "#localizacao" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Antes e depois", href: "#antes-e-depois" },
] as const;

export const TREATMENTS = [
  "Avaliação odontológica",
  "Reabilitação oral",
  "Facetas em resina composta",
  "Implantes dentários",
  "Próteses dentárias",
  "Coroas",
  "Restaurações estéticas",
  "Clareamento dental",
  "Prevenção e acompanhamento da saúde bucal",
  "Planejamento funcional e estético do sorriso",
] as const;
