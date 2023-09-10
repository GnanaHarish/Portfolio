"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionView } from "@/app/lib/hooks";
import {sendEmail} from '@/actions/sendEmail';
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionView('Contact');

  
  return (
    <motion.section id="contact" className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial = {{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:gnanaharish03@gmail.com">
          gnanaharish03@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col dark:text-black" action={
        async (FormData) => {
          const {data, error} = await sendEmail(FormData);
          if(error){
            toast.error(error);
            return;
          }
          toast.success('Mail sent successfully!')
        }
      }>
        <input type="email" className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder="Your Email" required maxLength={500} name="senderEmail"/>
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder="Your Message" required maxLength={5000} name="message"/>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
