import Room from '../../../public/assets/insideRoom.jpg'

import Image from "next/image"

export function Intro() {
  const url = process.env.PUBLIC_URL

  return (
   <section 
   className='relative px-0'
   >
    <div
    className='w-full h-fit flex items-center justify-center flex-col py-7
    px-10 sm:px-7
    bg-white/60 backdrop-blur-lg
    md:aspect-square 
    md:max-w-[27rem]
    md:absolute md:top-1/2 md:-translate-y-1/2 shadow-sm
    md:p-7
    '
    >
      <h1
      className='md:leading-[3.5rem] tracking-tight text-center md:text-start'
      >
        We Help You Make Modern Interior
      </h1>

      <p 
      className='font-medium mt-3'>
        We will help you to make an elegant and luxurious interior designed by professional interior designer
        </p>
    </div>
    <div
    className='max-w-6xl ml-auto'
    >
      <Image
      src={Room}
      alt="imagem do sei la oq"
      className='w-full'
      />
    </div>
   </section>
 )
}
