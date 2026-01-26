'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Works', href: '#works' }
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: 'var(--header-height)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 2rem', // Reduced padding for mobile safety, container handles max-width
                zIndex: 50,
                color: scrolled || mobileMenuOpen ? 'var(--color-text-main)' : 'white', // White on Hero, Dark on Scroll
                // Actually, if the Hero is an image, we might need white text initially. 
                // BUT user asked for "White Background" globally. 
                // Let's assume standard sticky nav behavior:
                // Scrolled: White bg, Dark text.
                // Top: Transparent bg. Text depends on Hero. 
                // Given "White Professional", let's stick to Dark Text for now unless Hero is dark.
                // Assuming Hero is still the image, let's keep text dynamic? 
                // Re-reading request: "too much green background make white". 
                // User likely wants a clean white aesthetic. 
                // Let's make the nav background white on scroll, transparent at top, but ensure text is readable.
                backgroundColor: scrolled || mobileMenuOpen ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.3s ease'
            }}
            className="navbar-container"
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: 0 }}>
                {/* Logo */}
                <Link href="/" style={{ textDecoration: 'none', color: 'inherit', zIndex: 60 }}>
                    <div style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        display: 'flex',
                        gap: '4px'
                    }}>
                        {/* <div style={{ position: 'relative', width: '40px', height: '40px', marginRight: '0.5rem' }}>
                            <Image
                                src="/assets/logo.jpeg"
                                alt="Logo"
                                fill
                                style={{
                                    objectFit: 'contain',
                                    borderRadius: '50%', // Optional: if it's square/round
                                    // Filter logic: Invert when transparent (trying to make it white), None when scrolled
                                    filter: scrolled || mobileMenuOpen ? 'none' : 'brightness(0) invert(1)'
                                }}
                            />
                        </div> */}
                        <span className="serif-bold-white" style={{ color: 'inherit', fontSize: '1.2rem' }}>Nature's Best</span><span style={{ color: 'var(--color-primary-dark)' }}>.</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden-mobile" style={{
                    display: 'flex',
                    gap: '2.5rem',
                    alignItems: 'center',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    fontWeight: 500
                }}>
                    {navLinks.map((item) => (
                        <Link key={item.name} href={item.href} style={{ textDecoration: 'none', color: 'inherit', opacity: 0.8, transition: 'opacity 0.2s' }}>
                            {item.name}
                        </Link>
                    ))}

                    <Link href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem' }}>
                        Contact
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="visible-mobile"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: 'none', // Hidden by default, shown via CSS
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: 60, // Above menu
                        padding: '10px',
                        color: 'inherit'
                    }}
                >
                    <div style={{ width: '24px', height: '20px', position: 'relative' }}>
                        {/* Top Bar */}
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: 45, y: 9 }
                            }}
                            animate={mobileMenuOpen ? "open" : "closed"}
                            transition={{ duration: 0.3 }} // Fast, clean transition
                            style={{ display: 'block', width: '100%', height: '2px', background: 'currentColor', position: 'absolute', top: 0, borderRadius: '4px', transformOrigin: 'center' }}
                        />
                        {/* Middle Bar */}
                        <motion.span
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            animate={mobileMenuOpen ? "open" : "closed"}
                            transition={{ duration: 0.2 }}
                            style={{ display: 'block', width: '100%', height: '2px', background: 'currentColor', position: 'absolute', top: '9px', borderRadius: '4px' }}
                        />
                        {/* Bottom Bar */}
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 18 },
                                open: { rotate: -45, y: 9 }
                            }}
                            animate={mobileMenuOpen ? "open" : "closed"}
                            transition={{ duration: 0.3 }}
                            style={{ display: 'block', width: '100%', height: '2px', background: 'currentColor', position: 'absolute', top: 0, borderRadius: '4px', transformOrigin: 'center' }}
                        />
                    </div>
                </button>
            </div >

            {/* Mobile Menu Overlay */}
            < AnimatePresence >
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: '100dvh', // Dynamic viewport height for mobile browsers
                            background: 'rgba(255, 255, 255, 0.98)',
                            backdropFilter: 'blur(15px)',
                            zIndex: 40, // Below Header (50) so header text sits on top? 
                            // Wait, if zIndex is 55 (above header), we need padding. 
                            // If zIndex is 40 (below header), the header bg (white) covers the top part.
                            // User said 'aligned in top' -> likely meaning it's starting TOO HIGH (under header).
                            // Let's put it BELOW the header explicitly.
                            // Or keep it fullscreen (z=55) but center better.
                            // Let's stick to z=55 but use flex center properly.
                            zIndex: 55,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: '0', // Reset padding
                            gap: '3rem'
                        }}
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.1,
                                        delayChildren: 0.1
                                    }
                                }
                            }}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
                        >
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'var(--color-text-main)',
                                        fontSize: '2rem',
                                        fontWeight: 700,
                                        fontFamily: 'var(--font-sans)'
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="btn-primary"
                                style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>
                )
                }
            </AnimatePresence >
        </motion.nav >
    );
}
