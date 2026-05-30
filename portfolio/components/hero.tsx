"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Code2, Send, Github, Linkedin, Mail, Phone, Camera } from "lucide-react"

const ROLES = [
  "Full Stack Developer",
  "Java Developer",
  "React JS Developer",
  "CSE Student",
]

function useTypewriter(words: string[]) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const speed = deleting ? 55 : 110

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400)
        }
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === "") {
          setDeleting(false)
          setWordIndex((i) => i + 1)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words])

  return text
}

export function Hero() {
  const typed = useTypewriter(ROLES)
  const [photo, setPhoto] = useState<string>("/kishore.jpg")
  const fileRef = useRef<HTMLInputElement>(null)

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      setPhoto(URL.createObjectURL(file))
    }
  }

  return (
    <section id="home" className="grid items-center gap-12 py-10 md:grid-cols-2 md:py-16">
      {/* Left: intro */}
      <div className="fade-up">
        <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
          <span className="bg-gradient-to-r from-primary to-emerald-300 bg-clip-text text-transparent">
            Kishore M
          </span>
        </h1>

        <p className="mt-3 text-xl font-medium text-foreground md:text-2xl">
          <span>I&apos;m a </span>
          <span className="text-primary">{typed}</span>
          <span className="blink-cursor text-primary">|</span>
        </p>

        <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Motivated Computer Science Engineering student with strong foundations in Java, SQL, and
          Full Stack Development. I build responsive web applications using React JS, Spring Boot,
          and MySQL, turning complex problems into simple, reliable solutions.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            <Code2 className="size-4" aria-hidden="true" />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Send className="size-4" aria-hidden="true" />
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <SocialIcon href="https://github.com/Mkishore05" label="GitHub">
            <Github className="size-5" />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/kishore-m-4b31a02b8"
            label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </SocialIcon>
          <SocialIcon href="mailto:kishore.m0506@gmail.com" label="Email">
            <Mail className="size-5" />
          </SocialIcon>
          <SocialIcon href="tel:+919345728198" label="Phone">
            <Phone className="size-5" />
          </SocialIcon>
        </div>
      </div>

      {/* Right: photo with glowing ring */}
      <div className="flex justify-center md:justify-end">
        <div className="relative size-64 md:size-80 float-slow">
          {/* rotating gradient ring */}
          <div className="ring-spin absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,var(--color-primary)_120deg,transparent_240deg)] blur-[2px]" />
          {/* glow ring */}
          <div className="glow-pulse absolute inset-2 rounded-full" />
          {/* photo */}
          <div className="absolute inset-3 overflow-hidden rounded-full border-2 border-primary/40 bg-card">
            <Image
              src={photo || "/placeholder.svg"}
              alt="Kishore M profile photo"
              fill
              className="object-cover"
              sizes="320px"
              unoptimized={photo.startsWith("blob:")}
            />
          </div>

          {/* upload button */}
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition-transform hover:scale-105"
          >
            <Camera className="size-4" aria-hidden="true" />
            Upload
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleUpload}
            className="sr-only"
            aria-label="Upload profile photo"
          />
        </div>
      </div>
    </section>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  )
}
