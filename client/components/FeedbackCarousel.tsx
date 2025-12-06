import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

const feedbacks = [
    {
        id: 1,
        name: "Matheus Carvalho",
        role: "CEO, CarvalhoTec",
        text: "Construir esse projeto de Machine Learning ao seu lado foi uma experiência transformadora. Você não apenas compreendeu a visão estratégica, mas elevou a solução a um nível que superou todas as expectativas.",
    },
    {
        id: 2,
        name: "Renan Machado de Oliveira",
        role: "Professor, SESI/SENAI",
        text: "O projeto desenvolvido pelo José ajudou meus alunos a enxergarem com clareza seus caminhos profissionais. Em todo o processo, ele demonstrou profissionalismo, responsabilidade e uma dedicação exemplar.",
    },
];

export function FeedbackCarousel() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div className="w-full max-w-[1024px] mx-auto relative px-12">
            <Carousel
                setApi={setApi}
                className="w-full"
                plugins={[
                    Autoplay({
                        delay: 5000,
                    }),
                ]}
            >
                <CarouselContent>
                    {feedbacks.map((feedback) => (
                        <CarouselItem key={feedback.id}>
                            <div className="space-y-8 py-4">
                                <blockquote className="text-center">
                                    <p className="text-white/90 text-2xl leading-[39px] max-w-[768px] mx-auto">
                                        "{feedback.text}"
                                    </p>
                                </blockquote>

                                <div className="text-center space-y-1">
                                    <p className="text-white text-lg font-semibold">
                                        {feedback.name}
                                    </p>
                                    <p className="text-white/60">{feedback.role}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-4 border-none bg-transparent text-white/50 hover:bg-white/5 hover:text-white" />
                <CarouselNext className="hidden md:flex -right-4 border-none bg-transparent text-white/50 hover:bg-white/5 hover:text-white" />
            </Carousel>

            <div className="flex justify-center gap-3 pt-6">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            "w-3 h-3 rounded-full transition-all duration-300",
                            current === index ? "bg-[#0066FF] w-6" : "bg-white/20"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => api?.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}
