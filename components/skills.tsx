"use client"

import { motion } from "motion/react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { skillGroups, toolBadges } from "@/lib/data"

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A well-rounded technical toolkit"
          description="Proficiencies spanning AI research, machine learning frameworks, and full-stack software development."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} index={gi % 2}>
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <h3 className="font-serif text-lg font-medium">
                  {group.category}
                </h3>
                <div className="mt-5 space-y-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal index={2}>
          <div className="mt-10">
            <p className="text-sm font-medium text-foreground">
              Models, tools & databases
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {toolBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
