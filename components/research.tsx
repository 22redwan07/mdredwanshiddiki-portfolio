import { FlaskConical } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { research } from "@/lib/data"

export function Research() {
  return (
    <section
      id="research"
      className="border-t border-border bg-secondary/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research"
          title="Applied AI research across vision, language, and society"
          description="Selected research projects spanning deep learning for healthcare and agriculture, natural language processing, and computational policy."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {research.map((item, i) => (
            <Reveal key={item.title} index={i % 3}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FlaskConical className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-lg font-medium leading-snug text-balance">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                  {item.area}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
