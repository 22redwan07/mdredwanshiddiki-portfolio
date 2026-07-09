import { Reveal } from "@/components/reveal"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  dark?: boolean
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl"
      }
    >
      <div
        className={`flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span
          className={`h-px w-8 ${dark ? "bg-navy-foreground/30" : "bg-primary/40"}`}
        />
        <span
          className={`text-xs font-medium uppercase tracking-[0.2em] ${
            dark ? "text-navy-foreground/70" : "text-primary"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`mt-4 font-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-[2.75rem] ${
          dark ? "text-navy-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed text-pretty ${
            dark ? "text-navy-foreground/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
