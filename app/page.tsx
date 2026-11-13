import Image from "next/image";
import Onda from "@/components/Onda";
import Cabecalho from "@/components/Cabecalho";
import { site, depoimentos, linkWhatsApp } from "@/lib/config";

const ocasioes = [
  {
    cor: "var(--mostarda)",
    imagem: "/images/permaneca-firme.webp",
    titulo: "Para a sua fé",
    texto:
      "Devocionais, cadernos de oração, blocos de anotações, cadernos para culto e desenhos para colorir. Produtos para todas as idades.",
  },
  {
    cor: "var(--marinho)",
    imagem: "/images/agendas-2027-viva-o-agora.webp",
    titulo: "Para a sua empresa",
    texto:
      "Brindes corporativos, agendas e cadernos personalizados, cartões de visita, embalagens e materiais gráficos para eventos corporativos e cristãos.",
  },
  {
    cor: "var(--rosa)",
    imagem: "/images/deus-provera-rosa.webp",
    titulo: "Para as suas celebrações",
    texto: "Festas de aniversário, lembrancinhas e decoração.",
  },
];

const galeria = [
  {
    src: "/images/conecte-se-com-deus.webp",
    legenda: "Conecte-se com Deus",
    w: 1080,
    h: 1440,
  },
  {
    src: "/images/agendas-2027-proposito.webp",
    legenda: "Agendas 2027",
    w: 1080,
    h: 1920,
  },
  {
    src: "/images/guarda-teu-coracao.webp",
    legenda: "Guarda teu coração",
    w: 1080,
    h: 1440,
  },
  {
    src: "/images/deixou-as-99.webp",
    legenda: "Deixou as 99",
    w: 1080,
    h: 1440,
  },
  {
    src: "/images/deus-faz-novas.webp",
    legenda: "Deus faz novas todas as coisas",
    w: 1080,
    h: 1440,
  },
  {
    src: "/images/deus-provera-azul.webp",
    legenda: "Deus proverá",
    w: 1080,
    h: 1440,
  },
  {
    src: "/images/agendas-2027-sonhos.webp",
    legenda: "Agendas 2027",
    w: 1215,
    h: 2160,
  },
  {
    src: "/images/forte-e-corajosa.webp",
    legenda: "Seja forte e corajosa",
    w: 1080,
    h: 1440,
  },
  {
    src: "/images/jesus-e-o-rei.webp",
    legenda: "Jesus é o Rei",
    w: 1080,
    h: 1440,
  },
  {
    src: "/images/meu-calice-transborda.webp",
    legenda: "Meu cálice transborda",
    w: 1080,
    h: 1440,
  },
  {
    src: "/images/crescer-na-graca.webp",
    legenda: "Crescer na graça",
    w: 1080,
    h: 1440,
  },
  {
    src: "/images/deus-provera-preto.webp",
    legenda: "Deus proverá",
    w: 1080,
    h: 1440,
  },
];

