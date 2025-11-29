import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[rgba(18,18,18,0.8)] backdrop-blur-sm">
      <nav className="max-w-[1440px] mx-auto px-6 md:px-20 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white tracking-tight">
            José Vitor
          </span>
          <span className="text-2xl font-bold text-[#0066FF]">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Sobre
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Serviços
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Projetos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("feedbacks")}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Feedbacks
            </button>
          </li>
          <li>
            <Button
              onClick={() => window.location.href = "https://wa.me/5548999064470"}
              className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-sm px-6 rounded-lg"
            >
              Fale comigo
            </Button>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#121212] border-white/10">
              <div className="flex flex-col gap-8 mt-10">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors text-left"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors text-left"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("projetos")}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors text-left"
                >
                  Projetos
                </button>
                <button
                  onClick={() => scrollToSection("feedbacks")}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors text-left"
                >
                  Feedbacks
                </button>
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-lg px-6 rounded-lg w-full"
                >
                  Contato
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
