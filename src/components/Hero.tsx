import CursorGrid from "./CursorGrid";

const Hero = () => {
    return (
        <div className="min-h-screen flex justify-center items-center relative">
            {/* Cursor Grid Background */}
            <div className="absolute inset-0 z-0">
                <CursorGrid
                    cellSize={70}
                    color="#b93bcc"
                    radius={110}
                    falloff="smooth"
                    holdTime={400}
                    fadeDuration={800}
                    lineWidth={0.7}
                    maxOpacity={1}
                    fillOpacity={0}
                    gridOpacity={0}
                    cellRadius={0}
                    clickPulse
                    pulseSpeed={600}
                />
            </div>

            {/* Hero Content */}
            <section className="relative z-10 min-h-screen w-full flex items-center justify-center px-6 pointer-events-none">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-2 mb-16">
                        <svg
                            className="w-6 h-6 text-primary"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2L2 19h20L12 2z" />
                        </svg>

                        <span className="text-base">
                            <span className="font-semibold">John</span>
                            <span className="text-gray-400">
                                {" "}Developer
                            </span>
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-[110px] font-normal text-primary tracking-tight mb-4">
                        Building digital
                    </h1>

                    <p className="text-4xl md:text-6xl font-normal text-gray-400 tracking-tight mb-16">
                        experiences with code
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <rect
                                    x="3"
                                    y="3"
                                    width="7"
                                    height="7"
                                    strokeWidth={2}
                                />
                                <rect
                                    x="14"
                                    y="3"
                                    width="7"
                                    height="7"
                                    strokeWidth={2}
                                />
                                <rect
                                    x="3"
                                    y="14"
                                    width="7"
                                    height="7"
                                    strokeWidth={2}
                                />
                                <rect
                                    x="14"
                                    y="14"
                                    width="7"
                                    height="7"
                                    strokeWidth={2}
                                />
                            </svg>

                            View Projects
                        </a>

                        <a
                            href="#about"
                            className="pointer-events-auto inline-flex items-center gap-2 px-6 py-3.5 bg-gray-100 text-primary text-sm font-medium rounded-full hover:bg-gray-200 transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
