export default function Header(){
    return (
        <header className='mx-[3.92vw] lg:mx-[min(6.25vw,64px)] xl:mx-[min(8.88vw,128px)] flex justify-between items-center pt-8'>
          <img src="topcircle.svg" alt="frame" className="hidden lg:max-xl:block absolute w-125 aspect-square -z-1 -top-5 -left-5 backdrop-blur-[500px]"/>
          {/* <div className="w-125 aspect-square bg-orange/50 rounded-full backdrop-blur-[500px]"></div> */}
          <img src="opt.svg" alt="option" className="xl:hidden cursor-pointer order-1 lg:order-0"/>
      <section className='flex items-center gap-x-2'>
        <img src="Vector.svg" alt="logo" />
        <h3 className='font-circular-std font-black text-2xl leading-10 tracking-[0%] text-[#191825]'>Travlog</h3>
      </section>
      <section className='font-bold text-sm leading-[120%] tracking-[0%] text-[#19182580] xl:flex gap-x-10 hidden'>
        <span className='text-dark'>Home</span>
        <span>Discover</span>
        <span>Special Deals</span>
        <span>Contact</span>
      </section>
      <section className='font-bold text-sm leading-[120%] tracking-[0%] text-dark space-x-5 hidden lg:block'>
        <span>Log In</span>
        <button className='text-white py-4 px-8 rounded-[100px] bg-primary'>Sign Up</button>
      </section>
    </header>
    )
}