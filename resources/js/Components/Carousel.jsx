import { useState, useEffect, useRef } from "react";
import Icon from "@/Components/Icon";

export default function Carousel({data, ...props}) {
     const [currentIndex, setCurrentIndex] = useState(0);
     let count = 0;
     let slideInterval;
     const slideRef = useRef();

     useEffect(() => {
          slideRef.current.addEventListener('animationend', removeAnim);
          slideRef.current.addEventListener('mouseenter', pauseSlider);
          slideRef.current.addEventListener('mouseleave', startSlider);
          startSlider();

          return () => {
               pauseSlider();
          }
     }, []);

     function startSlider() {
          slideInterval = setInterval(() => {
               handleNextClick();
          }, 3000);
     }

     function pauseSlider() {
          clearInterval(slideInterval);
     }

     function removeAnim() {
          slideRef.current.classList.remove('fade-anim');
     }

     function handleNextClick() {
          count = (count + 1) % data.length;
          setCurrentIndex(count);
          slideRef.current.classList.add('fade-anim');
     }

     function handlePreviousClick() {
          count = (currentIndex + data.length - 1) % data.length;
          setCurrentIndex(count);
          slideRef.current.classList.add('fade-anim');
     }

     return (<div ref={slideRef} className="relative w-full select-none">
          <div className="md:flex md:space-x-4">
               <div className="flex items-center justify-center w-full md:w-1/2">
                    <div className="w-full">
                         <h3 className="w-full font-semibold text-center text-slate-700">{data[currentIndex].name}</h3>
                         <p className="w-full text-center text-slate-500">{data[currentIndex].description}</p>
                    </div>
               </div>
               <img src={data[currentIndex].url} alt={data[currentIndex].name} className="w-full mt-2 md:mt-0 md:w-1/2" />
          </div>
          <div className="absolute flex items-center justify-between w-full px-3 transform -translate-y-1/2 top-1/2">
               <button onClick={handlePreviousClick} className="p-2 rounded-full bg-slate-700 bg-opacity-10">
                    <Icon name={'chevron-left'} className={'fill-none stroke-2 stroke-slate-700 w-5 h-5 opacity-50'} />
               </button>
               <button onClick={handleNextClick} className="p-2 rounded-full bg-slate-700 bg-opacity-10">
                    <Icon name={'chevron-right'} className={'fill-none stroke-2 stroke-slate-700 w-5 h-5 opacity-50'} />
               </button>
          </div>
     </div>);
}