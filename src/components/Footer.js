import Image from 'next/image';

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: 'var(--color-primary-dark)',
            color: 'var(--color-primary-light)',
            padding: '4rem 2rem',
            textAlign: 'center'
        }}>
            <div className="container">
                <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 1.5rem' }}>
                    <Image
                        src="/assets/logo.jpeg"
                        alt="Greengrove Logo"
                        fill
                        style={{ objectFit: 'contain', borderRadius: '50%' }}
                    />
                </div>
                <h2 className="serif-bold-white" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Greengrove.</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', opacity: 0.8 }}>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Experiences</a>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
                    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
                </div>
                <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>
                    &copy; {new Date().getFullYear()} Greengrove Plantations. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
