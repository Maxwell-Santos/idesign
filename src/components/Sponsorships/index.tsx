import Image from 'next/image'
import {companies} from './companies'

export function Sponsorships() {

  return (
    <section
      className="w-full max-w-none bg-sponsorship flex flex-col items-center justify-center py-5
      my-10 md:my-20"
    >
      <span
        className="uppercase font-bold text-[#041947] opacity-90"
      >trusted by over 1k+ companies</span>
      <div
        className="flex justify-center flex-col md:flex-row gap-5 md:gap-10 my-5"
      >
        {
          companies.map((companie: any) => (
            <Image
            key={companie} 
            src={companie} 
            alt={`imagem de empresa patrocinadora`} 
            className="h-[20px]"/>
          ))
        }
      </div>
    </section>
  )
}
