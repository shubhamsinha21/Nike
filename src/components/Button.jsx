const Button = ({label, iconUrl}) => {
  return (
    <button className='border flex justify-center 
    items-center gap-2 px-7 py-4 
    font-montserrat bg-coral-red border-coral-red text-white rounded-full'>
       {label}
       <img src={iconUrl} alt='arrow right icon' className='size-5 ml-2 rounded-full' />
    </button>
  )
}

export default Button