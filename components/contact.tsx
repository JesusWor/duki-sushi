"use client"

import { Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{"Contáctanos"}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"Estamos listos para atenderte. Haz tu pedido ahora"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-primary text-primary-foreground p-4 rounded-full">
                <Phone className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{"Teléfono"}</h3>
            <a href="tel:+526671234567" className="text-primary hover:underline font-medium">
              {"(667) 123-4567"}
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-primary text-primary-foreground p-4 rounded-full">
                <MessageCircle className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{"WhatsApp"}</h3>
            <a
              href="https://wa.me/526671234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              {"Enviar mensaje"}
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-primary text-primary-foreground p-4 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{"Email"}</h3>
            <a href="mailto:contacto@duki.com" className="text-primary hover:underline font-medium">
              {"contacto@duki.com"}
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="bg-primary text-primary-foreground p-4 rounded-full">
                <Clock className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{"Horario"}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {"Lun - Dom"}
              <br />
              {"11:00 AM - 10:00 PM"}
            </p>
          </Card>
        </div>

        <div className="text-center mt-12">
  <Button size="lg" className="px-6 py-5 sm:px-8 sm:py-6" asChild>
    <a
      href="https://wa.me/526671234567"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-base sm:text-lg"
    >
      <MessageCircle className="mr-2 h-5 w-5" />

      <span className="sm:hidden">Pedir por WhatsApp</span>
      <span className="hidden sm:inline">Hacer Pedido por WhatsApp</span>
    </a>
  </Button>
</div>

      </div>
    </section>
  )
}
