import { Wrapper } from "../../ui/Wrapper";
import { featuresData } from "./data";
import { Feature } from "./Feature";

export const Features = () => {
  return (
    <Wrapper type="features">
      <section className="mb-20 grid place-items-start gap-6 md:mb-32 md:grid-cols-2 lg:grid-cols-4">
        {featuresData.map((feature) => (
          <Feature {...feature} key={feature.id} />
        ))}
      </section>
    </Wrapper>
  );
};
