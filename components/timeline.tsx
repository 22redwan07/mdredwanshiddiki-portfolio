import {
  Award,
  Briefcase,
  FlaskConical,
  GraduationCap,
  Presentation,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { timeline } from "@/lib/data"
import type { TimelineItem } from "@/lib/data"

const iconMap: Record<TimelineItem["category"], LucideIcon> = {
  Education: GraduationCap,
  Research: FlaskConical,
  Experience: Briefcase,
  Award: Award,
  Presentation: Presentation,
  Leadership: Users,
}

export function Timeline() {
  return (
    <section
      id="journey"
      className="border-t border-border bg-secondary/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="Education, experience & recognition"
          description="A timeline of academic milestones, research roles, professional experience, awards, and leadership."
        />

        <div className="mt-14 max-w-3xl">
          <ol className="relative border-l border-border pl-8 sm:pl-10">
            {timeline.map((entry, i) => {
              const Icon = iconMap[entry.category]
              return (
                <Reveal key={`${entry.title}-${i}`} index={i % 4}>
                  <li className="relative pb-10 last:pb-0">
                    <span className="absolute -left-[3.05rem] flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-primary sm:-left-[3.55rem]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                          {entry.year}
                        </span>
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
                          {entry.category}
                        </span>
                      </div>
                      <h3 className="mt-2 font-serif text-lg font-medium leading-snug">
                        {entry.title}
                      </h3>
                      <p className="text-sm font-medium text-foreground/80">
                        {entry.org}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                        {entry.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
