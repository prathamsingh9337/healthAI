import { Bot } from "lucide-react"

export function TypingIndicator() {
  return (
    <div className="flex gap-3 p-4 rounded-lg bg-secondary" style={{ maxWidth: "85%" }}>
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          <Bot className="h-5 w-5" />
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-sm text-muted-foreground">HealthAI is typing</p>
        <div className="typing-indicator ml-2">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}
