'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        title: "Rainforest Renewal",
        location: "Amazon Basin, Brazil",
        image: "/assets/biodiversity_forest_1768272902587.png",
        size: "large"
    },
    {
        title: "Community Reforestation",
        location: "Kerala, India",
        image: "/assets/planting_hands_1768272883340.png",
        size: "small"
    },
    {
        title: "Sustainable Eco-Lodge",
        location: "Munnar, India",
        image: "/assets/sustainable_community_1768272920507.png",
        size: "small"
    },
    {
        title: "High Altitude Preservation",
        location: "Himalayas, Nepal",
        image: "/assets/misty_mountains_1768272938607.png",
        size: "large"
    }
];

export default function ProjectGallery() {
    return (
        <section className="container section" style={{ marginBottom: '2rem', }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ marginBottom: '4rem', textAlign: 'center' }}
            >
                <h2 className="serif-bold-white" style={{ fontSize: '3rem', color: 'var(--color-primary-dark)' }}>Our Impact</h2>
                <p style={{ maxWidth: '600px', margin: '1rem auto', opacity: 0.7 }}>
                    Witnessing the transformation, one sapling at a time.
                </p>
            </motion.div>

            <div className="gallery-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className={`gallery-card ${project.size === 'large' ? 'span-large' : project.size === 'wide' ? 'span-wide' : 'span-small'}`}
                        style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            minHeight: '300px'
                        }}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                            className="hover-scale"
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)', // Stronger gradient
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: '2rem',
                            color: 'white'
                        }}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '0.5rem',
                                textShadow: '0 2px 4px rgba(0,0,0,0.3)', // Added shadow
                                color: 'white' // Force explicit white
                            }}>
                                {project.title}
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                opacity: 1, // Full opacity
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                                color: 'white'
                            }}>
                                {project.location}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <style jsx global>{`
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 2rem;
                    auto-rows: minmax(300px, auto);
                }

                .span-large { grid-column: span 8; }
                .span-wide { grid-column: span 12; }
                .span-small { grid-column: span 4; }
                
                .hover-scale:hover {
                    transform: scale(1.05) !important;
                }

                @media (max-width: 768px) {
                    .gallery-grid {
                        display: flex; /* Stack on mobile */
                        flex-direction: column;
                        gap: 1.5rem;
                    }
                    
                    .span-large, .span-wide, .span-small {
                        grid-column: auto;
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}
