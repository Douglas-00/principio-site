export const site = {
  nome: "Princípio Impresso",
  instagram: "https://www.instagram.com/principioimpresso/",
  instagramUser: "@principioimpresso",
  // Número com DDI e DDD, só dígitos. Ex.: 5511999999999
  whatsapp: "55XXXXXXXXXXX",
  cidade: "São Paulo, SP",
};

export const linkWhatsApp = (mensagem = "Oi! Vim pelo site e quero fazer um pedido.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
