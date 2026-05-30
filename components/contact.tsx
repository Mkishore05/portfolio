import { SectionHeading } from "./about"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "kishore.m0506@gmail.com",
    href: "mailto:kishore.m0506@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 93457 28198", href: "tel:+919345728198" },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Mkishore05",
    href: "https://github.com/Mkishore05",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "kishore-m",
    href: "https://www.linkedin.com/in/kishore-m-4b31a02b8",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <SectionHeading title="Get In Touch" subtitle="Let's connect" />

      <p className="mx-auto mt-6 max-w-xl text-pretty text-center leading-relaxed text-muted-foreground">
        I&apos;m open to internships, collaborations, and opportunities to grow. Feel free to reach
        out through any of the channels below — I&apos;d love to hear from you.
      </p>

      <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <c.icon className="size-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {c.label}
              </p>
              <p className="truncate font-medium">{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
