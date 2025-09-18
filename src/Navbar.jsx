import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { navLinks } from "./assets/img/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar(){
  const [isOpen , setIsOpen] = useState(false);
  const toggleRef = useRef(null)
  const menuRef = useRef(null)
  const isOpenRef = useRef(isOpen)
  const scrollTriggered = useRef(null)

  useEffect(()=>{
    isOpenRef.current = isOpen;
    if(isOpen){ 
      gsap.set(toggleRef.current, {scale:1});
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      
      if(!scrollTriggered.current){
        gsap.to(toggleRef.current,{scale:0, duration: 0.3, ease: 'power2.out'})
      }
    }
  }, [isOpen])
 

  useGSAP(()=>{
    gsap.set(toggleRef.current,{scale:0});
    gsap.set(menuRef.current,{ yPercent:-100 });

    ScrollTrigger.create({
      trigger : '#hero',
      start : 'bottom center',
      onEnter: ()=>{
        scrollTriggered.current = true;
        gsap.to(toggleRef.current, {
          scale:1,
          duration: 0.3,
          ease: 'power2.out'
        })
      },
      onLeaveBack:()=>{
        scrollTriggered.current =false;
        gsap.to(toggleRef.current, {
          scale:0,
          duration: .3,
          ease: 'power2.in'
        })
      },
    })
  },[]);

  const handleClick= ()=>{
    setIsOpen(prev => !prev);

    if(!isOpen){
      gsap.to(menuRef.current,{
        yPercent: 0,
        duration: 0.5,
        ease : 'power2.out'
       });
    } else{
      gsap.to(menuRef.current,{
        yPercent: -100,
        duration: 0.5,
        ease : 'power2.in'
       });
    }
  };


    return (
      <>
        <nav className="lg:h-[10vh] w-full flex justify-between items-center lg:px-10 p-4 font-montserrat bg-primary">
          <h1 className="font-nicomoji lg:text-2xl">code by adeel.</h1>

          <ul className="hidden lg:flex flex-row text-gray">
            
            {navLinks.map((links, index) => (
              <a
                key={index}
                href={links.link}
                className="lg:text-xl overflow-hidden relative group lg:mx-2"
              >
                <span className="block transition-transform duration-200 ease-in group-hover:-translate-y-full h-6">
                  {links.name}
                </span>
                <span className="block absolute transition-transform duration-200 translate-y-0 group-hover:-translate-y-full">
                  {links.name}
                </span>
              </a>
            ))}
          </ul>
  
          {/* Hamburger for Mobile and desktop after 100vh scroll */}
          <button onClick={handleClick} className="lg:hidden text-gray">
             menu
          </button>
              
          {/* Button for Desktop menu */}
          <button ref={toggleRef} onClick={handleClick} className={`fixed top-2 right-2 z-100 rounded-full lg:h-24 lg:w-24 h-18 w-18 scale-0
            ${isOpen ? 'bg-white' : 'bg-black'}`}>

              { isOpen ? <X color="black"  size={30} className="w-full"/> : <Menu color="white" size={30} className="w-full" />}
          </button>
        </nav>

        {/* Mobile Navbar/ Desktop Menu */}
        <nav ref={menuRef} className="w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-secondary z-50">
          <ul className="flex flex-col text-5xl font-bold lg:text-8xl  lg:font-semibold gap-4 text-primary">  
            {navLinks.map((links, index) => (
              <a
                key={index}
                onClick={handleClick}
                href={links.link}
              >
               {links.name}
              </a>
            ))}
          </ul>
        </nav>
      </>
    );
}