"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MaquiflexLogo } from "../ui/MaquiflexLogo";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Empresa", href: "#empresa" },
  { label: "Vídeos", href: "#videos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Infraestrutura", href: "#infraestrutura" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Engenharia", href: "#engenharia" },
  { label: "Diferenciais", href: "#diferenciais" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-chrome/10 bg-black/95 shadow-lg shadow-black/50 backdrop-blur-md"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a href="#inicio" className="shrink-0 py-1">
          <MaquiflexLogo variant="header" />
        </a>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-2 text-xs font-semibold uppercase tracking-wider text-chrome/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="rounded-sm p-2 text-chrome xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-chrome/10 bg-black px-4 py-4 xl:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-semibold uppercase tracking-wider text-chrome"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
