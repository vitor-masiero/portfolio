import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { IconCloud } from "@/components/IconCloud";
import { Edit, Lightbulb, Layers, HelpCircle } from "lucide-react";
import { FeedbackCarousel } from "@/components/FeedbackCarousel";
import { MobileProjectsCarousel } from "@/components/MobileProjectsCarousel";
import { projects } from "@/data/projects";
import AiSearchSection from "@/components/AiSearchSection";

const techStackSlugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "amazonaws",
  "postgresql",
  "vercel",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "figma",
  "python",
  "django",
];

import { useToast } from "@/hooks/use-toast";

const techStackImages = techStackSlugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
);

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Entrarei em contato em breve.",
        });
        setFormData({
          nome: "",
          email: "",
          assunto: "",
          mensagem: "",
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Erro ao enviar",
          description: errorData.error || "Ocorreu um erro ao enviar sua mensagem.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Falha na comunicação com o servidor.",
        variant: "destructive",
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="pt-44 pb-20 px-6 md:px-20 min-h-[900px] flex items-center"
        >
          <div className="max-w-[1280px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-[#0066FF] text-sm font-semibold tracking-wide uppercase">
                    José Vitor | Engenheiro de Software e
                  </p>
                  <h1 className="text-4xl md:text-[72px] leading-tight md:leading-[90px] font-black tracking-tight">
                    <span className="text-white">
                      Software e{" "}
                    </span>
                    <span className="text-[#0066FF]">IA integrados</span>
                    <span className="text-white"> para fazer seu negócio operar com mais velocidade e precisão. </span>
                  </h1>
                </div>

                <p className="text-white/60 text-xl leading-[33px] max-w-[512px]">
                  Desenvolvo sistemas e automações com IA que reduzem custos, aumentam eficiência e facilitam a tomada de decisão.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                  <Button
                    onClick={scrollToProjects}
                    className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 h-auto rounded-lg shadow-[0_4px_6px_rgba(0,102,255,0.2),0_10px_15px_rgba(0,102,255,0.2)] w-full sm:w-auto"
                  >
                    Ver Projetos
                  </Button>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="border-2 border-white/20 bg-transparent text-white hover:bg-white/5 hover:text-white font-semibold text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 h-auto rounded-lg w-full sm:w-auto"
                  >
                    Entrar em Contato
                  </Button>
                </div>
              </div>

              <div className="hidden lg:flex justify-end">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-[960px] h-auto object-cover rounded-2xl shadow-2xl scale-x-[-1]"
                >
                  <source src="/macbook-subtle-turn.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-32 px-6 md:px-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center space-y-6 mb-20">
              <p className="text-[#0066FF] text-sm font-semibold tracking-wide uppercase">
                Sobre Mim
              </p>
              <h2 className="text-5xl font-bold text-white tracking-tight">
                Criatividade encontra funcionalidade
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8 text-white/70 text-lg leading-[30px]">
                <p>
                  Sou um desenvolvedor e entusiasta de IA focado na intersecção
                  entre dados e vida real. Minha missão é clara: usar a
                  engenharia de software para eliminar atritos do cotidiano.
                </p>
                <p>
                  Vejo cada linha de código como uma oportunidade de devolver
                  tempo às pessoas. Seja através de automações inteligentes ou
                  modelos preditivos, crio soluções que transformam processos
                  manuais e lentos em experiências fluidas.
                </p>
              </div>

              <div className="flex justify-center">
                <IconCloud
                  images={techStackImages}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="servicos"
          className="py-32 px-6 md:px-20 bg-gradient-to-b from-[#121212] to-[#000000]"
        >
          <AiSearchSection />
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center space-y-6 mb-20">
              <p className="text-[#0066FF] text-sm font-semibold tracking-wide uppercase">
                Serviços
              </p>
              <h2 className="text-5xl font-bold text-white tracking-tight">
                Meus serviços
              </h2>
              <p className="text-white/60 text-xl max-w-[672px] mx-auto">
                Oferecendo soluções completas de automação e engenharia de
                software para simplificar o seu dia-a-dia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[rgba(30,30,30,0.4)] border border-white/5 rounded-2xl p-8 space-y-6 hover:translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Edit className="w-8 h-8 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-white">Agentes de IA</h3>
                <p className="text-white/60 text-base leading-normal">
                  Assistentes virtuais que aprendem, interagem e automatizam
                  fluxos complexos de trabalho.
                </p>
              </div>

              <div className="bg-[rgba(30,30,30,0.4)] border border-white/5 rounded-2xl p-8 space-y-6 hover:translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Desenvolvimento Web
                </h3>
                <p className="text-white/60 text-base leading-normal">
                  Aplicações robustas e interfaces modernas, desenvolvidas já
                  integradas com inteligência artificial.
                </p>
              </div>

              <div className="bg-[rgba(30,30,30,0.4)] border border-white/5 rounded-2xl p-8 space-y-6 hover:translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Layers className="w-8 h-8 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Automação Inteligente
                </h3>
                <p className="text-white/60 text-base leading-normal">
                  Algoritmos que eliminam tarefas manuais repetitivas, reduzindo
                  erros e ganhando tempo.
                </p>
              </div>

              <div className="bg-[rgba(30,30,30,0.4)] border border-white/5 rounded-2xl p-8 space-y-6 hover:translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-[#0066FF]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Previsão de Vendas
                </h3>
                <p className="text-white/60 text-base leading-normal">
                  Transformação de dados brutos em padrões visuais e previsões
                  para decisões precisas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" className="py-32 px-6 md:px-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center space-y-6 mb-20">
              <p className="text-[#0066FF] text-sm font-semibold tracking-wide uppercase">
                Projetos
              </p>
              <h2 className="text-5xl font-bold text-white tracking-tight">
                Trabalhos selecionados
              </h2>
              <p className="text-white/60 text-xl">
                Uma coleção dos meus projetos mais recentes e impactantes
              </p>
            </div>

            <div className="hidden md:block">
              <BentoGrid className="gap-4 md:gap-6">
                {projects.map((project) => (
                  <BentoCard
                    key={project.id}
                    className={project.className}
                    href={project.href}
                    githubLink={project.githubLink}
                    background={
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    }
                  >
                    <div className="absolute inset-0 flex items-end pointer-events-none">
                      <div className="p-6 md:p-8 space-y-2 w-full">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="text-white/70">{project.category}</p>
                      </div>
                    </div>
                  </BentoCard>
                ))}
              </BentoGrid>
            </div>
            <div className="md:hidden">
              <MobileProjectsCarousel />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="feedbacks"
          className="py-32 px-6 md:px-52 bg-gradient-to-b from-[#121212] to-[#000000]"
        >
          <div className="max-w-[1024px] mx-auto">
            <div className="text-center space-y-6 mb-16">
              <p className="text-[#0066FF] text-sm font-semibold tracking-wide uppercase">
                Feedbacks
              </p>
              <h2 className="text-5xl font-bold text-white tracking-tight">
                O que dizem sobre meu trabalho
              </h2>
            </div>

            <div className="space-y-8">
              <FeedbackCarousel />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-32 px-6 md:px-68">
          <div className="max-w-[896px] mx-auto">
            <div className="text-center space-y-6 mb-16">
              <p className="text-[#0066FF] text-sm font-semibold tracking-wide uppercase">
                Contato
              </p>
              <h2 className="text-5xl font-bold text-white tracking-tight">
                Vamos criar algo incrível juntos
              </h2>
              <p className="text-white/60 text-xl">
                Entre em contato e vamos discutir seu próximo projeto
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    className="w-full bg-transparent border-b-2 border-white/10 pb-4 text-white placeholder:text-[#ADAEBC] focus:border-[#0066FF] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b-2 border-white/10 pb-4 text-white placeholder:text-[#ADAEBC] focus:border-[#0066FF] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Assunto"
                  value={formData.assunto}
                  onChange={(e) =>
                    setFormData({ ...formData, assunto: e.target.value })
                  }
                  className="w-full bg-transparent border-b-2 border-white/10 pb-4 text-white placeholder:text-[#ADAEBC] focus:border-[#0066FF] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <textarea
                  placeholder="Mensagem"
                  rows={6}
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  className="w-full bg-transparent border-b-2 border-white/10 pb-4 text-white placeholder:text-[#ADAEBC] focus:border-[#0066FF] focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-6 flex flex-col md:flex-row items-center justify-center gap-4">
                <Button
                  type="submit"
                  className="bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-lg px-12 py-6 h-auto rounded-lg shadow-[0_4px_6px_rgba(0,102,255,0.2),0_10px_15px_rgba(0,102,255,0.2)] w-full md:w-auto"
                >
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
