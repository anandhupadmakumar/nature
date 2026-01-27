'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ServiceCard = ({ title, description, image, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                height: '100%',
                background: 'white',
                borderRadius: 'var(--border-radius-lg)',
                padding: '1.5rem',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}
        >
            <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1',
                borderRadius: '12px',
                overflow: 'hidden',
                flexShrink: 0
            }}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="hover-scale"
                />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'var(--color-text-main)',
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-heading)',
                    lineHeight: 1.2
                }}>
                    {title}
                </h3>
                <p style={{
                    fontSize: '1rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    margin: 0
                }}>
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default function ServicesSection() {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const services = [
        {
            title: "Our Plantations",
            description: "Ginger, banana, vegetables, and spices cultivated and managed directly on our own plantations.",
            image: "/assets/service_plantation.png"
        },
        {
            title: "Farmhouse Development & Care",
            description: "Design, development, and ongoing management of farmhouses with exotic plants, animals, and birds.",
            image: "/assets/service_farmhouse.png"
        },
        {
            title: "Plantation Management",
            description: "End-to-end plantation maintenance, monitoring, and long-term care.",
            image: "/assets/service_management.png"
        },
        {
            title: "Exotic Fruit Collection",
            description: "A curated collection of 800+ exotic fruit varieties, available for online sale.",
            image: "/assets/service_fruits.png"
        }
    ];

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            setActiveIndex(index);
        }
    };

    const scrollTo = (index) => {
        if (scrollRef.current) {
            const clientWidth = scrollRef.current.clientWidth;
            scrollRef.current.scrollTo({
                left: index * clientWidth,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '4rem', overflow: 'hidden' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            color: 'var(--color-primary-dark)',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            marginBottom: '1rem',
                            display: 'block'
                        }}
                    >
                        Our Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            lineHeight: 1.1,
                            color: 'var(--color-text-main)'
                        }}
                    >
                        Natural Space Solutions <br />Tailored for You
                    </motion.h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="services-scroll-container"
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        overflowX: 'auto',
                        padding: '1rem 0 2rem',
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                        cursor: 'grab',
                        scrollSnapType: 'x mandatory'
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            style={{
                                width: 'min(400px, 85vw)',
                                flexShrink: 0,
                                scrollSnapAlign: 'start'
                            }}
                        >
                            <ServiceCard {...service} delay={0.1 * index} />
                        </div>
                    ))}
                </div>

                {/* Indicators (Dots) */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    marginTop: '2rem'
                }}>
                    {services.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            style={{
                                width: activeIndex === index ? '24px' : '8px',
                                height: '8px',
                                borderRadius: '4px',
                                background: activeIndex === index ? 'var(--color-primary-dark)' : 'rgba(0,0,0,0.1)',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                padding: 0
                            }}
                            aria-label={`Go to service ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .services-scroll-container::-webkit-scrollbar {
                    display: none;
                }
                
                .hover-scale {
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .hover-scale:hover {
                    transform: scale(1.08);
                }
            `}</style>
        </section>
    );
}
