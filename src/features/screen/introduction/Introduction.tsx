import { CustomLink } from "../../ui/CustomLink";
import { Wrapper } from "../../ui/Wrapper";

export const Introduction = () => {
  return (
    <Wrapper type="typography">
      <div className="mb-20 grid place-items-center gap-4 md:mb-32 md:grid-cols-2">
        <picture className="order-1 md:-order-1">
          <source
            srcSet="./images/individual.png"
            media="(max-width:768px)"
            width={709}
            height={457}
          />
          <img
            src="./images/individual.png"
            alt="Just Movie individual movie"
            width={939}
            height={504}
          />
        </picture>
        <div className="text-center text-slate-50 md:text-left">
          <h2 className="mb-8 text-2xl font-medium md:text-3xl">
            Oglądanie za darmo nigdy nie było takie łatwe
          </h2>
          <p className="mb-12 text-xl">
            Zarejestruj się w naszym serwisie a my dalej pokierujemy twoją
            ścieżką bez znaczenia z jakiego rodzaju urządzenia korzystasz.
          </p>
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <CustomLink to={""} type="primary">
              Oglądaj za darmo
            </CustomLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
