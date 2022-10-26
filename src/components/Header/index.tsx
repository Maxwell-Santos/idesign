import Image from 'next/image'
import search from '../../../public/magnifying-glass.svg'

export function Header() {

  return (
    <header className="w-full flex items-center justify-between px-7 py-7">
      <div className="hidden">
        {/* logo */}
        minha logo
      </div>

      <nav
        className="flex items-center justify-evenly flex-[.7] font-medium"
      >
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Contact</a>
      </nav>

      <div className="">

        <button className='w-8'>
          <Image src={search} alt="icon de pesquisa" />
        </button>

      </div>

      <div>
        {/* toggle */}
      </div>
    </header>
  )
}
