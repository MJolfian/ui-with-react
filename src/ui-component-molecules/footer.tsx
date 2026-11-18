import FooterAccordion from "./atoms/accordion"

const Footer = () => {
    return (
        <footer className="relative">
        <section className="mx-[3.92vw] lg:mx-[min(6.25vw,64px)] xl:mx-[min(8.88vw,128px)] font-circular-std flex flex-col xl:flex-row justify-between gap-x-16 mt-8 md:mt-32">
            <img src="object.svg" alt="object" className="absolute bottom-[328px] xl:bottom-[185px] right-0"/>
            <section className="xl:w-[36.29%] max-xl:mb-16">
                <div className="flex items-center gap-x-2">
                    <img src="Vector.svg" alt="logo" />
                    <h3 className='font-circular-std font-black text-2xl leading-10 tracking-[0%] text-[#191825]'>Travlog</h3>
                </div>
                <p className="font-[450] leading-[1.6] text-[#191825BF] mt-8 mb-16">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                <div className="flex gap-x-8">
                    <img src="f.svg" alt="facebook" />
                    <img src="x.svg" alt="twitter" />
                    <img src="insta.svg" alt="insta" />
                </div>
            </section>
            <section className="hidden md:grid grid-cols-3 gap-8 leading-[1.6] text-[#191825BF] font-inter text-lg font-normal">
                <h3 className="font-circular-std leading-[1.2] font-bold text-[23px] text-[#191825]">Company</h3>
                <h3 className="font-circular-std leading-[1.2] font-bold text-[23px] text-[#191825]">Contact</h3>
                <h3 className="font-circular-std leading-[1.2] font-bold text-[23px] text-[#191825]">Meet Us</h3>
                <span>About</span>
                <span>Why Travlog?</span>
                <span>+00 92 1234 56789</span>
                <span>Career</span>
                <span>Partner with us</span>
                <span>info@travlog.com</span>
                <span>Mobile</span>
                <span>FAQ’s</span>
                <span>205. R Street, New York</span>
                <span className="col-start-2">Blog</span>
                <span>BD23200</span>
            </section>
            <FooterAccordion/>
            </section>
        </footer>
    )
}
export default Footer