import TopHeroSection from './components/TopHeroSection'
import CredBar from './components/CredBar'
import HeroSection from './components/HeroSection'
import PopularCategory from './components/PopularCategory'
import PopularProducts from './components/PopularProducts'
import HealthBenefits from './components/HealthBenefits'
import LiveHydrogenBenefits from './components/LiveHydrogenBenefits'
import WhoLovesLife from './components/WhoLovesLife'
import TrustPilotReviews from './components/TrustPilotReviews'
import HealthySolutions from './components/HealthySolutions'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import SeparationOfIons from './components/SeparationOfIons'
import PeerReviewedArticles from './components/PeerReviewedArticles'
import FreshWaterApproach from './components/FreshWaterApproach'
import MachineHero from './components/MachineHero'
import TrueCostComparison from './components/TrueCostComparison'
import BestSellers from './components/BestSellers'
import CustomWaterSystem from './components/CustomWaterSystem'
import FAQ from './components/FAQ'
import TalkToExpert from './components/TalkToExpert'
import ServiceFeatures from './components/ServiceFeatures'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="w-full">
      <TopHeroSection />
      <CredBar />
      <HeroSection />
      <PopularCategory />
      <PopularProducts />
      <HealthBenefits />
      <LiveHydrogenBenefits />
      <WhoLovesLife />
      <TrustPilotReviews />
      <HealthySolutions />
      <TestimonialsCarousel />
      <SeparationOfIons />
      <PeerReviewedArticles />
      <FreshWaterApproach />
      <MachineHero />
      <TrueCostComparison />
      <BestSellers />
      <CustomWaterSystem />
      <FAQ />
      <TalkToExpert />
      <ServiceFeatures />
      <Certifications />
      <Footer />
      {/* Additional content can go here */}
    </main>
  )
}

