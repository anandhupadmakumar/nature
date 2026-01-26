'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import TextReveal from './TextReveal';

export default function AboutSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const images = [
        { src: "/assets/WhatsApp Image 2026-01-26 at 18.03.04 (1).jpeg", alt: "Ginger Plant" },
        { src: "/assets/WhatsApp Image 2026-01-26 at 18.03.04 (2).jpeg", alt: "Cardamom" },
        { src: "/assets/WhatsApp Image 2026-01-26 at 18.03.04.jpeg", alt: "Leaf Detail" },
        { src: "/assets/WhatsApp Image 2026-01-26 at 18.03.05.jpeg", alt: "Spices Bowl" },

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
                    marginBottom: '2rem' // Reduced from 4rem
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
                            marginBottom: '0rem',
                            lineHeight: 1.1,
                            color: 'var(--color-text-main)' // Dark Text
                        }}>
                            Expert Landscaping,<br />
                            Personalized for You
                        </h2>
                    </TextReveal>

                    <div style={{ maxWidth: '600px', marginBottom: '1rem' }}>
                        <TextReveal delay={0.2}>
                            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                                At Greengrove, we create beautiful, functional outdoor spaces with care and expertise.
                                From design to maintenance, our team delivers professional landscaping solutions
                                tailored to your home, ensuring every garden looks its best year-round.
                            </p>
                        </TextReveal>
                    </div>

                    <TextReveal delay={0.3}>
                        <a
                            href="https://wa.me/918089775753?text=Hi, I'm interested in working with Nature's Best."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ textDecoration: 'none' }}
                        >
                            <span>Work with us</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </TextReveal>
                </div>

                {/* Bottom Content: Infinite Marquee Scroll */}
                <div className="marquee-container" style={{
                    position: 'relative',
                    width: '100vw',
                    marginLeft: 'calc(-50vw + 50%)', // Break out of container
                    overflow: 'hidden',
                    paddingBottom: '0rem',
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}>
                    <div className="marquee-track">
                        {/* Double the images for seamless loop */}
                        {[...images, ...images, ...images].map((img, index) => (
                            <div
                                key={index}
                                style={{
                                    minWidth: 'clamp(250px, 80vw, 350px)', // Responsive width
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
