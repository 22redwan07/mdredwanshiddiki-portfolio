import { ExternalLink, FileText, Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { publications } from "@/lib/data"

export function Publications() {
  return (
    <section id="publications" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Publications"
          title="Peer-reviewed & presented research"
          description="Contributions to international conferences, including an IEEE-published paper and a competition abstract."
        />

        <div className="mt-14 space-y-6">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} index={i}>
              <article className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row">
                  <div className="flex lg:flex-col lg:items-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Quote className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
                        {pub.type}
                      </span>
                      <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {pub.role}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-xl font-medium leading-snug text-balance">
                      {pub.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-foreground">
                      {pub.venue}
                      {pub.publisher ? (
                        <span className="text-muted-foreground">
                          {" "}
                          · {pub.publisher}
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {pub.authors}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {pub.date}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {pub.abstract}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {pub.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {link.label === "PDF" ? (
                            <FileText className="h-3.5 w-3.5" />
                          ) : (
                            <ExternalLink className="h-3.5 w-3.5" />
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
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
