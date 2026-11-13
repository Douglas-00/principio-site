export const site = {
  nome: "Princípio Impresso",
  instagram: "https://www.instagram.com/principioimpresso/",
  instagramUser: "@principioimpresso",
  whatsapp: "5511923327745",
  cidade: "São Paulo, SP",
  email: "principioimpresso@gmail.com",
  logo: "/images/logo.jpeg",
};

export const depoimentos = [
  { imagem: "/images/depoimento1.jpeg", cliente: "Cliente Princípio Impresso" },
  { imagem: "/images/depoimento2.jpeg", cliente: "Cliente Princípio Impresso" },
];

export const linkWhatsApp = (
  mensagem = "Olá! Vim pelo site e gostaria de fazer um pedido.",
) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
