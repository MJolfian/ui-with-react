export default function NewsLetter() {
    return (
        <section className="relative font-circular-std mx-[3.92vw] lg:mx-[min(6.25vw,64px)] xl:mx-[min(8.88vw,128px)] rounded-4xl bg-[#FACD4914] py-16 px-8 md:py-32 md:px-16 mt-32.5">
            <section className="text-center">
                <h5 className="font-bold text-[23px] xl:text-base tracking-[20%] text-secondary mb-4">SUBSCRIBE TO OUR NEWSLETTER</h5>
                <h4 className="font-bold text-[32px] lg:text-[40px] xl:text-[44px] text-[#191825]">Prepare yourself & let’s explore the beauty of the world</h4>
                <div className="mt-16 flex flex-col md:flex-row gap-x-16 gap-y-8">
                    <div className="relative flex-1">
                        <input type="text" placeholder="Your Email" className="w-full pl-20 py-8.5 font-bold text-[23px] leading-[1.2] text-[#191825BF] placeholder:text-[#191825BF] placeholder:leading-[1.2] placeholder:text-[23px] placeholder:font-bold bg-white rounded-4xl"/>
                        <img src="envelop.svg" alt="envelop" className="absolute left-8.5 top-[35.8px]"/>
                    </div>
                    <button className="bg-primary rounded-4xl py-8 px-16 font-bold text-[23px] text-white leading-[1.2]">Subscribe</button>
                </div>
            </section>
            <img src="dots.svg" alt="dots" className="hidden lg:block absolute -top-16.75 -left-8.75"/>
        </section>
    )
}