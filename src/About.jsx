import React from "react";

export default function About(){

    return (
      <>
        <section className="flex flex-col lg:p-20 lg:gap-6 p-8 gap-4 rounded-t-4xl font-montserrat bg-secondary text-primary">
          <div className="w-full ">
            <h1 className="lg:text-8xl text-4xl">About Me/</h1>
          </div>
          <div className="lg:flex justify-end items-center text-justify text-" >
            <p className="lg:w-1/2 lg:text-2xl leading-tight ">
                A passionate Front-end Developer with a background in Computer
                Science. I specialize in building modern web applications using
                React, Javascript, TailwindCSS, and Django. I enjoy turning ideas
                into real-world projects and continuously improving my skills in
                both frontend and backend development.
            </p>
          </div>
        </section>
        <hr className="border-b-1 border-primary" />
      </>
    );
}