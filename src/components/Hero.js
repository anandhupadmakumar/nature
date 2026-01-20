'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import TextReveal from './TextReveal';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div ref={containerRef} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', background: 'var(--color-primary-darker)' }}>
            {/* Background Image with Parallax */}
            <motion.div style={{ y, opacity, width: '100%', height: '110%', position: 'absolute', top: 0, left: 0 }}>
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Image
                        src="/assets/planting_hands_1768272883340.png"
                        alt="Growing Nature's Best"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        priority
                    />
                    {/* Gradient Overlay for Text Readability - Darkened for White Theme Contrast */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.3) 100%)'
                    }} />
                    {/* Additional bottom gradient to fade into white content smoothly (optional, but good for professional look) */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '150px',
                        background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))'
                    }} />
                </div>
            </motion.div>

            {/* Content */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 10,
                height: '100%',
                minHeight: '100vh', // Ensure full height but allow growth
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                color: 'var(--color-text-light)',
                paddingTop: 'var(--header-height)',
                paddingBottom: '4rem' // Add bottom padding for safety
            }}>
                <div style={{ maxWidth: '900px', marginBottom: '1.5rem' }}>
                    <TextReveal immediate={true}>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 10vw, 5.5rem)', // Responsive font size
                            lineHeight: 1.1,
                            margin: 0,
                            color: '#ffffff'
                        }}>
                            Growing <span className="serif-italic">Nature’s Best</span>,
                        </h1>
                    </TextReveal>
                    <TextReveal delay={0.2} immediate={true}>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 10vw, 5.5rem)', // Responsive font size
                            lineHeight: 1.1,
                            margin: 0,
                            color: '#ffffff'
                        }}>
                            For Generations Ahead.
                        </h1>
                    </TextReveal>
                </div>

                <div style={{ maxWidth: '500px', marginBottom: '2.5rem' }}>
                    <TextReveal delay={0.4} immediate={true}>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
                            We believe in sustainable farming practices that honor the earth
                            and provide the purest produce for your table.
                        </p>
                    </TextReveal>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Link href="#contact" className="btn-primary" style={{ textDecoration: 'none', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                        <span>Work with us</span>
                        {/* Simple Arrow Icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="hidden-mobile" // Hide on very small screens to save space? Or keep it. keeping for now but check height.
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}
            >
                <div style={{
                    width: '1px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.2)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <motion.div
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        style={{
                            width: '100%',
                            height: '50%',
                            background: '#fff',
                            position: 'absolute',
                            top: 0
                        }}
                    />
                </div>
            </motion.div>
        </div >
    );
}
