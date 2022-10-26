import Image from "next/image"

import inside from './importsImage'

export function AboutUs() {
  const url = process.env.PUBLIC_URL

  return (
    <section>

      <div className="py-10 md:py-20 flex items-center">
        <div className='flex-1'>
          <h2>About Us</h2>
          <span>At Besnik Consultancy, we take pride in our values
            <br />
            - service, integrity, and excellence.
          </span>
        </div>

        <button
          className='py-3 px-7 hover:shadow-md shadow-xl text-button transition-all 
        hover:translate-y-1'
        >Learn more</button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 ">
        <div
          className="grid grid-cols-2 grid-rows-2 gap-3 flex-1"
        >
          <div
            className="about"
          >
            <h3>1.</h3>
            <h3>who we are</h3>
            <p>You get a 2-week free trial to kick the Smarty tries. We want you to</p>
          </div>

          <div
            className="about"
          >
            <h3>2.</h3>
            <h3>what do we do</h3>
            <p>We give you a free courses that guides you through the process</p>
          </div>

          <div
            className="about"
          >
            <h3>3.</h3>
            <h3>how do we help</h3>
            <p>Use our multimedia lecturers, videos, and coaching sessions</p>
          </div>

          <div
            className="about"
          >
            <h3>4.</h3>
            <h3>create success story</h3>
            <p>With access to online learning resources anyone can transform.</p>
          </div>

        </div>

        <div className="flex flex-1 gap-4" >

          <div className="frame">

            <div className='a'>
              <Image
                src={inside.img1}
                alt=""
              />
            </div>
            <div className='b'>
              <Image
                src={inside.img2}
                alt=""
              />
            </div>

          </div>

          <div className="frame">

            <div className='b'>
              <Image
                src={inside.img3}
                alt=""
              />
            </div>
            <div className='a'>
              <Image
                src={inside.img4}
                alt=""
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
