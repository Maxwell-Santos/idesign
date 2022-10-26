import thinking from "../../../public/productsImg/thinking.jpg"
import { Circle } from "./Circle"
import { feedbacks } from "./feedbacks"

import {Navigation} from "swiper"
import { Swiper, SwiperSlide} from "swiper/react"
import Image from "next/image"


export function Feedbacks() {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center 
   bg-feedbacksBg rounded-2xl my-20  xs:p-20 p-10"
    >
      <Circle />

      <div className="text-center min-w-[50%] max-w-[40rem] p-6 mb-12">
        <h2 className="text-6xl mt-[8rem] sm:mt-0 mb-7">What our happy client say</h2>
        <span
          className="font-medium"
        >File storage made easy - including powerfull features you won"t find anywhere else. Wheter you-re.</span>
      </div>

      <div
        className="flex items-center w-full md:w-3/4"
      >
        <div className="flex-1 hidden md:block">
          <Image
            src={thinking}
            alt="pessoa pensando"
            className="object-cover aspect-[3/4] max-w-[20rem] hidden md:block"
          />
        </div>

        <Swiper
        modules={[Navigation]}
        navigation
        loop
        centeredSlides
        slidesPerView={1}
        className="flex-1"
        >
          {
            feedbacks.map(feedback => {
              return (
                <SwiperSlide
                key={feedback.name}
                >
                  <div>
                    <p
                    className="text-xl md:text-2xl mb-7 text-nav opacity-70"
                    >
                      "{feedback.feedback}"
                    </p>

                    <span
                    className="text-2xl block leading-4"
                    >
                      {feedback.name}
                    </span>
                    <span
                    className="text-lg text-secondary capitalize"
                    >{feedback.position}</span>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}
