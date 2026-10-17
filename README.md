# Pat Sehart Art Studio — web

Web portfolio de **Pat Sehart** (arte abstracto), hecha a partir del boceto de Canva, las notas de voz de Patricia y la referencia de estilo [awakeartstudio.com](https://www.awakeartstudio.com/es).

- **Sin precios**: cada obra tiene el botón **Send request**, que abre un formulario con la obra ya escrita y envía la consulta por email.
- Español (`/`) e inglés (`/en/`).
- Secciones: Home · Obras (todas y Nueva colección) · Works (Exposiciones y Obras vendidas) · Clothes · Prints · About me · Contact.
- Hecha con [Astro](https://astro.build): web estática, rapidísima y con las fotos optimizadas automáticamente (WebP en varios tamaños).

## Ponerla en marcha en el ordenador

```bash
npm install
npm run dev
```

Se abre en http://localhost:4321/patsehart-web/

## Publicar cambios (GitHub Pages)

```bash
npm run build
npm run deploy
```

`deploy` sube la carpeta `dist/` a la rama `gh-pages`, que GitHub Pages publica en
https://rubenzor25-commits.github.io/patsehart-web/

## Editar contenido

| Qué | Dónde |
|---|---|
| Añadir / quitar / reordenar obras | `src/data/obras.ts` (las fotos van en `src/assets/obras/`) |
| Marcar una obra como vendida | Quitarla de `obras.ts` y añadirla en `vendidas` de `src/data/works.ts` (foto en `src/assets/vendidas/`) |
| Qué obras salen en "Nueva colección" | `nueva: true` en `src/data/obras.ts` |
| Exposiciones, vestidos y bolso | `src/data/works.ts` |
| Email, Instagram, Pinterest, envío del formulario | `src/data/site.ts` |
| Textos (About me, Contact, botones…) en ES y EN | `src/i18n/ui.ts` |

Las fotos pueden subirse grandes (hasta ~2000 px); la web genera sola las versiones optimizadas.

## Formulario de contacto

Los mensajes se envían con [FormSubmit](https://formsubmit.co) al email de `src/data/site.ts`, sin servidor ni coste.
**La primera vez** que alguien envíe el formulario, FormSubmit manda un email de activación a esa dirección: hay que pulsar el botón de confirmar una sola vez. Conviene hacer un envío de prueba nada más publicar para activarlo.
Si el envío falla, la web ofrece abrir el correo del visitante con el mensaje ya escrito.

## Usar el dominio patsehart.com

Ahora mismo patsehart.com apunta a la web antigua (Streademy). Cuando Patricia quiera cambiarlo:

1. Compilar con el dominio: `SITE_URL=https://patsehart.com BASE_PATH=/ npm run build`
2. Publicar con el dominio: `CNAME=patsehart.com npm run deploy`
3. En IONOS (DNS del dominio), apuntar `www` con un registro CNAME a `rubenzor25-commits.github.io` y el dominio raíz con registros A a las IP de GitHub Pages (185.199.108.153, .109.153, .110.153, .111.153).
4. En GitHub › Settings › Pages, escribir `patsehart.com` como dominio personalizado y activar HTTPS.

## Pendiente de confirmar con Patricia

- Enlace de **Pinterest** (el icono aparece solo al rellenarlo en `site.ts`).
- **Talla** del vestido Wine.
- Fotos que faltan en el boceto: **Huellas en la Arena** (100 x 100 cm) y una tercera **Line** (acrílico sobre lienzo, 120 x 120 cm).
- Qué obras forman la **Nueva colección** (de momento, la serie de hidroimpresión).
- Técnica o medidas que faltan: Moon, My Fucking Art (técnica), 94, Who Are You (medidas), Unicorn Riot (medidas), Icon Unmasked.
- "Line" aparecía dos veces con fotos distintas: se han llamado **Line I** (fondo negro) y **Line II** (fondo blanco).
- Erratas del boceto corregidas: Icon Un*m*asked, "spray" (ponía "spay"), Golden *Women*, The Feeling *Beauty*, "*una* artista autodidacta", "creada *como* una extensión", "gráfico".
- Textos en inglés: traducidos a partir de los originales; revisar si quiere otro tono.
