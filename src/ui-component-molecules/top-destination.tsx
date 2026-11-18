import DestinationCard from "./atoms/destination-card";

export default function TopDestination(){
    return (
        <section className="font-circular-std mx-[3.92vw] lg:mx-[min(6.25vw,64px)] xl:mx-[min(8.88vw,128px)]">
            <section className="flex justify-between items-center max-xl:flex-col xl:mb-16 xl:mt-32.5">
                <div className="space-y-4 max-xl:text-center max-xl:mb-16 max-xl:mt-32.5">
                    <h6 className="font-bold text-[23px] xl:text-base leading-[1.2] tracking-[20%] text-secondary">TOP DESTINATION</h6>
                    <h3 className="font-bold text-[32px] lg:text-[40px] xl:text-[44px] text-[#191825] leading-[1.2] tracking-[0%]">Explore top destination</h3>
                </div>
                <div className="flex gap-x-8 max-xl:mb-16 max-sm:justify-between max-sm:w-full">
                    <button className="w-16 sm:w-25 aspect-square rounded-[100px] flex justify-center items-center border border-[#191825]"><img src="leftarrow.svg" alt="leftarrow"/></button>
                    <button className="w-16 sm:w-25 aspect-square flex justify-center items-center rounded-[100px] bg-primary"><img src="rightarrow.svg" alt="rightarrow"/></button>
                </div>
            </section>
            <section className="flex gap-x-8 max-md:flex-col gap-y-8">
                <DestinationCard img='sea.png' title='Paradise Beach, Bantayan Island' price={550.16} description='Rome, Italy' rate={4.8}/>
                <DestinationCard img='fish.png' title='Ocean with full of Colors' price={20.99} description='Maldives' rate={4.5}/>
                <DestinationCard img='mountains.png' title='Mountain View, Above the cloud' price={150.99} description='United Arab Emeries' rate={5.0}/>
            </section>
        </section>
    )
}