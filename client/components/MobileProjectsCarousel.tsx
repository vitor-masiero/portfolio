import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

import { ArrowRight, Github } from "lucide-react";

export function MobileProjectsCarousel() {
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
        <div className="w-full">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {projects.map((project) => (
                        <CarouselItem key={project.id}>
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
                                    <div className="space-y-3 w-full">
                                        <div>
                                            <h3 className="text-xl font-bold text-white leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-white/70 text-sm mt-1">{project.category}</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <button
                                                className="text-[#0066FF] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                                                onClick={() => console.log(`Clicked project: ${project.title}`)}
                                            >
                                                Leia mais <ArrowRight className="w-4 h-4" />
                                            </button>
                                            {project.githubLink && (
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white/70 hover:text-[#0066FF] transition-colors"
                                                    aria-label="View Source on GitHub"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 pt-4">
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                current === index ? "bg-[#0066FF] w-4" : "bg-white/20"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                            onClick={() => api?.scrollTo(index)}
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    );
}
