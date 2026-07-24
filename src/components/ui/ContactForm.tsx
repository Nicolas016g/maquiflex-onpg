"use client";

import { FormEvent, useState } from "react";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function ContactForm() {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      "Olá! Vim pelo site da Maquiflex e gostaria de entrar em contato.",
      "",
      `Nome: ${nome}`,
      empresa ? `Empresa: ${empresa}` : "",
      email ? `E-mail: ${email}` : "",
      telefone ? `Telefone: ${telefone}` : "",
      mensagem ? `Mensagem: ${mensagem}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-chrome">
            Nome *
          </label>
          <input
            id="nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input-field"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="empresa" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-chrome">
            Empresa
          </label>
          <input
            id="empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            className="input-field"
            placeholder="Nome da empresa"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-chrome">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="seu@email.com"
          />
        </div>
        <div>
          <label htmlFor="telefone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-chrome">
            Telefone *
          </label>
          <input
            id="telefone"
            required
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="input-field"
            placeholder="(00) 00000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-chrome">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          rows={4}
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="input-field resize-none"
          placeholder="Conte-nos sobre seu projeto ou necessidade..."
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Enviar mensagem
      </button>
    </form>
  );
}
