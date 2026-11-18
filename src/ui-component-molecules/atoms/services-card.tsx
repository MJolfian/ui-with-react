export default function ServicesCard(props: servicesCard){
    return  <article className="max-sm:w-[min(398px,100%)] border border-[#1918251A] rounded-4xl flex flex-col justify-start items-center gap-y-16 p-8 md:p-16 bg-white">
                <img src={props.img} alt={props.img} className=""/>
                <div className="flex flex-col items-center gap-y-8 min-w-46 xl:min-w-55.5 max-w-[15.41vw] text-center">
                    <h5 className="font-bold text-[28px] leading-[1.2] tracking-[0%] text-[#191825]">{props.title}</h5>
                    <p className="font-inter font-normal text-lg text-[#19182580] leading-[1.6] tracking-[0%]">{props.description}</p>
                </div>
            </article>
}