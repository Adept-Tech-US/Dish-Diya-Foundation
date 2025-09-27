import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FoundersSection from '@/components/FoundersSection';
import ProjectsSection from '@/components/ProjectsSection';
import MissionSection from '@/components/MissionSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FoundersSection />
        <ProjectsSection />
        <MissionSection />
        <SocialMediaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;