import { BookOpen, GraduationCap, Mail, MapPin, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { profile, socials } from "@/lib/data"

const links = [
  { label: "Email", value: profile.email, href: socials.email, icon: Mail },
  {
    label: "GitHub",
    value: "22redwan07",
    href: socials.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "md-redwan-shiddiki",
    href: socials.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "Google Scholar",
    value: "Research profile",
    href: socials.scholar,
    icon: GraduationCap,
  },
  {
    label: "ResearchGate",
    value: "Redwan S.",
    href: socials.researchgate,
    icon: BookOpen,
  },
  {
    label: "ORCID",
    value: "0009-0004-0447-3750",
    href: socials.orcid,
    icon: BookOpen,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-24 text-navy-foreground sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-navy-foreground/30" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-navy-foreground/70">
                Contact
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
              Let&apos;s build something meaningful together
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-foreground/70 text-pretty">
              I&apos;m open to graduate research positions, AI engineering roles,
              research assistantships, and collaborations. Feel free to reach out
              — I&apos;d be glad to connect.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-navy-foreground/80">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {profile.phone}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, i) => (
            <Reveal key={link.label} index={i % 3}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-5 transition-colors hover:border-navy-foreground/40 hover:bg-navy-foreground/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-foreground/10 text-navy-foreground transition-transform group-hover:scale-105">
                  <link.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-navy-foreground/60">
                    {link.label}
                  </span>
                  <span className="block truncate text-sm font-medium">
                    {link.value}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal index={2}>
          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href={socials.email}
              className="inline-flex items-center gap-2 rounded-full bg-navy-foreground px-6 py-3 text-sm font-medium text-navy transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 px-6 py-3 text-sm font-medium text-navy-foreground transition-colors hover:bg-navy-foreground/10"
            >
              Download CV
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
