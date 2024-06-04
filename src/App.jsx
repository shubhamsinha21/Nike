import {Hero, Services, Footer, Subscribe,
  PopularProducts,SpecialOffer,SuperQuality,CustomerReviews
} from './sections'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className='relative'>
     <Navbar/>
      <section className='xl:padding-l wide:padding-r padding-b'>
       <Hero/>
      </section>
      <section className='padding'>
       <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding padding-x py-10'>
     <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding'>
       <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
       <Subscribe/>
      </section>
      <section className='padding-x padding-t pb-8 bg-black text-teal-300'>
       <Footer/>
      </section>
    </main>
  )
}

export default App