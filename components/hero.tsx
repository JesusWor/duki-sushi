"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center py-12 sm:py-16">
        <div className="flex justify-center mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Image
            src="/images/duki-logo.png"
            alt="DUKI Logo"
            width={600}
            height={400}
            className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl h-auto"
            priority
          />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 px-4 text-balance">
          {"Auténtico Sushi Culichi To Go"}
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 px-6 text-balance">
          {
            "Descubre el sabor único de nuestros rollos empanizados y especialidades japonesas con el toque picante de Culiacán"
          }
        </p>

        <Button
          onClick={scrollToMenu}
          size="lg"
          variant="secondary"
          className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700"
        >
          {"Ver Menú"}
          <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground/50" />
      </div>
    </section>
  )
}
