"use client";

import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/app/lib/data'
import Project from './project'
import { useSectionView } from '@/app/lib/hooks';

export default function Projects() {
  const {ref} = useSectionView('Projects', 0.5);
    
  return (
    <section id='projects' className='scroll-mt-28 mb-28' ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

