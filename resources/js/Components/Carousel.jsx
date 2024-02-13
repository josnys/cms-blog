import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Icon from "@/Components/Icon";

export default function Carousel({ data, ...props }) {
     const [activeIndex, setActiveIndex] = useState(0);
     const imgs = data;

     const swiperRef = useRef(null);

     const handleSlideChange = (swiper) => {
          setActiveIndex(swiper.realIndex);
     };

     const handleCustomPrev = () => {
          if (swiperRef.current) {
               const currentIndex = swiperRef.current.realIndex;
               const newIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : 0;
               swiperRef.current.slideTo(newIndex);
          }
     };

     const handleCustomNext = () => {
          if (swiperRef.current) {
               const currentIndex = swiperRef.current.realIndex;
               const newIndex =
                    currentIndex + 1 < imgs.length ? currentIndex + 1 : imgs.length - 1;
               swiperRef.current.slideTo(newIndex);
          }
     };
     useEffect(() => {
          swiperRef.current.swiper.slideTo(2); // Move to the first slide initially
     }, []);

     return (
          <div className="relative w-full px-4">
               <Swiper
                    ref={swiperRef}
                    slidesPerView={2}
                    centeredSlides={true}
                    spaceBetween={30}
                    autoplay={{
                         delay: 5000,
                         disableOnInteraction: false,
                    }}
                    loop={true}
                    slidesPerGroupSkip={1}
                    navigation={{
                         prevEl: ".custom-prev-button",
                         nextEl: ".custom-next-button",
                    }}
                    modules={[Autoplay, Navigation]}
                    className="px-w-2xl md:w-4xl mySwiper"
                    onSlideChange={handleSlideChange}
                    breakpoints={{
                         260: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                         },
                         640: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                         },
                         768: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                         },
                         1024: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                         },
                    }}
               >
                    {imgs.map((img, index) => (
                         <SwiperSlide key={index}>
                              <div className={`relative ${index === activeIndex ? "" : "opacity-35"}`}>
                                   <h3 className="w-full font-semibold text-center tex-sm md:text-lg text-slate-700">{img.name}</h3>
                                   <p className="w-full text-xs text-center md:text-md text-slate-500">{img.description}</p>
                                   <img style={{ opacity: index === activeIndex ? "1" : "0.5", }} className={`transition-all w-full mx-auto md:mx-0 mt-4 rounded-lg md:rounded-xl`} src={img.url} alt={img.name} />
                              </div>
                         </SwiperSlide>
                    ))}
               </Swiper>
               <div className="absolute z-50 flex items-center justify-between w-full px-3 transform -translate-y-1/2 top-1/2">
                    <div className="custom-prev-button hidden lg:flex items-center justify-center absolute -left-0 h-10 rounded-full cursor-pointer w-10 bg-[#F0F2F4] top-1/2 transform -translate-y-1/2 " onClick={handleCustomPrev}>
                         <Icon name={'chevron-left'} className={'fill-none stroke-2 stroke-slate-700 w-5 h-5 opacity-50'} />
                    </div>
                    <div className="custom-next-button hidden lg:flex items-center justify-center absolute -right-0 h-10 rounded-full cursor-pointer w-10 bg-[#F0F2F4] top-1/2 transform -translate-y-1/2" onClick={handleCustomNext}>
                         <Icon name={'chevron-right'} className={'fill-none stroke-2 stroke-slate-700 w-5 h-5 opacity-50'} />
                    </div>
               </div>
          </div>
     );
}