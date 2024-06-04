const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="shadow-2xl px-10 py-16 w-full rounded-3xl 
    flex-1 sm:w-[350px] sm:min-w-[350px] hover:scale-105 
    cursor-pointer hover:shadow-orange-300"
    >
      <div
        className="w-10 h-10 flex justify-center 
      items-center bg-coral-red rounded-full"
      >
        <img src={imgURL} alt={label} className="w-6 h-6" />
      </div>
      <h3
        className="mt-5 font-palanquin font text-3xl 
      leading-normal font-bold"
      >
        {label}
      </h3>
      <p
        className="mt-3 break-words font-montserrat 
      leading-normal text-lg text-slate-gray"
      >
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
