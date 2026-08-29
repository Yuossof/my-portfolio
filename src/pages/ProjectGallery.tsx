
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ProjectGalleryProps = {
    title: string;
    gallery: string[];
};

export function ProjectGallery({ title, gallery }: ProjectGalleryProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        dragFree: true,
        containScroll: "trimSnaps",
    });

    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    // Lightbox controls
    const openAt = useCallback((index: number) => setActiveIndex(index), []);
    const close = useCallback(() => setActiveIndex(null), []);
    const showPrevImage = useCallback(
        () => setActiveIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length)),
        [gallery.length]
    );
    const showNextImage = useCallback(
        () => setActiveIndex((i) => (i === null ? null : (i + 1) % gallery.length)),
        [gallery.length]
    );

    useEffect(() => {
        if (activeIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") showPrevImage();
            if (e.key === "ArrowRight") showNextImage();
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [activeIndex, close, showPrevImage, showNextImage]);

    return (
        <section className="mt-16">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium">Gallery</h2>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                        className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 disabled:opacity-30"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        type="button"
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                        className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100 disabled:opacity-30"
                        aria-label="Next"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="mt-6 overflow-hidden" ref={emblaRef}>
                <div className="flex items-start gap-5">
                    {gallery.map((image, index) => (
                        <button
                            key={`${image}-${index}`}
                            type="button"
                            onClick={() => openAt(index)}
                            className="group min-w-0 flex-[0_0_85%] overflow-hidden rounded-[22px] border border-slate-200 bg-[#f8f8f7] text-left sm:flex-[0_0_60%] lg:flex-[0_0_45%]"
                        >
                            <img
                                src={image}
                                alt={`${title} gallery ${index + 1}`}
                                className="block h-auto w-full bg-white transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {activeIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={close}
                >
                    <button
                        type="button"
                        onClick={close}
                        className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                        aria-label="Close"
                    >
                        <X size={22} />
                    </button>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            showPrevImage();
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:left-6"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <img
                        src={gallery[activeIndex]}
                        alt={`${title} gallery ${activeIndex + 1}`}
                        className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            showNextImage();
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-6"
                        aria-label="Next image"
                    >
                        <ChevronRight size={28} />
                    </button>

                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/70">
                        {activeIndex + 1} / {gallery.length}
                    </div>
                </div>
            )}
        </section>
    );
}