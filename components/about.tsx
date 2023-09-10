"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionView } from '@/app/lib/hooks';

export default function About() {
    const { ref } = useSectionView('About');

    return (
        <motion.section ref={ref} className='
            mb-28
            max-w-[45rem]
            text-center
            leading-8
            scroll-mt-28
            '
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.175
            }}
            id='about'
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                Welcome to my portfolio! I&apos;m Gnana Harish, A {" "}
                <span className="font-medium">Computer Science</span> graduate with <span className="font-medium">2.5 years of software engineering experience</span>,{" "}
                and I&apos;m currently on a mission to excel as a
                <span className="font-medium"> Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js).</span>{" "}

                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem.My core skills include{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                .  My portfolio showcases my dedication to creating efficient and scalable web applications, and I&apos;m always eager to take on new challenges. Explore my work to see how I can bring  digital ideas to life!

            </p>

            <p>
                <span className="italic">My free time</span>, I enjoy playing
                video games, watching anime, and hearing music. I also enjoy{" "}
                <span className="font-medium">learning about mysteries of space</span>
            </p>
        </motion.section>
    )
}
