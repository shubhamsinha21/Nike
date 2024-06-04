import Button from "../components/Button";
import {shoe8} from "../assets/images"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-around items-center
    max-container gap-10 w-full max-lg:flex-col "
    >
      <div className="flex flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You {""}
          <span className="text-coral-red drop-shadow-lg">Super</span> {""}
          <span className="text-coral-red drop-shadow-lg">Quality</span> {""}
          Shoes
        </h2>
        <p
          className="font-montserrat text-slate-gray 
        leading-8 mt-6 mb-14 lg:max-w-lg"
        >
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elevance.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-10">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex justify-center items-center drop-shadow-lg cursor-pointer hover:scale-110 transition duration-300 ">
        <img src={shoe8} alt="shoe8"
        className='w-[530px] h-[510px] object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
