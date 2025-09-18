
import html from './html.svg'
import css from './css.svg'
import javascript from './javascript.svg'
import react from './react.svg'
/* import admin from './admin.png'
import bootstarp from './bootstrap.svg'
import  django from './django.svg'
import drf from './drf-logo2.png'
import figma from './figma.svg'
import github from './github.svg'
import aws from './icons8-aws.svg'
import mysql from './icons8-mysql.svg'
import tailwindcss from './icons8-tailwindcss.svg'
import python from './python.svg'
import render from './render.png'
import restApa from './rest-api-icon.png'
import vercel from './vercel.svg'
import pythonAnywhere from './pythonanywhere_cover.jpg' */
import creative from './image_original.webp'




export const tech = {
  javascript :{ name: "javascript", src: javascript },
  react: { name: "react", src: react },
  css: { name: "css", src: css },
  html: { name: "Html 5", src: html },
};


export const technologies = [
  {
    id : '01',
    title: "Frontend & Design",
    description:
      "I'm passionate about design, animation, and interactions, always aiming to build fun websites with great user experiences",
    techs: [tech.javascript, tech.react, tech.css, tech.html],
  },
  {
    id : '02',
    title: "Backend Tecnologies",
    description:
      "I love problem-solving and building complex systems. I strive to create scalable, reliable, and secure solutions.",
    techs: [tech.javascript, tech.react, tech.css, tech.html],
  },
  {
    id : '03',
    title: "Cloud and DevOps",
    description:
      "I have deployed and managed various applications using tools such as AWS ecs, vercel and other cloud services. ", /* I have worked with multiple clients and stakeholders to define projects that suit their needs and have led these projects. */
    techs: [tech.javascript, tech.react, tech.css, tech.html],
  },
];


export const projects = [
  {
    name: "Creative Scarpyard",
    description: [
       "this is li element for project discriptionvanmns amnsb bnabsnbc  ajsjh hscbk 1",
       "this is li element for project discription 2",
       "this is li element for project discription 3",
    ],
    src: creative,
    bg: "bg-[#8DB6C4]",
    hover: 'hover:bg-[#8DB6C4]',
    techs: [tech.javascript, tech.react, tech.css, tech.html],
    demo : 'http/www.google.com',
    git : 'www.github.com'
  },
  {
    name: "Creative Scarpyart 2",
    description: [
       "this is li element for project discription 1",
       "this is li element for project discription 2",
       "this is li element for project discription 3",
    ],
    src: creative,
    bg: "bg-[#9FC1A4]",
    hover : 'hover:bg-[#9FC1A4]',
    techs: [tech.javascript, tech.react, tech.css, tech.html],
    demo : 'http/www.google.com',
    git : 'www.github.com'
  },
  {
    name: "Creative Scarpyart 3",
    description: [
       "this is li element for project discription 1",
       "this is li element for project discription 2",
       "this is li element for project discription 3",
    ],
    src: creative,
    bg: "bg-[#BBA4CC]",
    hover : 'hover:bg-[#BBA4CC]',
    techs: [tech.javascript, tech.react, tech.css, tech.html],
    demo : 'http/www.google.com',
    git : 'www.github.com'
  },
  /* {
    name: "Creative Scarpyart 3",
    description: [
       "this is li element for project discription 1",
       "this is li element for project discription 2",
       "this is li element for project discription 3",
    ],
    src: creative,
    bg: "[#CCA4A4]",
    techs: [tech.javascript, tech.react, tech.css, tech.html],
    demo : 'http/www.google.com',
    git: 'www.github.com'

  }, */
];


export const navLinks = [
  {
    name: 'About',
    link: '#about/'
  },
  {
    name: 'Projects',
    link: '#projects'
  },
  {
    name: 'Socials',
    link: '/'
  },
]