export default function Home() {
  return (
    <>
      <Cabecalho />

      <main id="inicio">
        <section className="hero">
          <div className="container">
            <div>
              <p className="rotulo">
                Loja cristã de design e soluções gráficas
              </p>
              <h1>
                Experiências geradas através da <em>personalização</em>
              </h1>
              <p className="lead">
                Unimos criatividade, identidade visual e qualidade em cada
                detalhe para transformar ideias em projetos únicos.
              </p>
              <div className="acoes">
                <a className="botao" href={linkWhatsApp()}>
                  Fazer meu pedido
                </a>
                <a className="botao claro" href="#galeria">
                  Ver produtos
                </a>
              </div>
            </div>
            <div className="hero-imagens">
              <Image
                src="/images/permaneca-firme.webp"
                alt="Caderno amarelo Tu porém, permaneça firme"
                width={540}
                height={720}
                priority
                sizes="(max-width: 820px) 50vw, 25vw"
              />
              <Image
                src="/images/guarda-teu-coracao.webp"
                alt="Caderno xadrez colorido Guarda teu coração"
                width={540}
                height={720}
                priority
                sizes="(max-width: 820px) 50vw, 25vw"
              />
            </div>
          </div>
        </section>

        <Onda cor="var(--papel)" />
        <section className="faixa-branca secao" id="historia">
          <div className="container historia">
            <div>
              <p className="rotulo">Nossa história</p>
              <h2>
                Nasceu de um <em>empurrãozinho</em> de coragem
              </h2>
            </div>
            <div>
              <p>
                A Princípio Impresso nasceu em setembro de 2025, durante a Expo
                Cristã. Eu havia acabado de ser desligada do meu emprego fixo e,
                ao longo do evento, as conversas nos estandes foram me
                edificando.
              </p>
              <p>
                Durante o show da cantora Valesca Maysa, veio uma palavra
                profética sobre empreendedores e empresários presentes naquela
                multidão:
              </p>
              <blockquote className="citacao">
                “Não sei para quem estou dizendo isso, mas tem endereço certo. O
                Senhor vai fazer de você uma grande empresária.”
              </blockquote>
              <p>Eu tomei posse. Dali em diante nasceu a Princípio Impresso.</p>
            </div>
          </div>
        </section>
        <Onda cor="var(--papel)" invertida />

        <section className="secao" id="ocasioes">
          <div className="container">
            <div className="cabeca-secao">
              <p className="rotulo">Um só lugar para todas as suas ocasiões</p>
              <h2>
                Da mesa de oração ao <em>evento corporativo</em>
              </h2>
              <p>
                Da festa de aniversário à identidade visual da sua empresa:
                reunimos, em uma única loja, tudo o que você precisa para dar
                forma às suas ideias.
              </p>
            </div>
            <div className="ocasioes">
              {ocasioes.map((o) => (
                <article
                  className="ocasiao"
                  key={o.titulo}
                  style={{ background: "var(--papel)" }}
                >
                  <Image
                    src={o.imagem}
                    alt=""
                    width={540}
                    height={405}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                  <div className="ocasiao-corpo">
                    <span
                      className="ocasiao-marca"
                      style={{ background: o.cor }}
                      aria-hidden="true"
                    />
                    <h3>{o.titulo}</h3>
                    <p>{o.texto}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="fecho">
              Do primeiro rascunho à entrega final, um único atendimento cuida
              de todo o seu projeto.
            </p>
          </div>
        </section>

        <Onda cor="var(--marinho)" />
        <section className="faixa-marinho secao" id="proposito">
          <div className="container proposito">
            <div>
              <p className="rotulo">O nosso diferencial é o propósito</p>
              <h2 style={{ marginBottom: 24 }}>
                Qualquer gráfica entrega um produto. Nós entregamos um pedido{" "}
                <em>coberto em oração</em>.
              </h2>
              <p>
                A cada pedido que entra, oramos para que o Senhor o abençoe. A
                cada pedido que sai, agradecemos e pedimos que o nome dele seja
                glorificado.
              </p>
              <p>Para nós, personalizar é uma forma de servir ao Reino.</p>
            </div>
            <div className="momentos">
              <div className="momento">
                <strong>Quando o pedido entra</strong>
                <span>Oramos para que o Senhor o abençoe.</span>
              </div>
              <div className="momento">
                <strong>Enquanto é feito</strong>
                <span>Cuidamos de cada detalhe, do rascunho à arte final.</span>
              </div>
              <div className="momento">
                <strong>Quando o pedido sai</strong>
                <span>
                  Agradecemos e pedimos que o nome dele seja glorificado.
                </span>
              </div>
            </div>
          </div>
        </section>
        <Onda cor="var(--marinho)" invertida />

        <section className="secao" id="galeria">
          <div className="container">
            <div className="cabeca-secao">
              <p className="rotulo">Galeria</p>
              <h2>
                Capas que <em>falam</em> com o coração
              </h2>
            </div>
            <div className="galeria">
              {galeria.map((g) => (
                <figure key={g.src}>
                  <Image
                    src={g.src}
                    alt={`Caderno ${g.legenda}`}
                    width={g.w / 2}
                    height={g.h / 2}
                    sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  />
                  <figcaption>{g.legenda}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="faixa-branca secao">
          <div className="container experiencias">
            <p className="rotulo">O que proporcionamos</p>
            <h2>
              Não entregamos apenas produtos: entregamos <em>momentos</em> que
              ficam na memória.
            </h2>
            <p>
              Nossos clientes contam o que sentiram ao presentear alguém e ver
              essa pessoa receber com amor e carinho. Já recebemos relatos de
              quem escreveu seus pedidos em um caderno de oração e viu Deus
              responder.
            </p>
          </div>
        </section>

        <section className="secao" id="depoimentos">
          <div className="container">
            <div className="cabeca-secao">
              <p className="rotulo">Depoimentos</p>
              <h2>
                Quem recebeu, <em>conta</em>
              </h2>
            </div>
            <div className="depoimentos">
              {depoimentos.map((d) => (
                <figure className="depoimento" key={d.imagem}>
                  <Image
                    src={d.imagem}
                    alt={`Depoimento de ${d.cliente}`}
                    width={600}
                    height={800}
                    sizes="(min-width: 760px) 40vw, 100vw"
                  />
                  <figcaption>{d.cliente}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <Onda cor="var(--salvia-claro)" />
        <section className="contato secao" id="contato">
          <div className="container">
            <div>
              <h2>
                Vamos criar o <em>seu</em> projeto?
              </h2>
              <p>
                Conte o que você imagina. A gente cuida do resto, com carinho e
                em oração.
              </p>
            </div>
            <div className="acoes">
              <a className="botao" href={linkWhatsApp()}>
                Chamar no WhatsApp
              </a>
              <a className="botao claro" href={site.instagram}>
                Chamar no Instagram
              </a>
              <a className="botao claro" href={`mailto:${site.email}`}>
                Enviar e-mail
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container">
          <span>
            © {new Date().getFullYear()} {site.nome} · {site.cidade}
          </span>
          <span className="rodape-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.instagram}>{site.instagramUser}</a>
          </span>
        </div>
      </footer>
    </>
  );
}
