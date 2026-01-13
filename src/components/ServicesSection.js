'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        title: "Landscape Architecture",
        description: "Holistic garden design that blends traditional Kerala aesthetics with modern luxury.",
        image: "/assets/landscape_service_1768279332662.png"
    },
    {
        title: "Tropical Garden Maintenance",
        description: "Expert care for delicate palms, exotic flora, and organic soil regeneration.",
        image: "/assets/kerala_garden_luxury_1768279261196.png"
    },
    {
        title: "Organic Farming Setup",
        description: "Turn your backyard into a sustainable food forest with our turnkey farming solutions.",
        image: "/assets/planting_hands_1768272883340.png"
    }
];

export default function ServicesSection() {
    return (
        <section className="container section">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                <h2 className="serif-italic" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>Our Expertise</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.7 }}>
                    Crafting living masterpieces that breathe life into your surroundings.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        style={{
                            background: 'white',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                        }}
                    >
                        <div style={{ height: '300px', position: 'relative', overflow: 'hidden' }}>
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                className="hover-zoom"
                            />
                        </div>
                        <div style={{ padding: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary-dark)' }}>{service.title}</h3>
                            <p style={{ lineHeight: 1.6, opacity: 0.8, fontSize: '1rem' }}>{service.description}</p>
                            <a
                                href={`https://wa.me/911234567890?text=Hi, I'm interested in your ${service.title} service.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-block',
                                    marginTop: '1.5rem',
                                    color: 'var(--color-primary-dark)',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    borderBottom: '1px solid currentColor',
                                    paddingBottom: '2px'
                                }}
                            >
                                Enquire Now &rarr;
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
            <style jsx global>{`
        .hover-zoom:hover { transform: scale(1.05); }
      `}</style>
        </section>
    );
}
