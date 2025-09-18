import React from "react"; 
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from "react";
import { projects } from "./assets/img/data";
import { Tooltip, TooltipContent, TooltipTrigger } from "./components/ui/tooltip";
gsap.registerPlugin(ScrollTrigger)

export default function Projects(){
    
    const scrollRef = useRef(null);
    useGSAP(() => {
      if(window.innerWidth >= 746){
        const panels = gsap.utils.toArray(".panel");
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1), // shift all panels left    
          ease: "none",
          scrollTrigger: {
            trigger: scrollRef.current, // parent section
            start:"top top",
            pin: true, // keep container fixed while scrolling
            scrub: 1, // smooth scrubbing
            snap: 1 / (panels.length - 1), // snap to each panel
            end: () => "+=" + window.innerWidth * (panels.length - 1), // total scroll distance. "+=" means “add this many pixels to the start point”.
                                                                      //window.innerWidth gives the width of the viewport.
                                                                      //sections.length - 1 gives the number of horizontal panels minus one
          },
        });
      };
    });
    return (
      <>
        <div id="projects" className="lg:h-[30vh] bg-secondary flex items-center">
          <h1 className="lg:text-8xl lg:px-20 text-4xl p-8 font-montserrat font-medium text-primary">
            Projects/
          </h1>
        </div>
        <section
          ref={scrollRef}
          className="horizontal-panel font-montserrat text-secondary lg:h-screen lg:overflow-hidden"
        >
          <div className="panels lg:w-[400vw] flex lg:flex-row flex-col">
            {projects.map((items, i) => (
              <div key={i} className={`panel h-screen w-screen flex lg:flex-row flex-col justify-center lg:justify-between lg:items-center lg:px-20 p-8 lg:gap-10 gap-10 ${items.bg}`}>
                <div className="lg:w-1/2 flex flex-col justify-between gap-2">
                  <h1 key={i} className="lg:text-3xl text-2xl font-medium lg:pb-2">
                    {items.name}
                  </h1>
                  <p className="text-gray-600 font-medium lg:text-xl">
                    [Junior Developer]
                  </p>
                  <ul className="lg:pb-4 pb-2">
                    {items.description.map((line, i) => (
                      <li
                        key={i}
                        className="list-disc list-inside lg:text-xl font-medium leading-tight"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="">
                  {items.techs.map((tech, i) => (
                      <Tooltip key={i}>
                        <TooltipTrigger>
                          <img
                            className=" lg:w-12 lg:h-12 w-9 h-9 mr-3 bg-secondary/10 object-cover rounded-xl"
                            src={tech.src}
                            alt={tech.name}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p  className="text-xl ">{tech.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                    </div>
                  <div className="lg:mt-5 flex gap-5">
                    <button  className={`relative group overflow-hidden bg-secondary transition duration-300 ease-out 
                                        cursor-pointer hover:scale-105 ${items.hover} hover:border-2 hover:border-secondary
                                         hover:text-black text-primary lg:py-3 lg:px-6 py-1 px-3 text-lg lg:font-medium rounded-full`}>
                      <span className="block transition-transform duration-200 ease-in group-hover:-translate-y-9">
                        Contant
                      </span>
                      <span className="block absolute transition-transform duration-200 translate-y-2 group-hover:-translate-y-full">
                        Contact
                      </span>
                    </button>

                    <button className={`relative group overflow-hidden bg-secondary transition duration-300 ease-out 
                                        cursor-pointer hover:scale-105 ${items.hover} hover:border-2 hover:border-secondary
                                         hover:text-black text-primary lg:py-3 lg:px-6 py-1 px-3 text-lg lg:font-medium rounded-full`}>
                      <span className="block transition-transform duration-200 ease-in group-hover:-translate-y-9">
                        Contant
                      </span>
                      <span className="block absolute transition-transform duration-200 translate-y-2 group-hover:-translate-y-full">
                        Contact
                      </span>
                    </button>

                  </div>
                </div>

                <div
                  className={`lg:mr-14 lg:w-150 h-1/2 lg:h-150 object-cover flex justify-center items-center rounded-lg bg-primary`}
                >
                  <img className="w-100 h-100 " src={items.src} alt="" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
}