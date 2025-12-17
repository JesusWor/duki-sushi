"use client"

import { MapPin, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{"Nuestra Ubicación"}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"Visítanos o pide tu sushi a domicilio"}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          <Card className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary text-primary-foreground p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{"DUKI Sushi Culichi"}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {"Aquitania 2569"}
                  <br />
                  {"Montecarlo, parque canacintral, Culiacán, Sinaloa"}
                  <br />
                  {"C.P. 80054"}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Button className="w-full text-lg py-6" asChild>
                <a
                  href="https://www.google.com/maps/search/Culiacán,+Sinaloa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="mr-2 h-5 w-5" />
                  {"Cómo Llegar"}
                </a>
              </Button>

              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-bold text-foreground mb-3">{"Información adicional"}</h4>
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  <li>{"• Servicio a domicilio disponible"}</li>
                  <li>{"• Para llevar (To Go)"}</li>
                  <li>{"• Estacionamiento disponible"}</li>
                  <li>{"• Aceptamos todas las formas de pago"}</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.3478553948856!2d-107.42477453042278!3d24.816284398622376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcda796e167095%3A0x8bed474e120c70af!2sAquitania%202569%2C%20Montecarlo%2C%20Parque%20Canacintra%20I%2C%2080054%20Culiac%C3%A1n%20Rosales%2C%20Sin.!5e0!3m2!1ses-419!2smx!4v1765941685452!5m2!1ses-419!2smx" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación DUKI Sushi"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
