"use client"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState, useMemo } from "react"
import { menuData } from '@/data/data.js'

function MenuGrid({ items }: { items: Array<{ name: string; price: string; description?: string; isNew?: boolean }> }) {
  return (
    <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card
          key={item.name}
          className="p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          {item.isNew && <Badge className="mb-3 bg-accent text-accent-foreground">{"¡NUEVO!"}</Badge>}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex-1 text-balance">{item.name}</h3>
            <span className="text-xl sm:text-2xl font-bold text-primary whitespace-nowrap">{item.price}</span>
          </div>
          {item.description && (
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
          )}
        </Card>
      ))}
    </div>
  )
}

export function Menu() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMenuData = useMemo(() => {
    if (!searchQuery.trim()) return menuData

    const query = searchQuery.toLowerCase()
    return {
      empanizados: menuData.empanizados.filter(
        (item) => item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
      ),
      especiales: menuData.especiales.filter(
        (item) => item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
      ),
      entradas: menuData.entradas.filter(
        (item) => item.name.toLowerCase().includes(query) || (item.description?.toLowerCase().includes(query) ?? false),
      ),
      bebidas: menuData.bebidas.filter((item) => item.name.toLowerCase().includes(query)),
    }
  }, [searchQuery])

  const allRolls = useMemo(() => [...filteredMenuData.empanizados, ...filteredMenuData.especiales], [filteredMenuData])

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">{"Nuestro Menú"}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance px-4">
            {"Explora nuestra selección de rollos empanizados, especialidades y más"}
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar en el menú..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-base sm:text-lg rounded-lg"
            />
          </div>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-8 sm:mb-10 md:mb-12 h-auto gap-2 bg-muted/50 p-2 rounded-lg">
            <TabsTrigger
              value="todos"
              className="text-xs sm:text-sm md:text-base py-2.5 sm:py-3 px-2 sm:px-4 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {"Todos los Rollos"}
            </TabsTrigger>
            <TabsTrigger
              value="empanizados"
              className="text-xs sm:text-sm md:text-base py-2.5 sm:py-3 px-2 sm:px-4 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {"Empanizados"}
            </TabsTrigger>
            <TabsTrigger
              value="especiales"
              className="text-xs sm:text-sm md:text-base py-2.5 sm:py-3 px-2 sm:px-4 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {"Especiales"}
            </TabsTrigger>
            <TabsTrigger
              value="entradas"
              className="text-xs sm:text-sm md:text-base py-2.5 sm:py-3 px-2 sm:px-4 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {"Entradas"}
            </TabsTrigger>
            <TabsTrigger
              value="bebidas"
              className="text-xs sm:text-sm md:text-base py-2.5 sm:py-3 px-2 sm:px-4 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {"Bebidas"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="mt-6 sm:mt-8">
            {allRolls.length > 0 ? (
              <MenuGrid items={allRolls} />
            ) : (
              <div className="text-center py-12 sm:py-16">
                <p className="text-lg sm:text-xl text-muted-foreground">
                  {"No se encontraron rollos con esa búsqueda"}
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="empanizados" className="mt-6 sm:mt-8">
            {filteredMenuData.empanizados.length > 0 ? (
              <MenuGrid items={filteredMenuData.empanizados} />
            ) : (
              <div className="text-center py-12 sm:py-16">
                <p className="text-lg sm:text-xl text-muted-foreground">{"No se encontraron resultados"}</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="especiales" className="mt-6 sm:mt-8">
            {filteredMenuData.especiales.length > 0 ? (
              <MenuGrid items={filteredMenuData.especiales} />
            ) : (
              <div className="text-center py-12 sm:py-16">
                <p className="text-lg sm:text-xl text-muted-foreground">{"No se encontraron resultados"}</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="entradas" className="mt-6 sm:mt-8">
            {filteredMenuData.entradas.length > 0 ? (
              <MenuGrid items={filteredMenuData.entradas} />
            ) : (
              <div className="text-center py-12 sm:py-16">
                <p className="text-lg sm:text-xl text-muted-foreground">{"No se encontraron resultados"}</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="bebidas" className="mt-6 sm:mt-8">
            {filteredMenuData.bebidas.length > 0 ? (
              <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
                {filteredMenuData.bebidas.map((item) => (
                  <Card
                    key={item.name}
                    className="p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="text-center">
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{item.name}</h3>
                      <span className="text-xl sm:text-2xl font-bold text-primary">{item.price}</span>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 sm:py-16">
                <p className="text-lg sm:text-xl text-muted-foreground">{"No se encontraron resultados"}</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
