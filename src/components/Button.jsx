const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth
}) => {
  return (
    <button
      className={`border flex justify-center 
    items-center gap-2 px-7 py-4 leading-none
    font-montserrat font-semibold text-md text-white 
    rounded-full ${fullWidth && 'w-full'} shadow-xl group hover:bg-orange-600 
    
    ${backgroundColor ? 
      `${backgroundColor} ${textColor} ${borderColor}`: 
   ' bg-coral-red border-coral-red text-white '}
    `}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="size-5 ml-2 rounded-full group-hover:translate-x-2 
          transition duration-300"
        />
      )}
    </button>
  );
};

export default Button;
