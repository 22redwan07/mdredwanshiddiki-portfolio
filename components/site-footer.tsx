import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { navItems, profile, socials } from "@/lib/data"

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-medium">{profile.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {profile.title}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-2">
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={socials.email}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {year} {profile.name}. Designed & built with Next.js,
            Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  )
}
