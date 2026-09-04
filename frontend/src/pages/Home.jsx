import HeroStats from "../components/HeroStats";
import Hero from "../components/Hero.jsx";
import TrustedBy from "../components/TrustedBy.jsx";
import PopularDestinations from "../components/PopularDestinations.jsx";
import FeaturedPackages from "../components/FeaturedPackages.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import AIPlannerBanner from "../components/AIPlannerBanner.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Newsletter from "../components/Newsletter.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroStats />
      <TrustedBy />
      <PopularDestinations />
      <FeaturedPackages />
      <WhyChooseUs />
      <AIPlannerBanner />
      <Testimonials />
      <Newsletter />
    </>
  );
}
