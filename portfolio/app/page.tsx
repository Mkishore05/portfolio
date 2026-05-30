import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-screen px-4 py-6 md:px-8 md:py-10">
      {/* Hero card — matches the reference design */}
      <div className="mx-auto max-w-6xl rounded-3xl border border-border bg-card px-6 py-6 shadow-2xl shadow-black/30 md:px-12 md:py-8">
        <Navbar />
        <Hero />
      </div>

      {/* Remaining sections */}
      <div className="mx-auto max-w-6xl px-2 md:px-4">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>

      <footer className="mx-auto max-w-6xl px-2 py-10 text-center text-sm text-muted-foreground md:px-4">
        <p>© {new Date().getFullYear()} Kishore M. Built with passion.</p>
      </footer>
    </main>
  )
}
