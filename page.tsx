"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Search, BookOpen } from "lucide-react"

type GlossaryItem = {
  term: string
  definition: string
  category: string
}

const medicalGlossary: GlossaryItem[] = [
  {
    term: "Acute",
    definition:
      "A condition that begins abruptly with marked intensity or sharpness, then subsides after a relatively short period.",
    category: "General",
  },
  {
    term: "Chronic",
    definition: "A condition or disease that persists for a long period of time or is constantly recurring.",
    category: "General",
  },
  {
    term: "Diagnosis",
    definition:
      "The identification of the nature and cause of an illness or injury through evaluation of patient history and examination, and review of laboratory data.",
    category: "General",
  },
  {
    term: "Hypertension",
    definition: "Abnormally high blood pressure, especially arterial blood pressure.",
    category: "Cardiovascular",
  },
  {
    term: "Arrhythmia",
    definition: "Any disturbance in the rhythm of the heartbeat.",
    category: "Cardiovascular",
  },
  {
    term: "Tachycardia",
    definition: "Abnormally rapid heart rate, usually defined as greater than 100 beats per minute.",
    category: "Cardiovascular",
  },
  {
    term: "Bronchitis",
    definition:
      "Inflammation of the mucous membrane in the bronchial tubes, causing coughing, chest discomfort, and production of sputum.",
    category: "Respiratory",
  },
  {
    term: "Asthma",
    definition:
      "A chronic lung condition characterized by difficulty in breathing due to inflammation of the air passages.",
    category: "Respiratory",
  },
  {
    term: "Pneumonia",
    definition:
      "Inflammation of the lungs, typically caused by an infection, in which the air sacs fill with pus and may become solid.",
    category: "Respiratory",
  },
  {
    term: "Gastritis",
    definition: "Inflammation of the lining of the stomach, characterized by abdominal pain, nausea, and vomiting.",
    category: "Digestive",
  },
  {
    term: "Hepatitis",
    definition: "Inflammation of the liver, most commonly caused by a viral infection.",
    category: "Digestive",
  },
  {
    term: "Colitis",
    definition:
      "Inflammation of the colon (large intestine), which can cause abdominal pain, diarrhea, and rectal bleeding.",
    category: "Digestive",
  },
  {
    term: "Arthritis",
    definition: "Inflammation of one or more joints, causing pain, swelling, and limited movement.",
    category: "Musculoskeletal",
  },
  {
    term: "Osteoporosis",
    definition: "A condition characterized by decreased bone mass and increased susceptibility to fractures.",
    category: "Musculoskeletal",
  },
  {
    term: "Tendinitis",
    definition: "Inflammation of a tendon, often caused by overuse or injury.",
    category: "Musculoskeletal",
  },
  {
    term: "Dermatitis",
    definition: "Inflammation of the skin, typically characterized by itchiness, redness, and a rash.",
    category: "Dermatological",
  },
  {
    term: "Eczema",
    definition: "A chronic skin condition characterized by itchy, inflamed skin.",
    category: "Dermatological",
  },
  {
    term: "Psoriasis",
    definition: "A chronic skin condition characterized by red, itchy, scaly patches.",
    category: "Dermatological",
  },
  {
    term: "Migraine",
    definition:
      "A recurrent throbbing headache that typically affects one side of the head and is often accompanied by nausea and disturbed vision.",
    category: "Neurological",
  },
  {
    term: "Epilepsy",
    definition: "A neurological disorder characterized by recurrent seizures.",
    category: "Neurological",
  },
  {
    term: "Neuropathy",
    definition: "A disease or dysfunction of one or more peripheral nerves, typically causing numbness or weakness.",
    category: "Neurological",
  },
  {
    term: "Hyperthyroidism",
    definition:
      "Overactivity of the thyroid gland, resulting in increased metabolic rate and elevated levels of thyroid hormones.",
    category: "Endocrine",
  },
  {
    term: "Diabetes",
    definition: "A metabolic disease characterized by high blood sugar levels over a prolonged period.",
    category: "Endocrine",
  },
  {
    term: "Hypothyroidism",
    definition:
      "Underactivity of the thyroid gland, resulting in decreased metabolic rate and reduced levels of thyroid hormones.",
    category: "Endocrine",
  },
]

const categories = ["All", ...Array.from(new Set(medicalGlossary.map((item) => item.category)))].sort()

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredGlossary = medicalGlossary.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <BookOpen className="h-12 w-12 text-primary mb-4" />
            <h1 className="text-3xl font-bold tracking-tight mb-2">Medical Glossary</h1>
            <p className="text-muted-foreground max-w-2xl">
              A comprehensive guide to common medical terms and definitions to help you better understand health
              information.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search medical terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-primary/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredGlossary.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((item, index) => (
                <Card key={index} className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{item.term}</CardTitle>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{item.category}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80">{item.definition}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No medical terms found matching your search criteria.</p>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
