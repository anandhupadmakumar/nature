'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FeatureSection({ title, description, image, align = 'left' }) {
    const isLeft = align === 'left';

    return (
        <section className="container section" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '4rem',
            alignItems: 'center',
            minHeight: '80vh'
        }}>
            {/* Text Content */}
            <motion.div
                style={{ order: isLeft ? 1 : 2 }}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <span style={{
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-primary-dark)',
                    marginBottom: '1rem',
                    display: 'block',
                    opacity: 0.7
                }}>
                    Discover
                </span>
                <h2 style={{
                    fontSize: '3rem',
                    marginBottom: '1.5rem',
                    color: 'var(--color-primary-dark)'
                }}>
                    {title}
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    color: '#4a4a4a',
                    maxWidth: '500px'
                }}>
                    {description}
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        marginTop: '2rem',
                        background: 'var(--color-primary-dark)',
                        color: 'white',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}
                >
                    Explore More
                </motion.button>
            </motion.div>

            {/* Image Content - with Parallax/Scale effect */}
            <motion.div
                style={{
                    order: isLeft ? 2 : 1,
                    height: '600px',
                    width: '100%',
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden'
                }}
                initial={{ clipPath: 'inset(10% 10% 10% 10%)', opacity: 0 }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)',
                    pointerEvents: 'none'
                }} />
            </motion.div>
        </section>
    );
}
