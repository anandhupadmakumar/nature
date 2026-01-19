'use client';
import { motion } from 'framer-motion';

export default function TextReveal({ children, delay = 0, className = "", width = "fit-content", immediate = false, wind = false }) {
    return (
        <div style={{ width: width, display: 'block', position: 'relative', overflow: 'visible' }} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 70, skewY: 7 }}
                whileInView={!immediate ? { opacity: 1, y: 0, skewY: 0 } : undefined}
                animate={immediate ? { opacity: 1, y: 0, skewY: 0 } : undefined}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                    duration: 1.2,
                    delay: delay,
                    ease: [0.19, 1, 0.22, 1]
                }}
            >
                {wind ? (
                    <motion.div
                        animate={{ x: [0, 10, 0], skewX: [0, 2, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: delay + 1.2 // Start after reveal
                        }}
                    >
                        {children}
                    </motion.div>
                ) : (
                    children
                )}
            </motion.div>
        </div>
    );
}
