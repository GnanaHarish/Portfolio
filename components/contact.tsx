"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionView } from "@/app/lib/hooks";
import {sendEmail} from '@/actions/sendEmail';

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
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:gnanaharish03@gmail.com">
          gnanaharish03@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form className="mt-10 flex flex-col" action={
        async (FormData) => {
          console.log("Client Side")
          console.log(FormData.get("senderEmail"))
          console.log(FormData.get("message"))
          await sendEmail(FormData);
        }
      }>
        <input type="email" className="h-14 rounded-lg borderBlack px-4" placeholder="Your Email" required maxLength={500} name="senderEmail"/>
        <textarea className="h-52 my-3 rounded-lg borderBlack p-4" placeholder="Your Message" required maxLength={5000} name="message"/>
        <button
          type="submit"
          className="
          group
          flex
          items-center
          justify-center
          gap-2
          h-[3rem]
          w-[8rem]
          bg-gray-900
          text-white
          rounded-full
          focus:scale-110
          hover:scale-110
          active:scale-105
        hover:bg-gray-950
          outline-none
          transition-all
        "
        >
          Submit{" "}
          <FaPaperPlane
            className="
            text-xs
            opacity-70
            transition-all
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
          />
        </button>
      </form>
    </motion.section>
  );
}
