import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

export default function DestinationCard(props: topDestinationCard){
    return (
        <article className='flex-1'>
            <img src={props.img} alt={props.img} className='w-full'/>
            <div className='rounded-b-4xl shadow-[0px_0px_0px_0px_#0000000D,0px_32px_71px_0px_#0000000D,0px_128px_128px_0px_#0000000A,0px_288px_173px_0px_#00000008,0px_513px_205px_0px_#00000003,0px_801px_224px_0px_#00000000] p-8 leading-[1.2] tracking-[0%]'>
                <div  className="flex flex-col xl:flex-row gap-y-2">
                    <span className="font-bold text-[23px] text-[#191825] order-1 xl:order-0">{props.title}</span>
                    <span className="font-bold text-[23px] text-secondary flex items-baseline"><FontAwesomeIcon icon={faDollarSign} className='-ml-1.25 xl:-mr-1 text-[20px]'/>{props.price}</span>
                </div>
                <p className='font-inter font-normal text-lg leading-[1.6] text-[#191825BF] mt-4 mb-8'>{props.description}</p>
                <h6 className='flex gap-x-2.5 font-bold text-[23px] text-orange'>{props.rate}<img src="star.svg" alt="rate star"/></h6>
            </div>
        </article>
    )
}