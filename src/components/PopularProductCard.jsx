import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-col w-full max-sm:w-full group'>
      <img src={imgURL} alt={name}
        className='size-[280px] drop-shadow-lg cursor-pointer transition duration-300 hover:-translate-y-10 hover:z-10 group'
      />

      <div className='mt-8 flex justify-start gap-3'>
        <img src={star} alt='rating'
          className='w-4 h-4'
        />
        <p className='font-montserrat text-xl 
        leading-normal text-slate-gray'>
          (4.5)
        </p>

      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
      <p className='mt-2 font-semibold font-montserrat text-2xl 
      leading-normal text-coral-red group-hover:translate-y-4 transition duration-300'>{price}</p>
    </div>
  )
}

export default PopularProductCard