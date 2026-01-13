'use client';
import { motion } from 'framer-motion';

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
                padding: '0 2rem',
                zIndex: 50,
                color: 'var(--color-primary-light)',
                mixBlendMode: 'difference' // Cool premium effect against light/dark backgrounds
            }}
        >
            <div style={{ fontWeight: 600, fontSize: '1.25rem', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ width: '12px', height: '12px', background: 'currentColor', borderRadius: '50%' }}></div>
                Greengrove.
            </div>

            <button style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
            }}>
                Menu
            </button>
        </motion.nav>
    );
}
