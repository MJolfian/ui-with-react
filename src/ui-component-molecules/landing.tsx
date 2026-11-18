const Landing = () => {
    return(
        <section className="mx-[3.92vw] lg:mx-[min(6.25vw,64px)] xl:mx-[min(8.88vw,128px)] font-circular-std flex flex-col xl:flex-row justify-center items-center">
            <section className="leading-[1.2] tracking-[0%] xl:max-w-[28.61vw] flex flex-col items-center xl:items-start gap-y-10 order-1 xl:order-0 text-center xl:text-left">
                <button className="flex gap-x-3 items-center bg-white py-4 px-8 text-sm font-bold text-secondary rounded-[100px] w-fit shadow-[0px_0px_0px_0px_#00000012,0px_34px_75px_0px_#00000012,0px_137px_137px_0px_#0000000F,0px_308px_185px_0px_#0000000A,0px_548px_219px_0px_#00000003,0px_856px_240px_0px_#00000000] cursor-pointer">
                    Explore the world!
                    <img src="bag.svg" alt="bag" />
                </button>
                <h1 className="font-bold text-[40px] lg:text-[56px] xl:text-[69px] xl:max-w-113">Travel <span className="text-secondary">top destination</span><br className="hidden min-[431px]:max-xl:block"/> of the world</h1>
                <p className="font-inter text-[#19182580] leading-[160%] font-normal text-base xl:text-lg">We always make our customer happy by<br className="max-xl:hidden"/> providing<br/> as many choices as possible</p>
                <div className="flex flex-col lg:flex-row gap-x-3 max-lg:self-stretch gap-y-6">
                <button className="cursor-pointer text-light text-sm font-bold py-4 px-8 bg-[#5D50C6] shadow-[0px_0px_0px_0px_#0000001A,0px_5px_11px_0px_#0000001A,0px_20px_20px_0px_#00000017,0px_45px_27px_0px_#0000000D,0px_81px_32px_0px_#00000003,0px_126px_35px_0px_#00000000] rounded-[100px]">Get Started</button>
                <button className="cursor-pointer text-sm font-bold py-4 px-8 text-dark bg-white border border-light rounded-[100px] flex items-center justify-center gap-x-2">
                    <img src="play.svg" alt="play" />
                    Watch Demo
                </button>
                </div>
            </section>
            
                <img src="landing.svg" alt="landing" className="w-full xl:w-[65.20%] max-h-178.25 mt-17 xl:mt-24"/>
            
        </section>
    )
}
export default Landing;