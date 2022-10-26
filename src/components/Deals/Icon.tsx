import Image from 'next/image'
import moneyIcon from '../../../public/money.svg'

export function MoneyIcon() {
  return (
   <Image
   src={moneyIcon}
   alt="money icon"
   className="w-10 mb-4"
   />
 )
}
