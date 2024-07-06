import { Accordion } from "../features/accordion/Accordion";
import { homeAccordion } from "../features/accordion/data";
import { Features } from "../features/screen/features/Features";
import { Introduction } from "../features/screen/introduction/Introduction";
import { Hero } from "../layout/Hero";
import { HomeNavigation } from "../layout/HomeNavigation";

export const Home = () => {
  return (
    <div className="min-h-screen bg-primary py-4">
      <Hero>
        <HomeNavigation />
      </Hero>
      <Features />
      <Introduction />
      <Accordion data={homeAccordion} />
    </div>
  );
};
