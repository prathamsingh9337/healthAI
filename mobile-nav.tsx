"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Activity, Home, Info, Lightbulb, MessageSquare, HelpCircle, BookOpen } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-6">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">HealthAI</span>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              onClick={() => setOpen(false)}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              onClick={() => setOpen(false)}
            >
              <Info className="h-4 w-4" />
              About
            </Link>
            <Link
              href="/features"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              onClick={() => setOpen(false)}
            >
              <Lightbulb className="h-4 w-4" />
              Features
            </Link>
            <Link
              href="/glossary"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              onClick={() => setOpen(false)}
            >
              <BookOpen className="h-4 w-4" />
              Medical Glossary
            </Link>
            <Link
              href="/faq"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              onClick={() => setOpen(false)}
            >
              <HelpCircle className="h-4 w-4" />
              FAQ
            </Link>
            <Link
              href="/chat"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              onClick={() => setOpen(false)}
            >
              <MessageSquare className="h-4 w-4" />
              Chat with HealthAI
            </Link>
          </nav>
          <div className="mt-4">
            <Link href="/chat" onClick={() => setOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
