import { Instagram, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* <div>
            <div className="mb-4">
              <Image src="/images/duki-logo.png" alt="DUKI" width={200} height={100} className="brightness-0 invert" />
            </div>
            <p className="text-background/80 leading-relaxed">{"Auténtico Sushi Culichi To Go desde 2025"}</p>
          </div> */}

          <div>
            <h3 className="text-xl font-bold mb-4">{"Enlaces Rápidos"}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-background/80 hover:text-background transition-colors">
                  {"Menú"}
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/80 hover:text-background transition-colors">
                  {"Contacto"}
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-background/80 hover:text-background transition-colors">
                  {"Ubicación"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{"Síguenos"}</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/duki_sushi?igsh=eXplZWN1djhiMzFv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background text-foreground p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background text-foreground p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background text-foreground p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>{"© 2025 DUKI Sushi Culichi. Todos los derechos reservados."}</p>
        </div>
      </div>
    </footer>
  )
}
