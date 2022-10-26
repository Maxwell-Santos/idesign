import { MoneyIcon } from "./Icon";

export function Deals() {

  return (
    <section
      className="py-10 md:py-20"
    >
      <div
        className="w-full h-full 
        flex items-start justify-center gap-10
        flex-col
        md:flex-row"
      >
        <div className="flex-1">
          <h2 className="mb-4">Hot <br />deals for you</h2>
          
          <p>Online shooping for retail sales direct to consumers</p>
        </div>

        <div className="flex flex-col items-center justfy-center w-full flex-1 xs:flex-row">
          <div
            className="deal"
          >
            <MoneyIcon />
            <span>1.5% cashback</span>
            <p>Online shooping for retail sales direct to consumers</p>
          </div>
          <div
            className="deal"
          >
            <MoneyIcon />
            <span>30-day terms</span>
            <p>Online shooping for retail sales direct to consumers</p>
          </div>
          <div
            className="deal"
          >
            <MoneyIcon />
            <span>Save Money</span>
            <p>Online shooping for retail sales direct to consumers</p>
          </div>
        </div>

      </div>
    </section>
  )
}
