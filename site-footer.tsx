import Link from "next/link"
import { Activity } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col gap-6 md:h-24 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">© 2025 HealthAI. All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap gap-4 sm:gap-6 md:ml-auto">
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary" href="/disclaimer">
            Medical Disclaimer
          </Link>
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary" href="/contact">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  )
}
