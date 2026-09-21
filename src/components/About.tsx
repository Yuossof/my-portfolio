import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImg from "../assets/WhatsApp Image 2026-02-14 at 2.12.56 PM.jpeg";
import Grainient from "./Grainient";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Only animate when the user hasn't asked for reduced motion
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".about-eyebrow", {
          opacity: 0,
          x: -16,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        });

        // Heading mask-wipe reveal
        gsap.fromTo(
          ".about-heading-inner",
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.1,
            ease: "power4.inOut",
            scrollTrigger: { trigger: ".about-heading", start: "top 80%" },
          }
        );

        // Image + decorative blob reveal
        gsap.from(".about-image-blob", {
          scale: 0.6,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.6)",
          scrollTrigger: { trigger: ".about-image-wrap", start: "top 80%" },
        });
        gsap.from(".about-image-wrap img", {
          scale: 1.25,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-image-wrap", start: "top 80%" },
        });
        gsap.from(".about-badge", {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.4,
          ease: "back.out(2)",
          scrollTrigger: { trigger: ".about-image-wrap", start: "top 75%" },
        });

        // Subtle parallax on the photo while scrolling past it
        gsap.to(".about-image-wrap img", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-image-wrap",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Cards stagger in
        gsap.from(".about-card", {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-cards", start: "top 80%" },
        });

        // Tech chips pop in
        gsap.from(".about-chip", {
          opacity: 0,
          scale: 0.7,
          duration: 0.4,
          stagger: 0.06,
          ease: "back.out(2.5)",
          scrollTrigger: { trigger: ".about-stack", start: "top 85%" },
        });

        // Bottom row
        gsap.from(".about-bottom-text", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-bottom", start: "top 85%" },
        });
        gsap.from(".about-social", {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(2)",
          scrollTrigger: { trigger: ".about-bottom", start: "top 85%" },
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section id="about" ref={root} className="py-32 px-6 bg-background text-foreground">
      <div className="max-w-350 mx-auto">
        {/* Section Label */}
        <div className="about-eyebrow mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            About
          </span>
        </div>

        <h2 className="about-heading text-3xl md:text-4xl lg:text-[3rem] font-normal leading-snug max-w-4xl mb-20 overflow-hidden">
          <span className="about-heading-inner block">
            I turn ideas into reliable digital products through thoughtful
            design, clean engineering, and{" "}
            <span className="font-semibold  decoration-2 underline-offset-4 decoration-muted-foreground/40">
              modern web technologies
            </span>
            .
          </span>
        </h2>

        {/* Bento Grid */}
        <div className="about-cards grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Image - Large */}
          <div className="about-image-wrap relative lg:col-span-5">
            <div className="about-image-blob absolute -top-5 -left-5 w-full h-full rounded-2xl border-2 border-border" />
            <div className="relative h-full min-h-112.5 max-h-150 rounded-2xl overflow-hidden bg-muted border border-border">
              <img
                src={myImg}
                alt="Youssof"
                className="w-full h-full object-cover"
                // style={{ filter: "grayscale(1) contrast(1.3)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-50"
                style={{
                  backgroundImage: "radial-gradient(rgba(0,0,0,0.85) 30%, transparent 31%)",
                  backgroundSize: "4px 4px",
                }}
              />
            </div>
            <div className="about-badge absolute bottom-4 left-4 bg-background/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-border shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-foreground" />
              Full-stack Developer
            </div>
          </div>

          {/* Cards column */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            {/* Bio Card */}
            <div className="about-card bg-muted rounded-2xl p-8">
              <span className="text-sm text-muted-foreground block mb-4">
                Who I Am
              </span>
              <p className="text-muted-foreground leading-relaxed">
                I'm a self-taught full-stack developer who enjoys turning
                ideas into real, usable products. I work across the frontend
                and backend, building responsive interfaces, scalable APIs,
                and integrations that solve real-world problems. I'm always
                exploring new technologies and looking for better ways to
                build.
              </p>
            </div>

            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden flex items-start justify-start p-6">
              <div className="absolute inset-0 z-0">
                <Grainient
                  color1="#140a35"
                  color2="#0e0530"
                  color3="#2f134a"
                  timeSpeed={0.25}
                  colorBalance={0}
                  warpStrength={1}
                  warpFrequency={5}
                  warpSpeed={2}
                  warpAmplitude={50}
                  blendAngle={0}
                  blendSoftness={0.05}
                  rotationAmount={500}
                  noiseScale={2}
                  grainAmount={0.1}
                  grainScale={2}
                  grainAnimated={false}
                  contrast={1.5}
                  gamma={1}
                  saturation={1}
                  centerX={0}
                  centerY={0}
                  zoom={0.9}
                />
              </div>

              <div className="relative z-10  rounded-2xl p-6 w-full max-w-md">
                <span className="text-sm text-gray-400 block mb-4">What I Do</span>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    UI/UX Implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    Responsive Design
                  </li>
                </ul>
              </div>
            </div>

            {/* Tech Card */}
            {/* <div className="about-card about-stack bg-muted rounded-2xl p-8 flex-1">
              <span className="text-sm text-muted-foreground block mb-4">
                Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="about-chip px-3 py-1.5 text-sm rounded-full border border-border bg-background text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="about-bottom grid md:grid-cols-2 gap-16 mt-20 pt-16 border-t border-border">
          {/* Text */}
          <div>
            <p className="about-bottom-text text-lg text-muted-foreground leading-relaxed">
              I'm constantly learning and improving my skills. Every project
              is an opportunity to grow and create something meaningful. I
              believe in writing clean, maintainable code and paying
              attention to the details that make a great user experience.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-start gap-4">
            <a
              href="https://github.com/Yuossof"
              target="_blank"
              rel="noopener noreferrer"
              className="about-social inline-flex items-center gap-2 px-4 py-2 border border-border text-sm rounded-full hover:bg-foreground hover:text-background transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/youssof-ahmed-0839932a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-social inline-flex items-center gap-2 px-4 py-2 border border-border text-sm rounded-full hover:bg-foreground hover:text-background transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="youssofwr@gmail.com"
              className="about-social inline-flex items-center gap-2 px-4 py-2 border border-border text-sm rounded-full hover:bg-foreground hover:text-background transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;