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
    { name: 'Cadeira', preco: 18, img: chair},
    { name: 'Mesa de Jantar', preco: 45, img: dinnerTable },
    { name: 'Abajur Clássico', preco: 30, img: classicLamp},
    { name: 'Cadeira Vintage', preco: 30, img: vintageChair },
  ]

  return (
    <section
    className="px-0"
    >

      <div className="pt-10 md:pt-20">
        <h2>Products</h2>
      </div>

      <nav
      className="w-full flex justify-center py-10 space-x-5 md:space-x-8"
      >
      <a href="" className="category">tudo</a>
      <a href="" className="category">cama</a>
      <a href="" className="category">sofá</a>
      <a href="" className="category">cadeira</a>
      <a href="" className="category">Light</a>
    </nav>

      <div
        className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-2 md:gap-8 max-w-fit mx-auto mt-10 px-5 md:p-0"
      >
        {
          products.map((product) => (
            <Product key={product.name} name={product.name} preco={product.preco} img={product.img}/>
          )
          )
        }
      </div>
    </section>
  )
}
