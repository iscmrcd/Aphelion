# Página de Servicios — Foco en Websites

Construyo el esqueleto completo de `/servicios` (todas las categorías visibles), pero la única sección desarrollada a profundidad es **Websites**. El resto queda como cards "Próximamente / Cotización personalizada" con CTA a contacto, listo para llenarse cuando me pases la info.

Estilo: Apple + ElevenLabs. B&W puro (`#FAFAFA` / `#0A0A0A`), tipografía display tight, mucho whitespace, micro-interacciones suaves, mobile-first.

## Ruta

`src/routes/servicios.tsx` — una sola página, scroll vertical con secciones. Head propio (title, description, OG).

## Estructura de la página

### 1. Hero
- Título display tight: "Construimos la infraestructura digital de marcas que no se conforman."
- Subtítulo corto. CTA pill negro "Agendar llamada" + ghost "Ver paquetes web".
- Fondo `#FAFAFA`, sin gradientes.

### 2. Grid de categorías (bento)
6 cards con hover sutil. Solo "Websites" es clickable/scrolleable a su sección; el resto muestra badge "Cotización personalizada" y abren CTA de contacto:
- Websites ← desarrollada
- Marketing Digital (Meta · Google · TikTok)
- Contenido para Redes
- Video Comercial & Drone
- SaaS Personalizado
- Branding

### 3. **Websites — sección principal** (lo que vamos a pulir)

**3a. Intro de la sección**
Título grande + párrafo: "Seis niveles, una sola filosofía: software que vende por ti."

**3b. Selector de niveles (tabs scrollables tipo ElevenLabs)**
Tabs horizontales con snap en móvil:
`Presencial · Profesional · Captación · Automatizada · Operación · SaaS`

Al seleccionar un nivel, debajo aparece una **card grande** con:
- Nombre + tagline
- Setup `$X` + mensualidad `$Y / mes` (toggle setup ↔ mensual estilo ElevenLabs)
- "Ideal para": chips con tipos de negocio
- ✓ Qué incluye (lista verde negra discreta)
- — Qué NO incluye (gris)
- + Módulos que puedes agregar (chips)
- CTA: "Elegir este nivel" + "Comparar todos"

**3c. Tabla comparativa "Compare plans"** (estilo ElevenLabs)
- Sticky header con los 6 niveles
- Filas agrupadas: Diseño · Páginas · Integraciones · CRM/Agenda · Panel · Login · Pagos · IA · Soporte
- ✓ negro / — gris / texto corto
- Scroll horizontal en móvil con primera columna sticky

**3d. Cotizador interactivo** (opcional en esta entrega — confirmar abajo)
Reutilizando la lógica del archivo `aphelion_cotizador_escalonado` que adjuntaste: giro → nivel → módulos → precio estimado.

### 4. Categorías pendientes (placeholders)
Sección compacta con las otras 4 categorías como cards "Cotización personalizada — Cuéntanos tu proyecto". Sin tablas ni precios todavía.

### 5. FAQ acordeón (sobre websites)
8 preguntas: tiempos de entrega, hosting, propiedad del código, cambios, soporte, pagos, garantía, qué pasa si quiero subir de nivel.

### 6. CTA final + footer minimal
"Trabajamos con clientes que valoran el detalle." Botón negro pill "Agendar llamada".

## Estilo visual (locked)

- Paleta: `#FAFAFA` bg, `#0A0A0A` texto/CTA, grises `#F5F5F5 / #E5E5E5 / #A3A3A3 / #737373`. **Cero color de acento.**
- Tipografía: display tight (Inter Tight o similar), pesos 400/500/600, tracking `-0.02em` en titulares.
- Botones: pill negro sólido `bg-[#0A0A0A] text-white rounded-full` + pill ghost `border border-[#E5E5E5]`.
- Cards: `border 1px #E5E5E5`, radius `20-24px`, hover → border `#0A0A0A`.
- Tablas: filas separadas con punteado `border-dashed`, ✓ pequeñito, — gris.
- Animaciones: fade + translate-y suaves al entrar en viewport (200-400ms).

## Implementación técnica

- **Ruta:** `src/routes/servicios.tsx` con `head()` propio.
- **Index existente:** dejo `/` con un home mínimo (hero + link grande a `/servicios`). Si prefieres que `/` SEA la página de servicios directamente, dime.
- **Componentes** en `src/components/servicios/`:
  - `Hero.tsx`
  - `CategoryBento.tsx`
  - `WebsitesSection.tsx` (engloba lo siguiente)
  - `WebLevelTabs.tsx` + `WebLevelCard.tsx`
  - `WebComparePlans.tsx`
  - `CategoryPlaceholders.tsx`
  - `FAQ.tsx`
  - `CTAFooter.tsx`
- **Data:** `src/lib/websites-data.ts` con los 6 niveles tomados tal cual del archivo `AphelionSoluciones.jsx` (nombres, precios, includes, notInc, canAdd).
- **Tokens:** ajusto `src/styles.css` a paleta B&W (`--background`, `--foreground`, `--border`, `--muted`, `--muted-foreground`).
- **Animaciones:** instalo `framer-motion` para `whileInView` fade-up.
- **Iconos:** `lucide-react` (ya disponible).

## Datos a usar
Los 6 niveles de `AphelionSoluciones.jsx`:
1. Web Presencial — $9,900 setup / $490 mes
2. Web Profesional — $18,500 / $890
3. Web de Captación — $34,900 / $1,900
4. (los demás los leo del archivo completo)

Confirmar si los precios/textos van tal cual o los ajustamos.

## Preguntas antes de implementar

1. **Home:** ¿`/` es home mínimo con link a `/servicios`, o `/` ES directamente la página de servicios?
2. **Cotizador interactivo:** ¿lo incluyo ya en esta entrega (sección 3d) o lo dejamos para la siguiente?
3. **Precios:** ¿van tal cual del archivo `AphelionSoluciones.jsx` o me pasas ajustes?