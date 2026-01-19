'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Component for the "Masked Slide Up" text reveal effect
const TextReveal = ({ children, delay = 0, className = "" }) => {
    return (
        <div style={{ overflow: 'hidden' }} className={className}>
            <motion.div
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: delay, ease: [0.16, 1, 0.3, 1] }} // Premium "Apple-like" easing
            >
                {children}
            </motion.div>
        </div>
    );
};

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <div ref={containerRef} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
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
                    {/* Gradient Overlay for Text Readability */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 100%)'
                    }} />
                </div>
            </motion.div>

            {/* Content */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 10,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start', // Left alignment
                color: 'var(--color-text-light)',
                paddingTop: 'var(--header-height)'
            }}>
                <div style={{ maxWidth: '900px', marginBottom: '1.5rem' }}>
                    <TextReveal delay={0.2}>
                        <h1 style={{ lineHeight: 1.1, margin: 0 }}>
                            Growing <span className="serif-italic" style={{ color: '#ffffff' }}>Nature’s Best</span>,
                        </h1>
                    </TextReveal>
                    <TextReveal delay={0.3}>
                        <h1 style={{ lineHeight: 1.1, margin: 0 }}>
                            For Generations Ahead.
                        </h1>
                    </TextReveal>
                </div>

                <div style={{ maxWidth: '500px', marginBottom: '2.5rem' }}>
                    <TextReveal delay={0.5}>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
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
                    <Link href="#work-with-us" className="btn-primary" style={{ textDecoration: 'none' }}>
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
        </div>
    );
}
