# 🍣 DUKI Sushi Culichi - Sitio Web Oficial

**© 2025 DUKI Sushi Culichi - TODOS LOS DERECHOS RESERVADOS**

---

## ⚖️ AVISO LEGAL IMPORTANTE

Este proyecto es **PROPIEDAD PRIVADA Y CONFIDENCIAL** de DUKI Sushi Culichi.

### 🚫 PROHIBICIONES ESTRICTAS

El uso no autorizado de este software está **ESTRICTAMENTE PROHIBIDO** y es **ILEGAL**.

**NO ESTÁ PERMITIDO:**
- Copiar, clonar o descargar este repositorio sin autorización
- Usar el código para otros restaurantes, negocios o proyectos comerciales
- Modificar, adaptar o crear versiones derivadas del software
- Distribuir, compartir, publicar o sublicenciar el código
- Realizar ingeniería inversa, descompilar o desensamblar
- Usar elementos de diseño, logos, marcas o contenido gráfico
- Extraer datos, información o contenido del sitio web
- Crear servicios, productos o aplicaciones competidoras
- Copiar la estructura, diseño o funcionalidades
- Usar para entrenamiento de IA o machine learning

### 📜 LICENCIA PROPIETARIA

Este software está bajo **LICENCIA PROPIETARIA EXCLUSIVA**. 

**Términos principales:**
- **Propiedad:** Todo el código, diseño y contenido pertenece exclusivamente a DUKI Sushi Culichi
- **Sin garantías:** El software se proporciona "tal cual" sin garantías de ningún tipo
- **Uso exclusivo:** Solo personal autorizado puede acceder y modificar el código
- **Confidencialidad:** Toda la información del proyecto es confidencial
- **Restricción de transferencia:** No se puede vender, alquilar o transferir

Ver archivo `LICENSE` para términos legales completos.

### ⚠️ CONSECUENCIAS LEGALES

Cualquier violación de estos términos resultará en:

**Acciones Civiles:**
- Demandas por daños y perjuicios económicos
- Compensación por lucro cesante
- Pago de honorarios legales y costas judiciales
- Órdenes judiciales y medidas cautelares
- Embargo preventivo de activos

**Acciones Penales:**
- Denuncia por violación de derechos de autor
- Proceso por competencia desleal
- Querella por robo de propiedad intelectual
- Reporte a autoridades de comercio y propiedad intelectual

**Consecuencias Adicionales:**
- Publicación de la violación en medios
- Daño reputacional permanente
- Prohibición de operar negocios similares
- Inclusión en listas de infractores

### 🛡️ PROTECCIÓN DE PROPIEDAD INTELECTUAL

**Marcas Registradas:**
- "DUKI" es una marca registrada ®
- "Sushi Culichi" está protegida legalmente
- El eslogan y taglines son propiedad exclusiva

**Derechos de Autor:**
- Logo y elementos visuales: © 2025
- Código fuente: © 2025
- Contenido web y textos: © 2025
- Fotografías y multimedia: © 2025

**Secretos Comerciales:**
- Recetas y preparaciones únicas
- Nombres de productos especiales
- Estrategias de negocio
- Base de datos de clientes

**Diseño Industrial:**
- Interfaz de usuario
- Esquema de colores
- Tipografía y layout
- Componentes personalizados

---

## 🔒 INFORMACIÓN TÉCNICA (SOLO PERSONAL AUTORIZADO)

### Tecnologías Implementadas

**Frontend:**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui components

**Características:**
- Sistema de búsqueda en tiempo real
- Menú interactivo con filtros
- Diseño responsive (móvil, tablet, desktop)
- Optimización SEO
- Integración con Google Maps
- Enlaces directos a WhatsApp
- Animaciones y transiciones suaves

**Seguridad Implementada:**
- Headers de seguridad HTTP
- Protección contra scraping
- Deshabilitación de clic derecho
- Marcas de agua en código
- Ofuscación de código en producción
- Rate limiting

### Instalación (Solo Personal Autorizado)

**Requisitos:**
- Node.js 18+
- npm o yarn
- Acceso autorizado al repositorio

**Pasos de instalación:**

```bash
# 1. Clonar repositorio (requiere autenticación)
git clone [URL_PRIVADA]
cd duki-sushi

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con credenciales

# 4. Ejecutar en desarrollo
npm run dev

# 5. Compilar para producción
npm run build
npm start
```

**Variables de entorno necesarias:**
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key
NEXT_PUBLIC_SITE_URL=https://dukisushi.com
NEXT_PUBLIC_WHATSAPP_NUMBER=tu_numero
```

### Estructura del Proyecto

```
duki-sushi/
├── app/
│   ├── page.tsx              # Página principal
│   ├── layout.tsx            # Layout global
│   ├── globals.css           # Estilos globales
│   ├── terminos/             # Términos y condiciones
│   └── privacidad/           # Política de privacidad
├── components/
│   ├── hero.tsx              # Sección hero
│   ├── menu.tsx              # Componente del menú
│   ├── contact.tsx           # Información de contacto
│   ├── location.tsx          # Mapa y ubicación
│   ├── footer.tsx            # Footer del sitio
│   └── ui/                   # Componentes UI reutilizables
├── public/
│   ├── images/               # Imágenes y assets
│   └── security.txt          # Información de seguridad
├── LICENSE                   # Licencia propietaria
├── COPYRIGHT.txt             # Aviso de derechos de autor
├── SECURITY.md               # Política de seguridad
└── README.md                 # Este archivo
```

### Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Compilar para producción
npm run start        # Ejecutar versión de producción
npm run lint         # Verificar código
npm run type-check   # Verificar tipos TypeScript
```

