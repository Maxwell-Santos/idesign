import Image from 'next/image'
import { useState } from 'react'
import search from '../../../public/magnifying-glass.svg'
import menu from '../../../public/menu.svg'
import close from '../../../public/close.svg'
import Head from 'next/head'

export function Header() {

  const [open, setOpen] = useState(false)

  function openHeader() {
    setOpen(prev => !prev)
    console.log(open)
  }
  return (
    <>
    <Head>
      <title>DsInside</title>
    </Head>
    
    <header className="w-full flex items-center justify-between md:justify-center px-7 py-7">
      <div className="hidden">
        minha logo
      </div>

      <nav
        className="hidden md:flex items-center justify-evenly flex-1 font-medium"
      >
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Contact</a>
      </nav>

      <button
        onClick={openHeader}
        className={`z-50 ${open && "fixed"} md:hidden`}
      >
        {open ? (
          <Image
            src={close}
            alt="menu"
            className='w-6'

          />
        ) : (
          <Image
            src={menu}
            alt="menu"
            className='w-6'
          />
        )
        }
      </button>
      <nav
        className={`${open ? "fixed inset-0 w-full h-full bg-white/80 z-40 backdrop-blur-sm flex items-center flex-col justify-center gap-5 text-lg" : "hidden"} `}

      >
        <span className="link">
          Home
        </span>

        <span className="link">
          About
        </span>

        <span className="link">
          Features
        </span>

        <span className="link">
          Contact
        </span>

      </nav>


      <div className="flex">
        <input type="text"
          placeholder='Qual design você procura ?'
          className='focus:outline-none hover:ring-gray-300 focus:ring-gray-300 hover:ring-1 focus:ring-1  appearance-none p-2 w-full text-nav mr-2'
        />
        <button className='w-8'>
          <Image src={search} alt="icon de pesquisa" />
        </button>

      </div>
    </header>
  </>
  )
}
