'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
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
                padding: '0 3rem',
                zIndex: 50,
                color: 'var(--color-text-light)',
            }}
        >
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    letterSpacing: '-0.02em'
                }}>
                    Nature's Best<span style={{ color: '#ffffff' }}>.</span>
                </div>
            </Link>

            {/* Navigation Links */}
            <div style={{
                display: 'flex',
                gap: '2.5rem',
                alignItems: 'center',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                fontWeight: 500
            }}>
                {['About', 'Services', 'Works'].map((item) => (
                    <Link key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit', opacity: 0.8, transition: 'opacity 0.2s' }}>
                        {item}
                    </Link>
                ))}

                <Link href="#contact" style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    border: '1px solid rgba(255,255,255,0.3)',
                    padding: '0.6rem 1.4rem',
                    borderRadius: 'var(--border-radius-pill)',
                    transition: 'all 0.3s ease'
                }}>
                    Contact
                </Link>
            </div>
        </motion.nav>
    );
}
