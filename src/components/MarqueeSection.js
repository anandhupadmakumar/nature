'use client';
import { motion } from 'framer-motion';

export default function MarqueeSection() {
    const partners = [
        { name: "EcoWorld", font: "var(--font-sans)" },
        { name: "GreenFuture", font: "var(--font-sans)" },
        { name: "SustainLife", font: "var(--font-sans)" },
        { name: "PureEarth", font: "var(--font-sans)" },
        { name: "ForestGuardian", font: "var(--font-sans)" },
        { name: "WildReserve", font: "var(--font-sans)" },
        { name: "NatureTrust", font: "var(--font-sans)" },
        { name: "BioSphere", font: "var(--font-sans)" }
    ];

    return (
        <section style={{
            padding: '4rem 0', // Reduced padding from 6rem
            background: 'var(--color-bg-secondary)', // Use theme secondary bg (light gray)
            borderTop: '1px solid rgba(0, 0, 0, 0.05)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
            position: 'relative'
        }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'var(--color-primary-dark)', // Green text
                    opacity: 0.8,
                    fontWeight: 600
                }}>
                    Trusted by Global Leaders
                </span>
            </div>

            <div style={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
            }}>
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} // Slower duration for elegance
                    style={{ display: 'flex', gap: '5rem', width: 'fit-content', paddingLeft: '5rem', alignItems: 'center' }}
                >
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <span key={index} style={{
                            fontSize: '2rem', // Slightly smaller
                            fontWeight: 600,
                            color: 'var(--color-text-main)', // Dark text for white theme
                            opacity: 0.6, // Higher opacity
                            fontFamily: partner.font,
                            fontStyle: 'normal',
                            whiteSpace: 'nowrap',
                            cursor: 'default',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.opacity = '1';
                                e.target.style.color = 'var(--color-primary-dark)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.opacity = '0.6';
                                e.target.style.color = 'var(--color-text-main)';
                            }}
                        >
                            {partner.name}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
