import { Linkedin, Instagram, Github, ArrowUpRight, Mail, Phone, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        {/* Top Section - Hire Me */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center md:text-left">
            Vamos conversar?
          </h2>
          <a
            href="https://wa.me/5548999064470"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#556B2F] hover:bg-[#435525] text-white font-semibold text-lg px-12 py-6 h-auto rounded-full shadow-[0_4px_6px_rgba(85,107,47,0.2),0_10px_15px_rgba(85,107,47,0.2)] transition-all w-full md:w-auto"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        <div className="h-px w-full bg-white/10 mb-16" />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-[#0066FF] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                JV
              </div>
              <span className="text-2xl font-bold text-white">José Vitor</span>
            </div>
            <p className="text-white/60 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Desenvolvedor Full Stack e Engenheiro de IA focado em criar soluções digitais inovadoras e escaláveis.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a 
                href="https://www.linkedin.com/in/jos%C3%A9-vitor-masiero-97a778313/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0066FF] text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/vitor-masiero"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0066FF] text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0066FF] text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h3 className="text-[#0066FF] font-semibold uppercase tracking-wider mb-6">Navegação</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#sobre" className="text-white/70 hover:text-white transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#servicos" className="text-white/70 hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#projetos" className="text-white/70 hover:text-white transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#feedbacks" className="text-white/70 hover:text-white transition-colors">Feedbacks</a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 text-center md:text-left">
            <h3 className="text-[#0066FF] font-semibold uppercase tracking-wider mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3 text-white/70">
                <Phone className="w-5 h-5 text-[#0066FF]" />
                <span>+55 48 99906-4470</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-white/70">
                <Mail className="w-5 h-5 text-[#0066FF]" />
                <span>masierojosevitor456@gmail.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-white/70">
                <Globe className="w-5 h-5 text-[#0066FF]" />
                <span>josevitor.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© {currentYear} José Vitor. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos & Condições</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
