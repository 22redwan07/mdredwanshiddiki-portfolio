import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Research } from "@/components/research"
import { Publications } from "@/components/publications"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Timeline } from "@/components/timeline"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
