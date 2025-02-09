"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-6 mb-6">
          {[
            { Icon: Facebook, href: "#" },
            { Icon: Instagram, href: "#" },
            { Icon: Linkedin, href: "#" },
            { Icon: Github, href: "#" },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#00ffff] flex items-center justify-center hover:bg-[#00ffff] hover:text-black transition-all duration-300 glow-border-cyan"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
        <div className="flex justify-center gap-8 mb-6">
          {["FAQ", "About", "Skills", "Projects", "Contact"].map((item) => (
            <Link key={item} href="#" className="text-gray-300 hover:text-[#00ffff] transition-colors">
              {item}
            </Link>
          ))}
        </div>
        <div className="text-center text-gray-400">© Muhammad Talha | All Rights Reserved</div>
      </div>
    </footer>
  )
}

