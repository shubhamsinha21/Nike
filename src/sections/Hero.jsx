import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"

const Hero = () => {
  return (

    <section id='home'
      className='min-h-screen gap-10 flex 
       flex-col xl:flex-row mx-auto my-0 w-[1520px]'
    >

      {/* section-left */}
      <div className='flex flex-col justify-center 
      items-start relative w-full max-xl:padding-x pt-28 xl:w-2/5 '>
        <p className='text-xl font-montserrat text-white bg-coral-red border-[1px] p-1 rounded-md border-red-400 animate-bounce drop-shadow-xl'>Our Summer Collection</p>
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
        <img src={bigShoe1} alt='bigShoe1'
          className='w-[610px] h-[500px] relative object-contain'
        />

        <div>
          {shoes.map((shoe) =>
            <div key={shoe}>
              <ShoeCard imgURL={shoe}
                changeBigShoeImage={
                  () => { }
                }
                bigShoeImg=""
              />
            </div>
          )}
        </div>

      </div>

    </section>

  )
}

export default Hero