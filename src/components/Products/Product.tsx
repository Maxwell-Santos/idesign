import car from '../../../public/carrinho.svg'

import Image from "next/image";

interface ProductsProps{
  name: string,
  preco: number,
  img?: any,
}
export function Product({name, preco, img}:ProductsProps) {

  return (
   <div
   className="relative w-full max-w-[17rem] p-3 md:p-6
   flex flex-col aspect-[5/6]
   rounded-md hover:shadow-sm transition-all"
   >
    <div
    className="absolute top-0 left-0 right-0 h-2/3 w-full bg-gray-500/10 rounded-lg"
    ></div>

    <span
    className="aspect-square w-8 absolute -top-4 right-4 rounded-full p-2 shadow-md bg-[#D6C4B8]"
    >
      <Image
      src={car} 
      alt="carrinho" 
      />
      </span>

    <div className="flex flex-col h-1/3">
      <span
      className="font-medium text-lg leading-5"
      >{name}</span>
      <span
      className="font-medium text-base opacity-75"
      >${preco}.00</span>
      
    </div>
    <div
    className='w-full h-full overflow-hidden z-10 mt-6 md:mt-0'
    >
      <Image
      src={img} 
      alt={`image do produto: ${name}`} 
      className="object-cover"
      />
      
    </div>
   </div>
 )
}
