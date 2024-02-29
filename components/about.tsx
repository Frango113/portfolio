"use client"
import React from 'react'
import SectionHeading from './section-heading'
import {motion} from "framer-motion"


export default function About() {
  return (
  <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
  initial={{opacity:0, y:100}}
  animate={{opacity:1, y:0}}
  transition={{delay:0.175}}>
    <SectionHeading>About Me</SectionHeading>
    <p className="mb-3">
      
        with a background in {""}
        <span className="font-medium">Journalism</span>,
        i decided to make a change in my carreer  and pursue an interest I had always held:
        <span className="italic"> Coding</span> I  started learning code through online courses, then joined the{" "}
        <span className="underline">Henry FullStack web developement bootcamp</span> where i learnt all my current knowledge in{" "}
      <span className='font-bold'> ReactJS, Javascript, TailwindCSS, HTML, NodeJS and SQL</span>
      
    </p>
    </motion.section>
    )  
}
