/*
 * ============================================================
 *  GLOW MIX STORE — Configuração do Link Bio
 *  Edite apenas este arquivo para trocar links e influenciadoras.
 * ============================================================
 */
window.LINKBIO_CONFIG = {
  loja: {
    nome: "Glow Mix Store",
    instagram: "glowmixstore.br",
    bio: "Maquiagem, skincare e acessórios para realçar o seu brilho",
    logo: "assets/logo-320.webp",
  },

  // Links principais (aparecem como botões grandes).
  // Deixe "url" vazio ("") para mostrar o botão como "Em breve".
  links: [
    {
      titulo: "Loja Online",
      subtitulo: "Compre agora • entrega para todo o Brasil",
      url: "https://glow-mix-store.lojaintegrada.com.br/",
      icone: "loja",
      destaque: true,
    },
    {
      titulo: "Grupo VIP no WhatsApp",
      subtitulo: "Promoções e cupons exclusivos",
      url: "https://chat.whatsapp.com/F6ZJbwVvyqWIYTbUOsxnWs", // ex.: "https://chat.whatsapp.com/SEU-CODIGO"
      icone: "whatsapp",
    },
    {
      titulo: "Instagram",
      subtitulo: "@glowmixstore.br",
      url: "https://www.instagram.com/glowmixstore.br/",
      icone: "instagram",
    },
  ],

  // Influenciadoras da marca.
  // Preencha "instagram" com o @ (sem o @) — o link é gerado automaticamente.
  // "foto" é opcional (ex.: "assets/influenciadoras/maria.jpg").
  // "cupom" é opcional (ex.: "MARIA10").
  influenciadoras: [
    { nome: "", instagram: "", foto: "", cupom: "" },
    { nome: "", instagram: "", foto: "", cupom: "" },
    { nome: "", instagram: "", foto: "", cupom: "" },
    { nome: "", instagram: "", foto: "", cupom: "" },
  ],
};
