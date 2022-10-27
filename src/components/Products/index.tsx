import { Product } from "./Product";
import lamp from '../../../public/productsImg/lampshde.jpg'
import couch from '../../../public/productsImg/couch.jpg'
import chair from '../../../public/productsImg/chair.jpg'
import dinnerTable from '../../../public/productsImg/dinnerTable.jpg'
import classicLamp from '../../../public/productsImg/classicLamp.jpg'
import vintageChair from '../../../public/productsImg/vintageChair.jpg'

export function Products() {

  const products = [
    { name: 'Abajur', preco: 30, img: lamp },
    { name: 'Sofá', preco: 60, img: couch },
    { name: 'Cadeira', preco: 18, img: chair },
    { name: 'Mesa de Jantar', preco: 45, img: dinnerTable },
    { name: 'Abajur Clássico', preco: 30, img: classicLamp },
    { name: 'Cadeira Vintage', preco: 30, img: vintageChair },
  ]

  return (
    <section
      className="px-3"
    >

      <div className="px-10 pt-10 md:pt-20">
        <h2>Products</h2>
      </div>

      <nav
        className="w-full md:w-3/4 flex flex-col md:flex-row justify-center mx-auto"
      >
        <div className="my-5 md:my-10 flex items-center justify-center space-x-5 md:space-x-8">
          <a href="" className="category">tudo</a>
          <a href="" className="category">cama</a>
          <a href="" className="category">sofá</a>
          <a href="" className="category">cadeira</a>
          <a href="" className="category">Light</a>
        </div>

        <button
        className="category relative text-end
        after:content-[''] 
        after:absolute 
        after:bg-slate-200
        after:w-20
        after:h-7 after:bottom-0 after:right-3 after:top-1/2 after:-translate-y-1/2
        md:ml-auto
        md:after:w-28 
        md:after:-left-14 md:after:-translate-y-1/2 
        after:-z-10"
        >
          Saiba mais
        </button>
      </nav>

      <div
        className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-2 md:gap-8 max-w-fit mx-auto mt-10 px-5 md:p-0"
      >
        {
          products.map((product) => (
            <Product key={product.name} name={product.name} preco={product.preco} img={product.img} />
          )
          )
        }
      </div>
    </section>
  )
}
