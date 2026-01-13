'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WorkWithUs() {
    return (
        <section className="container section" style={{ paddingBottom: '0' }}>
            <div style={{
                background: 'var(--color-primary-dark)',
                borderRadius: '32px',
                overflow: 'hidden',
                color: 'var(--color-primary-light)',
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '500px'
            }}>
                <div style={{ padding: '6rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
                    <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: 1.1 }}>
                        Work with <br /> <span className="serif-italic" style={{ color: 'var(--color-accent)' }}>Nature's Best</span>
                    </h2>
                    <p style={{ opacity: 0.8, marginBottom: '3rem', maxWidth: '400px', fontSize: '1.1rem' }}>
                        Join our mission to restore biodiversity and create sustainable ecosystems. We are always looking for passionate partners and team members.
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://wa.me/911234567890?text=Hi, I'm interested in working with Greengrove."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            background: 'white',
                            color: 'var(--color-primary-dark)',
                            padding: '1.2rem 2.5rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            width: 'fit-content',
                            fontSize: '1rem'
                        }}
                    >
                        Chat on WhatsApp
                        <svg style={{ marginLeft: '10px' }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                    </motion.a>
                </div>

                <div style={{ position: 'relative', height: '100%', minHeight: '300px' }}>
                    <Image
                        src="/assets/sustainable_community_1768272920507.png"
                        alt="Work with us"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, rgba(1, 50, 32, 1), transparent)',
                    }} />
                </div>
            </div>
        </section>
    );
}
