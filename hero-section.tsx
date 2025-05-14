import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-primary/5 dark:from-gray-950 dark:to-primary/10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Your Personal Health Assistant
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI-Powered Health Insights at Your Fingertips
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Get reliable health information, symptom analysis, and wellness recommendations with HealthAI's advanced
                artificial intelligence.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/chat">
                <Button size="lg" className="gap-1 bg-primary hover:bg-primary/90">
                  Start Chatting <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Evidence-Based</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-primary"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>24/7 Availability</span>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:mr-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-primary/20">
                <img
                  alt="HealthAI Dashboard"
                  className="aspect-video object-cover w-full"
                  height={310}
                  src="/placeholder.svg?height=310&width=550"
                  width={550}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
