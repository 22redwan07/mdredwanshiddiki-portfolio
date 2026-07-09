import Image from "next/image"
import { ArrowUpRight, Check } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { projects } from "@/lib/data"

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-border bg-secondary/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Software crafted for real people"
          description="Cross-platform mobile applications built with Flutter and Firebase, focused on usability and performance."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} index={i % 3}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} app preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-lg font-medium">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Check className="h-3.5 w-3.5 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
