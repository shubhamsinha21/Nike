import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-center 
   items-center gap-10 max-lg:flex-col'
    >
      <h3
        className='font-bold font-palanquin 
    text-4xl max-lg:max-w-lg'
      >
        Sign Up for
        <span className='text-coral-red drop-shadow-md'> {''}
        Updates</span> & Newsletter
      </h3>

      <div className='lg:max-w-lg max-sm:flex-col w-full flex items-center gap-5 sm:border sm:border-slate-gray p-2 rounded-full'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />

        <div className=''>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
