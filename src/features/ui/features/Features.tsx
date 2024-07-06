import { Wrapper } from "../Wrapper";
import { featuresData } from "./data";
import { Feature } from "./Feature";

export const Features = () => {
  return (
    <Wrapper type="features">
      <section className="grid place-items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featuresData.map((feature) => (
          <Feature {...feature} key={feature.id} />
        ))}
      </section>
    </Wrapper>
  );
};
