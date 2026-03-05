import { HeroSection } from "./HeroSection";
import { AdvantagesSection } from "./AdvantagesSection";
import { ReviewsSection } from "./ReviewsSection";

export const HomePage = () => {
  return (
    <main className="pt-41.5 flex flex-col gap-40">
      <HeroSection />
      <AdvantagesSection />
      <ReviewsSection />
    </main>
  );
};
