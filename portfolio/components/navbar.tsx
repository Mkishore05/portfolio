"use client"

import { useState } from "react"
import { Code2, Menu, X } from "lucide-react"

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between">
      <a href="#home" className="flex items-center gap-2 font-semibold text-lg">
        <Code2 className="size-5 text-primary" aria-hidden="true" />
        <span>Kishore M</span>
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-foreground md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-16 z-50 flex flex-col gap-1 rounded-2xl border border-border bg-card p-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
