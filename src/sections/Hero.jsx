import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import Button from "../components/Button"
import { statistics, shoes } from "../constants"
import { useState } from "react"

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (

    <section id='home'
      className='min-h-screen gap-10 flex 
       flex-col xl:flex-row max-container'
    >

      {/* section-left */}
      <div className='flex flex-col justify-center 
      items-start relative w-full max-xl:padding-x pt-28 xl:w-2/5 '>

        <p className='text-xl font-montserrat text-white bg-coral-red border-[1px] 
        p-1 rounded-md border-red-400 animate-bounce drop-shadow-lg'>Our Summer Collection</p>

        <h1 className='mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className="xl:whitespace-nowrap relative z-10 pr-10 xl:bg-white">The New Arrival</span>
          <br />
          <span className='text-coral-red mt-3 inline-block'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
        <Button label="Shop now" iconUrl={arrowRight} />

        <div className='flex gap-16 mt-20 w-full flex-wrap justify-start items-start border'>
          {statistics.map((stats, index) =>
            <div key={stats.label}>
              <p className='text-4xl font-palanquin font-bold'>{stats.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stats.label}</p>
            </div>
          )}
        </div>

      </div>

      {/* section-right */}
      <div className='relative flex flex-1 justify-center 
      items-center bg-cover bg-center bg-primary xl:min-h-screen max-xl:py-40'>
        <img src={bigShoeImg} alt='bigShoe1'
          className='w-[510px] h-[360px] relative object-contain'
        />

        <div className='flex justify-center items-center gap-4 sm:gap-6 absolute -bottom-0'>
          {shoes.map((shoe) =>
            <div key={shoe}>
              <ShoeCard imgURL={shoe}
                changeBigShoeImage={
                  (shoe) => setBigShoeImg(shoe)
                }
                bigShoeImg={bigShoeImg}
              />
            </div>
          )}
        </div>

      </div>

    </section>

  )
}

export default Hero