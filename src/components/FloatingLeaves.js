'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LeafSVG = ({ style, color }) => (
    <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        style={{ ...style, fill: color, opacity: 0.7 }}
    >
        <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,11,4,16,8.41,17,8Z" />
    </svg>
);

export default function FloatingLeaves() {
    const [leaves, setLeaves] = useState([]);

    const colors = [
        '#2E8B57', // SeaGreen
        '#3CB371', // MediumSeaGreen
        '#556B2F', // DarkOliveGreen
        '#6B8E23', // OliveDrab
        '#8FBC8F', // DarkSeaGreen
        '#013220', // Dark Green
        '#DAA520', // GoldenRod (Autumn accent)
    ];

    useEffect(() => {
        // Generate random leaves on client side to avoid hydration mismatch
        const generatedLeaves = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            rotate: Math.random() * 360,
            scale: 0.5 + Math.random() * 1,
            duration: 15 + Math.random() * 20,
            delay: Math.random() * 5,
            color: colors[Math.floor(Math.random() * colors.length)]
        }));
        setLeaves(generatedLeaves);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
            overflow: 'hidden'
        }}>
            {leaves.map((leaf) => (
                <motion.div
                    key={leaf.id}
                    initial={{
                        x: `${leaf.x}vw`,
                        y: -100,
                        opacity: 0,
                        rotate: leaf.rotate
                    }}
                    animate={{
                        y: '110vh',
                        x: `${leaf.x + (Math.random() * 20 - 10)}vw`,
                        opacity: [0, 0.4, 0],
                        rotate: leaf.rotate + 360
                    }}
                    transition={{
                        duration: leaf.duration,
                        repeat: Infinity,
                        delay: leaf.delay,
                        ease: "linear"
                    }}
                    style={{ position: 'absolute' }}
                >
                    <LeafSVG style={{ transform: `scale(${leaf.scale})` }} color={leaf.color} />
                </motion.div>
            ))}
        </div>
    );
}
