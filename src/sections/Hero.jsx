import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { statistics } from "../constants"

const Hero = () => {
  return (
    
    <section id='home' 
    className='
    w-full min-h-screen gap-10 flex- flex-col xl:flex-row max-container'
    >
      <div className='flex flex-col justify-center 
      items-start relative w-full max-xl:padding-x pt-28 xl:w-2/5 '>
<p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
<h1 className='mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
  <span className="xl:bg-red-500 xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
  <br />
  <span className='text-coral-red mt-3 inline-block'>Nike</span> Shoes
  </h1>
  <p className='font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm bg-black'>Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>
  <Button label="Shop now" iconUrl={arrowRight} />

<div className='flex gap-16 mt-20 w-full flex-wrap justify-start items-start border'>
{statistics.map((stats  , index) => 
<div key={stats.label}>
  <p className='text-4xl font-palanquin font-bold'>{stats.value}</p>
  <p className='leading-7 font-montserrat text-slate-gray'>{stats.label}</p>
</div>
)}
</div>

      </div>
      
    </section>
    
  )
}

export default Hero