### Deployment

**Plataforma recomendada:** Vercel

```bash
# Conectar con Vercel
vercel

# Deploy a producción
vercel --prod
```

**Configuración de dominio:**
1. Configurar DNS en tu proveedor
2. Agregar dominio personalizado en Vercel
3. Configurar SSL/TLS automático
4. Activar protección DDoS

---

## 📋 MENÚ DEL RESTAURANTE

### Rollos Empanizados

- **TRES QUESOS** - $110
- **MAR Y TIERRA** - $100  
- **CIELO, MAR Y TIERRA** - $100
- **CORDON BLUE** - $100
- **CAMARÓN BLUE** - $100

### Rollos Especiales

- **OTHANI ROLL** - $150
- **ESCOBAR ROLL** - $150
- **BILLY ROLL** - $150
- **CLAVE ALI ROLL** - $150
- **YAMAMOTO ROLL** - $150
- **ROKI SASAKI ROLL** - $150
- **COPO ROLL** - $150
- **DRAGÓN CULICHI** - $160 (NUEVO)

### Entradas

- **DEDOS DE QUESO** - $50-$120
- **CHILES DUKI** - $60-$150
- **GOHAN** - $110
- **GOHAN ESPECIAL** - $140
- **YAKIMESHI** - $120
- **YAKIMESHI ESPECIAL** - $140
- **BOMBA** - $125
- **BOMBA ESPECIAL** - $150

### Bebidas

- Té (1/2 litro) - $20
- Té (1 litro) - $35
- Coca Cola - $30
- Agua Mineral - $30
- Agua Natural - $15

---

## 🔐 SEGURIDAD Y PRIVACIDAD

### Protecciones Implementadas

**Código:**
- Avisos de copyright en todos los archivos
- Licencia propietaria en header de componentes
- Marcas de agua invisibles en el código
- Ofuscación en build de producción

**Web:**
- Headers de seguridad CSP
- Protección X-Frame-Options
- HTTPS obligatorio
- Cookies seguras

**Legal:**
- Términos y condiciones
- Política de privacidad
- Aviso de cookies
- GDPR compliance

### Reporte de Vulnerabilidades

Si encuentras una vulnerabilidad de seguridad:

1. **NO** la divulgues públicamente
2. Envía reporte a: security@dukisushi.com
3. Incluye descripción detallada
4. Proporciona pasos para reproducir
5. Espera respuesta en 48 horas

**Recompensas:** Ofrecemos recompensas por reportes válidos de seguridad.

---

## 📞 CONTACTO

### Información del Restaurante

**Dirección:** [Tu dirección completa]  
**Teléfono:** [Tu teléfono]  
**WhatsApp:** [Tu WhatsApp]  
**Email:** contacto@dukisushi.com

**Horarios:**
- Lunes a Domingo: 12:00 PM - 10:00 PM

### Contacto Legal

**Para asuntos legales, licencias o permisos:**

**Email:** legal@dukisushi.com  
**Teléfono:** [Teléfono legal]  
**Dirección:** [Dirección legal]

---

## 📱 REDES SOCIALES

- Facebook: /dukisushi
- Instagram: @dukisushi
- TikTok: @dukisushi

---

## 🔄 CONTROL DE VERSIONES

**Versión actual:** 1.0.0  
**Última actualización:** 16 de diciembre de 2025  
**Desarrollado para:** DUKI Sushi Culichi

### Changelog

**v1.0.0 (16/12/2025)**
- Lanzamiento inicial del sitio web
- Sistema de menú interactivo con búsqueda
- Integración con Google Maps
- Enlaces directos a WhatsApp
- Diseño responsive completo
- Protecciones legales implementadas

---

## ✅ CHECKLIST DE DEPLOYMENT

Antes de publicar en producción:

- [ ] Actualizar información de contacto real
- [ ] Configurar Google Maps API Key
- [ ] Actualizar número de WhatsApp
- [ ] Verificar precios del menú
- [ ] Comprobar enlaces de redes sociales
- [ ] Configurar dominio personalizado
- [ ] Activar SSL/HTTPS
- [ ] Configurar analytics
- [ ] Testear en todos los dispositivos
- [ ] Verificar SEO y meta tags
- [ ] Revisar términos legales
- [ ] Configurar emails de contacto
- [ ] Activar protecciones de seguridad

---

## ⚠️ DISCLAIMER FINAL

**ESTE PROYECTO ES CONFIDENCIAL Y PROPIETARIO**

Toda persona que tenga acceso a este código está legalmente obligada a:
- Mantener la confidencialidad absoluta
- No divulgar información a terceros
- No usar el código fuera del contexto autorizado
- Reportar cualquier uso no autorizado
- Cumplir con todas las políticas de seguridad

El incumplimiento de estas obligaciones puede resultar en:
- Terminación inmediata del acceso
- Acciones legales civiles y penales
- Responsabilidad por daños y perjuicios
- Sanciones económicas significativas

---

**© 2025 DUKI Sushi Culichi. Todos los derechos reservados.**

*Este documento y todo el proyecto están protegidos por leyes de derechos de autor internacionales.*
