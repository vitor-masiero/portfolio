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
        image:
            "https://api.builder.io/api/v1/image/assets/TEMP/410117385f477cf17ebc78fb2a5c1e3015bd8d55?width=152",
        text: "Trabalhar com este designer foi uma experiência transformadora. Ele não apenas entendeu nossa visão, mas a elevou a um nível que superou todas as expectativas.",
    },
    {
        id: 2,
        name: "Renan Machado de Oliveira",
        role: "Professor, SESI/SENAI",
        image: "https://github.com/shadcn.png", // Placeholder
        text: "A capacidade de entrega e a qualidade do código são impressionantes. A integração com IA trouxe uma eficiência que não imaginávamos ser possível.",
    },
    {
        id: 3,
        name: "Pedro Santos",
        role: "Product Manager, Future Apps",
        image: "https://github.com/shadcn.png", // Placeholder
        text: "Profissionalismo e criatividade em cada detalhe. O resultado final ficou muito além do que esperávamos para o nosso MVP.",
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
                                <div className="flex justify-center">
                                    <div className="w-20 h-20 rounded-full border-2 border-[#0066FF] p-1">
                                        <img
                                            src={feedback.image}
                                            alt={feedback.name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                </div>

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
