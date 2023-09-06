import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MessageIt from "@/public/MessageIt.png";
import Artifusion from "@/public/Artifusion.png";
import AnimeBlog from "@/public/AnimeBlog.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Accenture - Associate Software Engineer",
    location: "Chennai, India",
    description:
      "During my tenure at Accenture, I honed my skills as an Associate Software Engineer, specializing in telecom mediation. Over the course of 10 months, I played a vital role as a support engineer in a challenging project, contributing to the seamless functioning of telecommunications systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "ManageArtworks - Developer",
    location: "Chennai, India",
    description:
      "In my current role at ManageArtworks, I am an integral part of the implementation team, tasked with deploying the ManageArtwork product to diverse clients. My work revolves around the use of key technologies such as JavaScript, SQL, and C#. This experience has allowed me to deepen my expertise and contribute to the successful implementation of cutting-edge solutions for our clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "MessageIt",
    description:
      "MessageIt is a Messenger clone, People can do one to one conversation and group chats.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: MessageIt,
  },
  {
    title: "Artifusion",
    description:
      "Artifusion is an AI Image generating site which uses OpenAi's Dall-E Api to create image based on prompt given by user.",
    tags: ["React", "Node.js", "MongoDb", "Tailwind", "Cloudinary"],
    imageUrl: Artifusion,
  },
  {
    title: "AnimeBlog",
    description:
      "AnimeBlog is a website that allows users to create a blog or read about other peoples blog about anime.",
    tags: ["Node.js", "EJS", "MongoDb", "Bootstrap"],
    imageUrl: AnimeBlog, 
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "Python",
  "MySQL",
  "JQuery"
] as const;