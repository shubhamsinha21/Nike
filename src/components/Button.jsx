const Button = ({ label, iconUrl }) => {
  return (
    <button className='border flex justify-center 
    items-center gap-2 px-7 py-4 
    font-montserrat font-semibold text-md bg-coral-red
     border-coral-red text-white rounded-full w-fit
     hover:bg-orange-600 shadow-xl group
     '>
      {label}

      {iconUrl &&
        <img src={iconUrl} alt='arrow right icon'
          className='size-5 ml-2 rounded-full group-hover:translate-x-2 
          transition duration-300' />}
    </button>

  )
}

export default Button