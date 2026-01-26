'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const spices = [
    { name: "Premium Cardamom", price: "Enquire for Price", image: "/assets/spice_cardamom_1768279277253.png" },
    { name: "Organic Black Pepper", price: "Enquire for Price", image: "/assets/spice_black_pepper_1768279298151.png" },
    { name: "Ceylon Cinnamon", price: "Enquire for Price", image: "/assets/spice_cinnamon_1768279313565.png" },
    { name: "Hill Turmeric", price: "Coming Soon", image: "/assets/feature_tea_plantation_1768250471986.png" } // Reusing generic as placeholder or "Hill" context
];

export default function SpicesGallery() {
    return (
        <section className="section" style={{ background: '#fcfdfc' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '4rem' }}>
                    <div>
                        <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6 }}>From our plantations</span>
                        <h2 className="serif-bold-white" style={{ fontSize: '3rem', color: 'var(--color-primary-dark)' }}>Organic Spices</h2>
                    </div>
                    <button style={{
                        background: 'transparent',
                        border: '1px solid var(--color-primary-dark)',
                        padding: '0.8rem 2rem',
                        borderRadius: '50px',
                        color: 'var(--color-primary-dark)',
                        cursor: 'pointer'
                    }}>View All Products</button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {spices.map((spice, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative', group: 'card' }}
                        >
                            <div style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                height: '350px',
                                position: 'relative',
                                marginBottom: '1rem'
                            }}>
                                <Image
                                    src={spice.image}
                                    alt={spice.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    right: '1rem',
                                    background: 'white',
                                    borderRadius: '50%',
                                    width: '50px',
                                    height: '50px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                    cursor: 'pointer'
                                }}>
                                    <a href={`https://wa.me/918089775753?text=I would like to order ${spice.name}`} target="_blank" rel="noopener noreferrer">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{spice.name}</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>{spice.price}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
