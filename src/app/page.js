import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ProjectGallery from '@/components/ProjectGallery';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import SpicesGallery from '@/components/SpicesGallery';
import WorkWithUs from '@/components/WorkWithUs';
import MarqueeSection from '@/components/MarqueeSection'; // Re-adding Marquee

export default function Home() {
  return (
    <main style={{
      backgroundColor: 'var(--color-bg-body)', // Ensure White Theme
      minHeight: '100vh',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <Hero />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <SpicesGallery />
      <StatsSection />
      <WorkWithUs />
      <ProjectGallery />
      <Footer />
    </main>
  );
}
