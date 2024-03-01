"use client"
import React, {useState} from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from "next/image"

export default function Projects() {
  return (
    <section><SectionHeading>My Projects
        </SectionHeading>
        <div>
            {
                projectsData.map((project, index)=>(
                    <React.Fragment key={index}>
                      <Project {...project} />
                    </React.Fragment>
            ))}
        </div>
    </section>
  )
}

type ProjectProps= (typeof projectsData)[number];


function Project({
    title,
    description,
    tags,
    ProjectImage
}:ProjectProps){
    /* const imageUrl = typeof ProjectImage === 'string' ? ProjectImage : ProjectImage.default */
    const [isHovered, setIsHovered]=useState(false)
    return (
        <section
          className="group bg-indigo-800/[0.3] max-w-[42rem] border border-white/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-indigo-400 transition"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[26rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-50">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-indigo-50 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-indigo-800 rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`absolute top-0 left-0 w-full h-full transition-opacity ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
              <div className="text-white text-center">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2">
                  {tags.map((tag, index) => (
                    <li
                      className="bg-indigo-50 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-indigo-800 rounded-full"
                      key={index}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Image
            fill={true}
            src={ProjectImage.src}
            alt={title}
            quality={95}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg shadow-2xl transition-transform group-hover:scale-105"
          />
        </section>
      );
    }