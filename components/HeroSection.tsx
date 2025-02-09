"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Github } from "lucide-react"
import { Button } from "./ui/Button"
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image"


export function HeroSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-24">
        <h1 className=" text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold  ">
            <span className=" text-[#ffff] glow-text-cyan ">Hello I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={[
                'Tayyaba Tahir',
                1000,
                'Bioinformatician',
                1000,
                'Data Aanlyst',
                1000,
                'Python Programmer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-4xl  text-[#00ffff] glow-text-cyan "
            />
          </h1>
        <p className="text-gray-300 mb-6 max-w-xl">
          Skilled in Python, R, SQL, and Data Analysis. I have a strong background in Bioinformatics and Data Science. I am a quick learner and always eager to learn new technologies.
        </p>
        <div className="flex gap-6 mb-8">
          {[
            { Icon: Facebook, href: "#" },
            { Icon: Instagram, href: "#" },
            { Icon: Linkedin, href: "#" },
            { Icon: Github, href: "https://github.com/mubashir1837" },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-[#00ffff] flex items-center justify-center hover:bg-[#00ffff] hover:text-black transition-all duration-300 glow-border-cyan"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
        <div className="flex gap-4">
          <Button variant="default" className="bg-[#00ffff] text-black hover:bg-[#00ffff]/80 glow-btn-cyan">
            Hire me
          </Button>
          <Button
            variant="outline"
            className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black glow-border-cyan"
          >
            Download CV
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="aspect-square rounded-full overflow-hidden relative w-[80%] h-[80%] lg:ml-24 lg:mb-10">
          <div className="absolute inset-0 bg-[#00ffff] opacity-20 blur-3xl animate-pulse" />
          <div className="relative z-10 w-full h-full">
            <Image src="/globe.svg" alt="Profile" fill className="rounded-full object-cover" priority />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

