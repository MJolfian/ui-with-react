import ServicesCard from "./atoms/services-card";

export default function Services(){
    return(
        <section className="mx-[3.92vw] lg:mx-[min(6.25vw,64px)] xl:ml-[min(8.88vw,128px)] xl:mr-0 font-circular-std flex max-xl:flex-col items-center gap-x-10 xl:overflow-x-auto mt-30">
            <section className="xl:shrink-0 max-xl:text-center">
                <h6 className="font-bold text-[23px] leading-[1.2] tracking-[20%] text-secondary">SERVICES</h6>
                <p className="font-bold text-[32px] xl:text-[44px] text-[#191825] leading-[1.2] tracking-[0%]">Our top value<br className="max-xl:hidden"/> categories for you</p>
            </section>
            <section className="flex max-lg:flex-wrap max-lg:justify-center gap-x-[1.45vw] gap-y-4 max-xl:mt-5">
               <ServicesCard img='destination1.svg' title='Best Tour Guide' description='What looked like a small patch of purple grass, above five feet.'/>
               <ServicesCard img='booking1.svg' title='Easy Booking' description='Square, was moving across the sand in their direction.'/>
               <ServicesCard img='cloudy.png' title='Weather Forecast' description='What looked like a small patch of purple grass, above five feet.'/>
            </section>
        </section>
    )
}