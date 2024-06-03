const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe)
            changeBigShoeImage(imgURL.bigShoe)
    }

    return (
        <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer `} onClick={handleClick}>
            {/* max-sm:flex-1 */}
            <div className='bg-card bg-center bg-cover flex justify-center 
            items-center sm:w-40 sm:h-40 rounded-xl   '>
                <img src={imgURL.thumbnail} alt='shoe collection'
                    className='w-[127px] h-[103px] object-contain'
                />
            </div>
        </div>
    )
}

export default ShoeCard
