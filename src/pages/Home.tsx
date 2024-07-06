import { Features } from "../features/ui/features/Features";
import { Hero } from "../layout/Hero";
import { HomeNavigation } from "../layout/HomeNavigation";

export const Home = () => {
  return (
    <div className="min-h-screen bg-primary py-4">
      <Hero>
        <HomeNavigation />
      </Hero>
      <Features />
    </div>
  );
};
