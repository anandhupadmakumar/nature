'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Reusing the same Reveal effect for consistency
const TextReveal = ({ children, delay = 0, className = "" }) => {
    return (
        <div style={{ overflow: 'hidden' }} className={className}>
            <motion.div
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default function AboutSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const images = [
        { src: "/assets/kerala_garden_luxury_1768279261196.png", alt: "Ginger Plant" },
        { src: "/assets/spice_cardamom_1768279277253.png", alt: "Cardamom" },
        { src: "/assets/feature_macro_leaf_1768250487898.png", alt: "Leaf Detail" },
        { src: "/assets/spice_black_pepper_1768279298151.png", alt: "Spices Bowl" },
        { src: "/assets/misty_mountains_1768272938607.png", alt: "Tea Plantation" },
    ];

    return (
        <section className="section" ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                {/* Top Content: Left Aligned */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    maxWidth: '800px',
                    marginBottom: '4rem'
                }}>
                    <TextReveal>
                        <span style={{
                            color: 'var(--color-primary-dark)',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                            display: 'block'
                        }}>
                            About Us
                        </span>
                    </TextReveal>

                    <TextReveal delay={0.1}>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            marginBottom: '1.5rem',
                            lineHeight: 1.1,
                            color: 'var(--color-text-light)'
                        }}>
                            Expert Landscaping,<br />
                            Personalized for You
                        </h2>
                    </TextReveal>

                    <div style={{ maxWidth: '600px', marginBottom: '2rem' }}>
                        <TextReveal delay={0.2}>
                            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                                At Greengrove, we create beautiful, functional outdoor spaces with care and expertise.
                                From design to maintenance, our team delivers professional landscaping solutions
                                tailored to your home, ensuring every garden looks its best year-round.
                            </p>
                        </TextReveal>
                    </div>

                    <TextReveal delay={0.3}>
                        <Link href="#work-with-us" className="btn-primary" style={{ textDecoration: 'none' }}>
                            <span>Work with us</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </TextReveal>
                </div>

                {/* Bottom Content: Infinite Marquee Scroll */}
                <div className="marquee-container" style={{
                    position: 'relative',
                    width: '100vw',
                    marginLeft: 'calc(-50vw + 50%)', // Break out of container
                    overflow: 'hidden',
                    paddingBottom: '2rem',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}>
                    <div className="marquee-track">
                        {/* Double the images for seamless loop */}
                        {[...images, ...images, ...images].map((img, index) => (
                            <div
                                key={index}
                                style={{
                                    minWidth: '350px',
                                    height: '500px',
                                    position: 'relative',
                                    borderRadius: 'var(--border-radius-lg)',
                                    overflow: 'hidden',
                                    marginRight: '1.5rem',
                                    flexShrink: 0
                                }}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .marquee-container {
                    display: flex;
                }
                .marquee-track {
                    display: flex;
                    animation: marquee 40s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-350px * 5 - 1.5rem * 5)); }
                }
                /* Pause on hover */
                .marquee-container:hover .marquee-track {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
