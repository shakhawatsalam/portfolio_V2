// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// icons
import { BsArrowRight } from "react-icons/bs";

// import required modules
import { Pagination } from "swiper";

// import next image
import Image from "next/image";

// data
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[300px] sm:h-[480px]'>
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 curso'>
              {slide.images.map((image, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className='relative rounded-lg overflow-hidden flex justify-center items-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden group' key={index}>
                      {/* image  */}
                      <Image src={image.path} width={500} height={300} alt='' />
                      {/* ovarlay Gradient  */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 cursor-pointer'></div>
                      {/* title  */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 xl:group-hover:-translate-y-20 md:group-hover:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1  */}
                          <div className='delay-100 uppercase'>Live</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 uppercase'>
                            Project
                          </div>
                          {/* icon  */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
