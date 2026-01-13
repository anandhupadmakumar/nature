import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import StatsSection from '@/components/StatsSection';
import ProjectGallery from '@/components/ProjectGallery';
import MarqueeSection from '@/components/MarqueeSection';
import Footer from '@/components/Footer';
import FloatingLeaves from '@/components/FloatingLeaves';
import ServicesSection from '@/components/ServicesSection';
import SpicesGallery from '@/components/SpicesGallery';
import WorkWithUs from '@/components/WorkWithUs';

export default function Home() {
  return (
    <main style={{
      backgroundColor: '#F8FAF9', // Very subtle off-white/green tint
      minHeight: '300vh',
      position: 'relative'
    }}>
      <FloatingLeaves />
      <Navbar />
      <Hero />
      <MarqueeSection />
      <FeatureSection
        title="Harmonious Living"
        description="Discover a lifestyle where modern luxury seamlessly blends with the raw beauty of nature."
        image="/assets/feature_tea_plantation_1768250471986.png"
        align="left"
      />
      <ServicesSection />
      <SpicesGallery />
      <StatsSection />
      <FeatureSection
        title="Intricate Details"
        description="Every leaf, every drop of dew, tells a story of the ecosystem we preserve."
        image="/assets/feature_macro_leaf_1768250487898.png"
        align="right"
      />
      <WorkWithUs />
      <FeatureSection
        title="Community First"
        description="Empowering local communities to become stewards of their own land, creating a cycle of prosperity."
        image="/assets/planting_hands_1768272883340.png"
        align="left"
      />
      <ProjectGallery />
      <Footer />
    </main>
  );
}
