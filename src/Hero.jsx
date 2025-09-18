import React, { useRef } from "react";
import gsap  from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import adeelGpt from "./assets/img/adeel-gpt.webp"



export default function Hero() {

  const heroSec = useRef(null)
  
  useGSAP(()=>{
    const card = gsap.utils.toArray('.card')
    gsap.to(card ,{
      opacity:0,
      yPercent: 20,
      scrollTrigger:{
        trigger: heroSec.current,
        start: 'bottom bottom',
        end : 'bottom top',
        scrub: true,
      }
    });

  });

    return (
      <>
        <section ref={heroSec} id="hero"  className="h-screen w-full bg-primary py-20 px-3 grid  place-content-center sticky top-0 -z-1">
          <div className="absolute lg:w-45 w-36 lg:right-5 lg:top-65 -right-10 top-90 rotate-90 text-gray">
            <h1 className="card lg:text-xl font-medium">
              Help growing brands and startups
            </h1>
          </div>
          <div className="card z-1 mix-blend-difference text-primary justify-self-center">
            <h6 className="  text-gray-700 mix-blend-normal">
              (web developer)
            </h6>
            <h1 className="font-nicomoji lg:text-8xl text-3xl">ADEEL NASIR KHAN</h1>
          </div>
          <div className="card -mt-4 lg:-mt-13 bg-primary justify-self-center">
            <img
              className="lg:w-160 lg:h-90 w-70 h-80 object-cover opacity-90"
              src={adeelGpt}
              alt="adeel picture"
            />
          </div>
          <div className="flex justify-between lg:px-5 -mt-8">
            <div className="lg:w-85 w-45">
              <p className="card font-montserrat text-sm lg:text-medium pb-2 mix-blend-difference text-primary">
                I AM A FULL-STACK DEVELOPER BUILDING SCALABLE & PIXEL PERFECT
                INTERACTIVE WEB APPS
              </p>
              <button className="card relative group overflow-hidden bg-secondary transition duration-300 ease-out cursor-pointer hover:scale-105 hover:bg-primary hover:border-2 hover:border-secondary hover:text-black text-primary lg:py-3 lg:px-6 py-1 px-3 text-lg lg:font-medium rounded-full">
                <span className="block transition-transform duration-200 ease-in group-hover:-translate-y-9">
                  Contant
                </span>
                <span className="block absolute transition-transform duration-200 translate-y-2 group-hover:-translate-y-full">
                  Contact
                </span>
              </button>
            </div>
            <div className="card font-montserrat mix-blend-difference text-primary">
              <p className="lg:text-xl">Open for work</p>
              <h1 className="lg:text-7xl text-4xl font-medium">SEP'25</h1>
            </div> 
          </div>
        </section>
      </>
    );
}