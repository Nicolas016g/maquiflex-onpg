import { Globe, Link2, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { MaquiflexLogo } from "../ui/MaquiflexLogo";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Footer() {
  return (
    <footer className="border-t border-chrome/10 bg-black">
      <div className="section-padding !pb-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ScrollReveal>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <MaquiflexLogo variant="footer" />
                <p className="mt-5 text-sm leading-relaxed text-text-muted">
                  {siteConfig.tagline}. Fabricante brasileira de máquinas embaladoras e envasadoras horizontais
                  com engenharia própria e estrutura nacional.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-chrome">
                  Localização
                </h4>
                <p className="mt-4 flex items-start gap-3 text-sm text-text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-chrome" />
                  <span>
                    {siteConfig.address}
                    <br />
                    {siteConfig.city} — {siteConfig.state}
                  </span>
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-chrome">
                  Contato
                </h4>
                <div className="mt-4 space-y-3 text-sm">
                  <p className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-chrome" />
                    <a href={`mailto:${siteConfig.email}`} className="text-chrome hover:text-white">
                      {siteConfig.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Globe className="h-4 w-4 shrink-0 text-chrome" />
                    <a
                      href={siteConfig.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-chrome hover:text-white"
                    >
                      www.maquiflex.com.br
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Link2 className="h-4 w-4 shrink-0 text-chrome" />
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-chrome hover:text-white"
                    >
                      LinkedIn / Maquiflex
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="border-t border-chrome/10 py-6">
        <p className="text-center text-xs text-text-muted/60">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
