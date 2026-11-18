export const Clients = () => {
    return (
        <section className="relative self-stretch font-circular-std">
            <section className="z-1 relative mx-[3.92vw] lg:mx-[min(6.25vw,64px)] xl:mx-[min(8.88vw,128px)] mt-12.5 flex justify-center">
                <section className="flex flex-col items-center gap-y-16 md:gap-y-14 text-center md:w-[73.64%] xl:w-[50%]">
                    <div className="">
                        <h5 className="font-bold text-[23px] xl:text-base tracking-[20%] text-secondary mb-4">TESTIMONIALS</h5>
                        <h4 className="font-bold text-[32px] lg:text-[40px] xl:text-[44px] text-[#191825]">Trust our clients</h4>
                    </div>
                    <img src="client.png" alt="client" />
                    <div className="flex flex-col items-center gap-y-8">
                        <p className="font-bold text-[23px] leading-[1.2] tracking-normal"><span className="text-orange text-[28px]">Mark Smith</span> / Travel Enthusiast</p>
                        <img src="stars.svg" alt="stars" />
                    </div>
                    <p className="font-[450] leading-[1.6] text-[#191825BF]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    <img src="pagination.svg" alt="pagination" />
                    <div className="z-1">
                        <button className="absolute md:top-[50%] left-0 w-16 sm:w-25 aspect-square rounded-[100px] flex justify-center items-center border border-[#1918251A]"><img src="leftarrow.svg" alt="leftarrow"/></button>
                        <button className="absolute md:top-[50%] right-0 w-16 sm:w-25 aspect-square flex justify-center items-center rounded-[100px] bg-primary shadow-[0px_0px_0px_0px_#00000014,0px_7px_16px_0px_#00000012,0px_29px_29px_0px_#0000000F,0px_65px_39px_0px_#0000000A,0px_116px_46px_0px_#00000003,0px_181px_51px_0px_#00000000]"><img src="rightarrow.svg" alt="rightarrow"/></button>
                    </div>
                </section>
            </section>
            <img src="layer1.svg" alt="layer" className="absolute w-full -bottom-63 hidden xl:block"/>
            <img src="layer2.svg" alt="layer" className="absolute w-full -bottom-62 hidden lg:block xl:hidden"/>
        </section>
    )
}