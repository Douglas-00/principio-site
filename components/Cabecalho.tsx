"use client";

import Image from "next/image";
import { useState } from "react";
import { site, linkWhatsApp } from "@/lib/config";

const links = [
  { href: "#historia", texto: "Nossa história" },
  { href: "#ocasioes", texto: "Produtos" },
  { href: "#proposito", texto: "Propósito" },
  { href: "#galeria", texto: "Galeria" },
  { href: "#depoimentos", texto: "Depoimentos" },
];

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const fechar = () => setAberto(false);

  return (
    <header className="cabecalho">
      <div className="container cabecalho-linha">
        <a
          className="marca"
          href="#inicio"
          aria-label="Princípio Impresso, início"
          onClick={fechar}
        >
          <Image
            src={site.logo}
            alt=""
            width={88}
            height={88}
            className="logo"
            priority
          />
          <span className="marca-nome">
            Princípio
            <br />
            Impresso
          </span>
        </a>

        <button
          className="menu-botao"
          type="button"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto(!aberto)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {aberto ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <nav
          id="menu-principal"
          className={`menu${aberto ? " aberto" : ""}`}
          aria-label="Principal"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={fechar}>
              {l.texto}
            </a>
          ))}
          <a className="botao" href={linkWhatsApp()} onClick={fechar}>
            Fazer pedido
          </a>
        </nav>
      </div>
    </header>
  );
}
