'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ServiceCard = ({ title, description, image, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
            <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '0.8',
                borderRadius: 'var(--border-radius-lg)',
                overflow: 'hidden'
            }}>
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="hover-scale"
                />
            </div>
            <div>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'var(--color-text-light)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-heading)'
                }}>
                    {title}
                </h3>
                <p style={{
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.6
                }}>
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default function ServicesSection() {
    const services = [
        {
            title: "Plantation Management",
            description: "Expert oversight for your estate, ensuring optimal growth and yield through sustainable practices.",
            image: "/assets/misty_mountains_1768272938607.png"
        },
        {
            title: "Custom Plantation Design",
            description: "Tailored landscape designs that blend exotic spices and native flora to create breathtaking sanctuary spaces.",
            image: "/assets/kerala_garden_luxury_1768279261196.png"
        },
        {
            title: "Spice Estate Cultivation",
            description: "Specialized cultivation of premium spices like cardamom and pepper, integrating productivity with beauty.",
            image: "/assets/spice_cardamom_1768279277253.png"
        }
    ];

    return (
        <section className="section" style={{ padding: '8rem 0' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ marginBottom: '5rem', maxWidth: '800px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            color: 'var(--color-secondary)',
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
                            color: 'var(--color-text-light)'
                        }}
                    >
                        Natural Space Solutions Tailored for You
                    </motion.h2>
                </div>

                {/* Services Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            delay={0.2 + (index * 0.1)}
                        />
                    ))}
                </div>
            </div>
            <style jsx global>{`
                .hover-scale:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </section>
    );
}
