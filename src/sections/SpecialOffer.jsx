import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-container gap-10 max-xl:flex-col-reverse">
      <div className="drop-shadow-lg">
        <img src={offer} alt="offer" className="w-700 h-600 object-contain" />
      </div>

      <div className="flex flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red drop-shadow-md">Special</span> {""}
          Offer
        </h2>
        <p
          className="font-montserrat text-slate-gray 
        leading-8 mt-6 mb-14 lg:max-w-lg"
        >
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer great value that sets us apart.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of expectations.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
