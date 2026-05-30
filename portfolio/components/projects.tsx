import { SectionHeading } from "./about"
import { Stethoscope, CalendarDays, Boxes } from "lucide-react"

const projects = [
  {
    icon: Stethoscope,
    title: "Docify",
    date: "June 2025",
    description:
      "An online medical consultancy app enabling patients to book virtual consultations and access healthcare remotely. Features user authentication, appointment scheduling, and secure medical record management.",
    tags: ["React JS", "CSS", "MySQL", "Spring Boot"],
  },
  {
    icon: CalendarDays,
    title: "Upcoming Events Web Page",
    date: "March 2025",
    description:
      "A responsive event landing page showcasing upcoming events with structured layouts for descriptions, image galleries, and highlights — focused on clarity and engagement.",
    tags: ["HTML", "CSS"],
  },
  {
    icon: Boxes,
    title: "ERP Resource Management System",
    date: "March 2026",
    description:
      "An ERP-inspired management system simulating employee records, attendance, and inventory workflows, with enterprise modules modeled after SAP-style business processes.",
    tags: ["Java", "SQL", "Spring Boot"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <SectionHeading title="Projects" subtitle="Things I have built" />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <project.icon className="size-6" aria-hidden="true" />
            </div>
            <div className="mt-5 flex items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="text-xs text-muted-foreground">{project.date}</span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
