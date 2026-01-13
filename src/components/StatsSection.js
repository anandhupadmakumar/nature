'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ from, to, duration = 2 }) {
    const [count, setCount] = useState(from);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let startTime;
            let animationFrame;

            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

                setCount(Math.floor(progress * (to - from) + from));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(step);
                }
            };

            animationFrame = requestAnimationFrame(step);

            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, from, to, duration]);

    return <span ref={nodeRef}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
    const stats = [
        { label: "Trees Planted", value: 125000, suffix: "+" },
        { label: "Acres Restored", value: 8500, suffix: " ha" },
        { label: "Species Protected", value: 142, suffix: "" },
        { label: "CO₂ Offset", value: 45000, suffix: " tons" },
    ];

    return (
        <section className="section" style={{ background: 'var(--color-primary-dark)', color: 'var(--color-primary-light)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', textAlign: 'center' }}>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <div style={{ fontSize: '3.5rem', fontWeight: 300, marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                            <Counter from={0} to={stat.value} />{stat.suffix}
                        </div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
