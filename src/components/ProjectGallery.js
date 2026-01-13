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
        size: "wide"
    }
];

export default function ProjectGallery() {
    return (
        <section className="container section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ marginBottom: '4rem', textAlign: 'center' }}
            >
                <h2 className="serif-italic" style={{ fontSize: '3rem', color: 'var(--color-primary-dark)' }}>Our Impact</h2>
                <p style={{ maxWidth: '600px', margin: '1rem auto', opacity: 0.7 }}>
                    Witnessing the transformation, one sapling at a time.
                </p>
            </motion.div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '2rem',
                autoRows: 'minmax(300px, auto)'
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        style={{
                            gridColumn: project.size === 'large' ? 'span 8' : project.size === 'wide' ? 'span 12' : 'span 4',
                            gridRow: project.size === 'large' ? 'span 2' : 'span 1',
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
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            padding: '2rem',
                            color: 'white'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.location}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <style jsx global>{`
        .hover-scale:hover {
          transform: scale(1.05) !important;
        }
      `}</style>
        </section>
    );
}
