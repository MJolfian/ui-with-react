const Statistics = () => {
    return (
        <section className="relative font-circular mx-[3.92vw] lg:mx-[min(6.25vw,64px)] xl:ml-0 xl:mr-[min(8.88vw,128px)] flex flex-col xl:flex-row mt-32">
            <img src="frame50.svg" alt="frame" className="absolute hidden xl:block -right-[152px] top-[196px]"/>
            <img src="sitonbag.svg" alt="a woman sitting on a bag" className="xl:w-[66%]"/>
            
            <section className="tracking-[0%] leading-[1.2] xl:w-[34%] flex flex-col gap-y-16">
                <section className="text-center xl:text-left max-xl:mt-16 xl:min-w-110.25">
                    <h5 className="font-bold text-[23px] xl:text-base tracking-[20%] text-secondary mb-4">TRAVEL POINT</h5>
                    <h3 className="font-bold text-[32px] lg:text-[40px] xl:text-[44px] text-[#191825]">We helping you find your dream location</h3>
                    <p className="font-inter font-normal text-lg leading-[1.6] text-[#191825BF] mt-8">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-2 text-center gap-8">
                    <div className="border border-[#1918251A] rounded-4xl p-8 space-y-4 min-w-51">
                        <h4 className="font-bold text-[35px] text-orange">500+</h4>
                        <p className="font-inter font-normal text-lg leading-[1.6] text-[#191825]">Holiday Package</p>
                    </div>
                    <div className="border border-[#1918251A] rounded-4xl p-8 space-y-4 min-w-51">
                        <h4 className="font-bold text-[35px] text-orange">100</h4>
                        <p className="font-inter font-normal text-lg leading-[1.6] text-[#191825]">Luxury Hotel</p>
                    </div>
                    <div className="border border-[#1918251A] rounded-4xl p-8 space-y-4 min-w-51">
                        <h4 className="font-bold text-[35px] text-orange">7</h4>
                        <p className="font-inter font-normal text-lg leading-[1.6] text-[#191825]">Premium Airlines</p>
                    </div>
                    <div className="border border-[#1918251A] rounded-4xl p-8 space-y-4 min-w-51">
                        <h4 className="font-bold text-[35px] text-orange">2k+</h4>
                        <p className="font-inter font-normal text-lg leading-[1.6] text-[#191825]">Happy Customer</p>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default Statistics;