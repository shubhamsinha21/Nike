import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <img src={imgURL} alt="customer"
      className='rounded-full object-cover size-32 shadow-xl 
      hover:-translate-y-4 transition duration-300 cursor-pointer'
      />

      <p>{feedback}</p>

      <div className='mt-3 flex justify-center items-center gap-2'>
        <img src={star} alt='star'
        className='size-6 object-contain'
        />
        <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
      </div>
      <h3 className=' font-palanquin mt-1 text-3xl text-center font-bold'>{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
