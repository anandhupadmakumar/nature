'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Image from 'next/image';

const AnimatedText = ({ text, className, style }) => {
    // Split text into words, then characters for granular control
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 50,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h1
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center", ...style }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {words.map((word, index) => (
                <span key={index} style={{ display: "flex", marginRight: "0.25em" }}>
                    {Array.from(word).map((character, index) => (
                        <motion.span variants={child} key={index}>
                            {character}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.h1>
    );
};

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Mouse Parallax Logic
    const mouseXValue = useMotionValue(0);
    const mouseYValue = useMotionValue(0);

    const mouseX = useSpring(mouseXValue, { damping: 25, stiffness: 150 });
    const mouseY = useSpring(mouseYValue, { damping: 25, stiffness: 150 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Calculate mouse position relative to window center (-20 to 20 for parallax effect)
            const { innerWidth, innerHeight } = window;
            const targetX = (e.clientX / innerWidth - 0.5) * 40;
            const targetY = (e.clientY / innerHeight - 0.5) * 40;

            mouseXValue.set(targetX);
            mouseYValue.set(targetY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseXValue, mouseYValue]);

    return (
        <div ref={containerRef} style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
            {/* Background Image with Parallax & Subtle Scale */}
            <motion.div style={{ y, opacity, width: '100%', height: '120%', position: 'absolute', top: 0, left: 0 }}>
                <motion.div
                    animate={{ scale: [1, 1.05] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                >
                    <Image
                        src="/assets/hero_bg_1768250456064.png"
                        alt="Deep Forest"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(1, 50, 32, 0.6) 100%)'
                    }} />
                </motion.div>
            </motion.div>

            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'var(--color-primary-light)',
                textAlign: 'center',
                perspective: '1000px' // Initializing 3D space
            }}>
                {/* Title with Staggered Reveal */}
                <div style={{ marginBottom: '2rem' }}>
                    <AnimatedText
                        text="Experience the Untouched Beauty"
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 6rem)',
                            maxWidth: '15ch',
                            lineHeight: 1,
                        }}
                    />
                </div>

                {/* Subtitle with Mouse Parallax */}
                <motion.div
                    style={{ x: mouseX, y: mouseY, maxWidth: '600px', fontSize: '1.2rem', opacity: 0.9 }}
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, delay: 1 }}
                >
                    <p>Immerse yourself in the world's most exclusive nature retreats, where luxury meets the wild.</p>
                </motion.div>

                {/* Enhanced Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    style={{ position: 'absolute', bottom: '3rem' }}
                >
                    <div style={{
                        width: '1px',
                        height: '60px',
                        background: 'rgba(255,255,255,0.1)',
                        margin: '0 auto',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <motion.div
                            animate={{ y: ['-100%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                width: '100%',
                                height: '50%',
                                background: 'linear-gradient(to bottom, transparent, #fff, transparent)',
                                position: 'absolute',
                                top: 0
                            }}
                        />
                    </div>
                    <p style={{ marginTop: '1rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.7 }}>Scroll to Explore</p>
                </motion.div>
            </div>
        </div>
    );
}
