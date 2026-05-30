import { SectionHeading } from "./about"
import { Code, Globe, Database, Server, Wrench, Users } from "lucide-react"

const groups = [
  { icon: Code, title: "Languages", items: ["Java", "C", "C++", "SQL"] },
  { icon: Globe, title: "Web", items: ["JavaScript", "HTML", "CSS", "React JS"] },
  { icon: Database, title: "Databases", items: ["MySQL", "MongoDB"] },
  { icon: Server, title: "Backend", items: ["Spring Boot", "Node.js"] },
  { icon: Wrench, title: "Tools", items: ["GitHub", "Excel", "MS Word", "PowerPoint"] },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Leadership", "Team Management", "Time Management", "Attention to Detail"],
  },
]

const certifications = [
  "C & C++ — Ace Software Training",
  "Java — Ace Software Training",
  "Prompt Engineering for ChatGPT — Great Learning",
  "Excel for Beginners — Great Learning",
  "SAP Introduction Course — SAP Learning",
]

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <SectionHeading title="Skills & Certifications" subtitle="What I work with" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <group.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="font-semibold">{group.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg bg-secondary px-3 py-1.5 text-sm text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-card p-6">
        <h3 className="font-semibold">Certifications</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <li key={cert} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
