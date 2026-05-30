import { GraduationCap, Briefcase, Award } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    primary: "B.E. Computer Science & Engineering",
    secondary: "Velammal College of Engineering and Technology, Madurai · CGPA 8.49 (2023–Present)",
  },
  {
    icon: Briefcase,
    title: "Internship",
    primary: "Web Development Intern — Dot Com Infoway",
    secondary: "June 2025 · Full Stack training across React front-end and Spring Boot / Node.js back-end.",
  },
  {
    icon: Award,
    title: "Achievements",
    primary: "NSS Volunteer & Special Proficiency Award",
    secondary: "Category-I academic award (2023) and 2nd place at Inter-Club Skating Meet.",
  },
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <SectionHeading title="About Me" subtitle="A quick look at who I am" />

      <div className="mt-12 grid gap-10 md:grid-cols-5">
        <p className="text-pretty leading-relaxed text-muted-foreground md:col-span-2">
          I&apos;m a Computer Science Engineering student passionate about enterprise technologies,
          ERP systems, and SAP. I enjoy building responsive web applications and optimizing business
          processes. With strong analytical, communication, and teamwork skills, I bring a continuous
          learning mindset to every project I take on.
        </p>

        <div className="grid gap-4 md:col-span-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <item.icon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {item.title}
                </p>
                <p className="mt-1 font-semibold">{item.primary}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.secondary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-primary">{subtitle}</p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
    </div>
  )
}
