import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { aboutParagraphs, aboutStats, profile } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About"
          title="Bridging rigorous research and thoughtful engineering"
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} index={i}>
                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal index={3}>
              <div className="mt-8">
                <p className="text-sm font-medium text-foreground">
                  Research interests
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.interests.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal index={1}>
            <div className="grid grid-cols-2 gap-4">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <p className="font-serif text-4xl font-medium text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
