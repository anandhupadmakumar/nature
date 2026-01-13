'use client';
import { motion } from 'framer-motion';

export default function MarqueeSection() {
    const partners = [
        { name: "EcoWorld", font: "var(--font-sans)" },
        { name: "GreenFuture", font: "var(--font-serif)" }, // Mixed fonts for "logo" look
        { name: "SustainLife", font: "var(--font-sans)" },
        { name: "PureEarth", font: "var(--font-serif)" },
        { name: "ForestGuardian", font: "var(--font-sans)" },
        { name: "WildReserve", font: "var(--font-serif)" },
        { name: "NatureTrust", font: "var(--font-sans)" },
        { name: "BioSphere", font: "var(--font-serif)" }
    ];

    return (
        <section style={{
            padding: '6rem 0',
            background: 'linear-gradient(to bottom, #F0F4F2, #E6ECEA)', // Subtle organic gradient
            borderTop: '1px solid rgba(1, 50, 32, 0.05)',
            borderBottom: '1px solid rgba(1, 50, 32, 0.05)',
            position: 'relative'
        }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'var(--color-primary-dark)',
                    opacity: 0.6
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
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    style={{ display: 'flex', gap: '6rem', width: 'fit-content', paddingLeft: '6rem' }}
                >
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <span key={index} style={{
                            fontSize: '2.5rem',
                            fontWeight: 600,
                            color: 'var(--color-primary-dark)',
                            opacity: 0.4,
                            fontFamily: partner.font,
                            fontStyle: partner.font.includes('serif') ? 'italic' : 'normal',
                            whiteSpace: 'nowrap',
                            cursor: 'default',
                            transition: 'opacity 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.target.style.opacity = '1'}
                            onMouseLeave={(e) => e.target.style.opacity = '0.4'}
                        >
                            {partner.name}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
