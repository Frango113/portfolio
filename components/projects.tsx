import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'

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
    return( 
    <section className="bg-indigo-800 max-w-[42rem] border
     border-white/5 overflow-hidden sm:pr-8 relative">
        <h3 className="text-2x1 font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag,index)=>(
                <li className="bg-indigo-50 px-3 py-1 text-[0.7rem] 
                uppercase tracking-wider text-indigo-800 rounded-full" key={index}>{tag}</li>
            ))}
            </ul>
            <img src={ProjectImage.src} alt={title} className='absoulte top-8 -right-40'></img>
            </section>
    )
}