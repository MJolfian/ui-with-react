export default function Offer(){
    return (
        <section className="flex flex-col xl:flex-row items-center xl:justify-between gap-12.5 mx-[3.92vw] lg:mx-[min(6.25vw,64px)] xl:mr-0 xl:ml-[min(8.88vw,128px)] mt-32">
            <img src="offer.png" alt="offer" className="xl:order-1"/>
            <section className="leading-[1.2] font-circular-std xl:max-w-137.25 flex flex-col gap-y-8 md:gap-y-16">
                <section className="text-center">
                    <h5 className="font-bold text-[23px] xl:text-base tracking-[20%] text-secondary mb-4">KEY FEATURES</h5>
                    <h4 className="font-bold text-[32px] lg:text-[40px] xl:text-[44px] text-[#191825]">We offer best services</h4>
                    <p className="font-inter font-normal text-lg leading-[1.6] text-[#191825BF] my-8">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                </section>
                <section>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-y-8 gap-x-8 p-8">
                        <img src="location.svg" alt="location" />
                        <div className="space-y-2 text-left">
                            <h6 className="font-bold text-[23px] tracking-normal text-[#191825]">We offer best services</h6>
                            <p className="font-inter font-normal text-lg leading-[1.6] tracking-normal text-[#19182580]">Lorem Ipsum is not simply random text</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-y-8 gap-x-8 p-8 border border-[#1918251A] rounded-4xl">
                        <img src="calendar.svg" alt="calendar" />
                        <div className="space-y-2 text-left">
                            <h6 className="font-bold text-[23px] tracking-normal text-[#191825]">Schedule your trip</h6>
                            <p className="font-inter font-normal text-lg leading-[1.6] tracking-normal text-[#19182580]">It has roots in a piece of classical</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-y-8 gap-x-8 p-8">
                        <img src="cart.svg" alt="cart" />
                        <div className="space-y-2 text-left">
                            <h6 className="font-bold text-[23px] tracking-normal text-[#191825]">Get discounted coupons</h6>
                            <p className="font-inter font-normal text-lg leading-[1.6] tracking-normal text-[#19182580]">Lorem Ipsum is not simply random text</p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}