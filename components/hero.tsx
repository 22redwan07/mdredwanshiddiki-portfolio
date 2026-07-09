"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowDown, Download, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { NeuralBackground } from "@/components/neural-background"
import { profile, socials } from "@/lib/data"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-aurora opacity-70"
        aria-hidden="true"
      />
      <NeuralBackground />
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to research & engineering roles
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-lg font-medium text-gradient sm:text-xl"
          >
            {profile.title}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-2 text-sm text-muted-foreground sm:text-base"
          >
            {profile.subtitle}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#research"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View Research
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/5">
            <Image
              src={profile.photo || "/placeholder.svg"}
              alt={`Portrait of ${profile.name}`}
              width={480}
              height={560}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-5">
              <p className="font-serif text-lg text-navy-foreground">
                {profile.shortName}
              </p>
              <p className="text-xs text-navy-foreground/70">
                AI Researcher · Software Engineer
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground md:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
