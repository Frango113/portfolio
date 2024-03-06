"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import me from  './assets/me.jpg'
import {motion} from "framer-motion"
import Link from 'next/link'
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
             
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        console.log('Toggle menu clicked')
        event.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <section
    ref= {ref}
    id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className='flex items-center justify-center'>
            <div className='relative'
                >
            <motion.div
            initial={{opacity:0 , scale: 0}}
            animate={{opacity:1, scale:1}}
            transition={{
                type: "tween",
                duration:0.2}}>
                <Image src={me} 
                alt="Francisco Gonzalez Casarino"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-yellow'></Image>
                <motion.span className='absolute bottom-0 right-0 text 4x1'
                initial={{opacity:0, scale:0}}
                animate={{opacity:1,scale:1}}
                transition={{
                    type:'spring',
                    stiffness:125,
                    delay:0.1,
                    duration: 0.7,
                
                }}>🎶</motion.span>
                </motion.div>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2x1 font-medium !leading-[1.5] sm:text-4x1'
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}>
            <span className='font-bold'>{`Hi! I'm Francisco`}</span> I'm a{"  "}
            <span className='font-bold'>Junior Front-end developer </span>who's {" "}
            <span className='font-bold'>currently looking to gain experience  in the industry.</span>
            My focus is {" "}
            <span className='underline'>ReactJS, Redux and Tailwind</span>
        </motion.h1>
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{opacity:0, y:100}}
        animate={{opacity: 1, y:0}}
        transition={{
            delay:0.1
        }}>
{/* <Link
          href="#contact"
          className="bg-indigo-100 text-indigo-700 px-7 py-3 flex items-center gap-2 
            rounded-full outline-none focus:scale-110 hover:scale-110
             hover:bg-indigo-700 hover:text-white transition-all"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link> */}
            <div className="relative">
            <a className=' bg-indigo-800 text-white px-7 py-3 
            flex items-center gap-2 rounded-full outline-none border border-indigo-50 
            focus:scale-110 hover:scale-110 active:scale-105
            hover:bg-indigo-50 hover:text-indigo-700 transition cursor-pointer hover:border-indigo-800'
            onClick={toggleMenu} >
                Download CV <HiDownload/>
            </a>
            {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 
                    rounded-lg shadow-lg">
                    <a href="/CVen.pdf" className="block px-4 py-2 text-gray-800 hover:bg-indigo-700 
                        hover:text-white">English</a>
                    <a href="/CVspa.pdf" className="block px-4 py-2 text-gray-800 hover:bg-indigo-700 
                        hover:text-white">Spanish</a>
                </div>
            )}
    </div>
            <a className="bg-indigo-100 text-indigo-800  p-4 flex items-center gap-2 
            rounded-full outline-none focus:scale-110 hover:scale-110
             hover:bg-indigo-700 border border-indigo-800 hover:text-white
              hover:border-indigo-50 transition-all"
              href='https://www.linkedin.com/in/francisco-gonzalez-casarino-135b82237/'
              target="_blank">
            <BsLinkedin/>
            </a>
            <a className="bg-indigo-100 text-indigo-800  p-4 flex items-center gap-2 
            rounded-full outline-none focus:scale-110 hover:scale-110
             hover:bg-indigo-700 border border-indigo-800 hover:text-white
              hover:border-indigo-50 transition-all"
              href='https://github.com/Frango113'
              target="_blank">
            <FaGithubSquare/>
            </a>
        </motion.div>
        
    </section>
  )
}
