import { Hero } from "@/components/hero"
import { Menu } from "@/components/menu"
import { Contact } from "@/components/contact"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Menu />
      <Contact />
      <Location />
      <Footer />
    </main>
  )
}
