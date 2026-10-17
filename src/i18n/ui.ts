export const langs = ['es', 'en'] as const;
export type Lang = (typeof langs)[number];
export type L = Record<Lang, string>;

/** Rutas de cada sección en cada idioma. `{slug}` se sustituye por el de la obra. */
const routes = {
  home: { es: '', en: 'en/' },
  obras: { es: 'obras/', en: 'en/artworks/' },
  nueva: { es: 'obras/nueva-coleccion/', en: 'en/artworks/new-collection/' },
  obra: { es: 'obras/{slug}/', en: 'en/artworks/{slug}/' },
  works: { es: 'works/', en: 'en/works/' },
  exposiciones: { es: 'works/exposiciones/', en: 'en/works/exhibitions/' },
  vendidas: { es: 'works/obras-vendidas/', en: 'en/works/sold/' },
  vendida: { es: 'works/obras-vendidas/{slug}/', en: 'en/works/sold/{slug}/' },
  clothes: { es: 'clothes/', en: 'en/clothes/' },
  prenda: { es: 'clothes/{slug}/', en: 'en/clothes/{slug}/' },
  prints: { es: 'prints/', en: 'en/prints/' },
  about: { es: 'about-me/', en: 'en/about-me/' },
  contact: { es: 'contact/', en: 'en/contact/' },
} satisfies Record<string, L>;

export type RouteKey = keyof typeof routes;

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function href(lang: Lang, key: RouteKey, slug = ''): string {
  return base + routes[key][lang].replace('{slug}', slug);
}

/** Ruta a un archivo de /public respetando el base path. */
export function asset(path: string): string {
  return base + path.replace(/^\//, '');
}

export const ui = {
  es: {
    htmlLang: 'es',
    tagline: 'Arte abstracto original',
    metaDescription:
      'Pat Sehart Art Studio. Arte abstracto original: obras únicas en acrílico, spray, hidroimpresión y acuarela, vestidos pintados a mano y exposiciones.',
    nav: {
      home: 'Home',
      obras: 'Obras',
      nueva: 'Nueva colección',
      todas: 'Todas las obras',
      works: 'Works',
      exposiciones: 'Exposiciones',
      vendidas: 'Obras vendidas',
      clothes: 'Clothes',
      prints: 'Prints',
      about: 'About me',
      contact: 'Contact',
      menu: 'Menú',
      close: 'Cerrar',
    },
    nuevaColeccion: 'Nueva colección',
    obrasOriginales: 'Obras originales',
    dress: 'Dress',
    dresses: 'Dresses',
    similares: 'Similares',
    sendRequest: 'Send request',
    requestIntro: 'Cuéntame qué te interesa y te responderé por correo con toda la información.',
    soldLabel: 'Vendida',
    similarRequest: 'Encargar una obra similar',
    prev: 'Anterior',
    next: 'Siguiente',
    viewAll: 'Ver todas las obras',
    viewWork: 'Ver obra',
    priceOnRequest: 'Precio bajo petición',
    triptych: 'Tríptico',
    diptych: 'Díptico',
    size: 'Talla',
    noPriceNote:
      'Las obras son piezas originales y únicas. Para conocer precio y disponibilidad, envía una solicitud y te responderé por correo.',
    form: {
      name: 'Nombre',
      lastName: 'Apellidos',
      email: 'Email',
      message: 'Cuéntame tus preferencias y expectativas (tamaño, paleta de color, estilo)',
      messageWork: 'Mensaje',
      send: 'Send',
      sending: 'Enviando…',
      ok: '¡Gracias! He recibido tu mensaje y te responderé lo antes posible.',
      error: 'No se ha podido enviar desde la web. Puedes escribirme directamente desde tu correo:',
      openMail: 'Abrir mi correo',
      required: 'Campo obligatorio',
      subjectGeneral: 'Nuevo mensaje desde patsehart.com',
      subjectWork: 'Solicitud de información',
      workPrefill: (t: string) => `Hola Pat, me gustaría recibir información sobre «${t}».`,
      similarPrefill: (t: string) => `Hola Pat, me encantó «${t}» y me gustaría encargar una obra similar.`,
      printPrefill: 'Hola Pat, me interesa una lámina (print) de la obra: ',
      workField: 'Obra',
    },
    contactTitle: 'Contact',
    contactText:
      '¿Tienes una idea en mente y quieres convertirla en arte? Escríbeme y hagámosla realidad juntos. Cada obra comienza con una visión, y la tuya puede ser la próxima. ¡Estoy aquí para crear contigo!',
    contactMail: 'Envíame tu idea por correo y exploremos las posibilidades.',
    aboutTitle: 'About me',
    about: [
      'Soy una artista autodidacta especializada en arte abstracto, buscando generar una conexión emocional con el espectador.',
      'Utilizo diversas técnicas, como hidroimpresión, acrílico, spray, pintura al alcohol, acuarela y medios digitales, integrándolas en composiciones equilibradas. Mi constante experimentación impulsa la evolución de mi estilo.',
      'Además, gestiono eficazmente mi presencia en redes sociales, como Instagram, para ampliar mi alcance y conexión con el público.',
    ],
    printsTitle: 'Prints',
    printsText:
      'Muy pronto podrás tener láminas de mis obras. Si te interesa una reproducción de alguna pieza en concreto, escríbeme y te avisaré en cuanto esté disponible.',
    printsCta: 'Quiero una lámina',
    worksTitle: 'Works',
    exposTitle: 'Exposiciones',
    vendidasTitle: 'Obras vendidas',
    vendidasIntro:
      'Algunas de las obras que ya han encontrado su hogar. Si alguna te gusta, puedo crear para ti una pieza con la misma esencia.',
    clothesIntro:
      'Piezas únicas pintadas a mano: cada prenda es una extensión de una obra de arte.',
    notFound: 'Esta página no existe.',
    backHome: 'Volver al inicio',
    footerRights: 'Todas las obras © Pat Sehart. Prohibida su reproducción sin permiso.',
    langName: 'ESP',
    skip: 'Saltar al contenido',
    zoom: 'Ampliar imagen',
  },
  en: {
    htmlLang: 'en',
    tagline: 'Original abstract art',
    metaDescription:
      'Pat Sehart Art Studio. Original abstract art: one-of-a-kind works in acrylic, spray paint, hydro printing and watercolour, hand-painted dresses and exhibitions.',
    nav: {
      home: 'Home',
      obras: 'Artworks',
      nueva: 'New collection',
      todas: 'All artworks',
      works: 'Works',
      exposiciones: 'Exhibitions',
      vendidas: 'Sold works',
      clothes: 'Clothes',
      prints: 'Prints',
      about: 'About me',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
    },
    nuevaColeccion: 'New collection',
    obrasOriginales: 'Original artworks',
    dress: 'Dress',
    dresses: 'Dresses',
    similares: 'Similar works',
    sendRequest: 'Send request',
    requestIntro: 'Tell me what you are interested in and I will reply by email with all the details.',
    soldLabel: 'Sold',
    similarRequest: 'Commission a similar piece',
    prev: 'Prev',
    next: 'Next',
    viewAll: 'View all artworks',
    viewWork: 'View artwork',
    priceOnRequest: 'Price on request',
    triptych: 'Triptych',
    diptych: 'Diptych',
    size: 'Size',
    noPriceNote:
      'All artworks are original, one-of-a-kind pieces. To ask about price and availability, send a request and I will reply by email.',
    form: {
      name: 'Name',
      lastName: 'Last name',
      email: 'Email',
      message: 'Please, tell me about your preferences and expectations (size, colour palette, style)',
      messageWork: 'Message',
      send: 'Send',
      sending: 'Sending…',
      ok: 'Thank you! I have received your message and will get back to you soon.',
      error: 'The message could not be sent from the website. You can write to me directly from your email:',
      openMail: 'Open my email',
      required: 'Required field',
      subjectGeneral: 'New message from patsehart.com',
      subjectWork: 'Artwork enquiry',
      workPrefill: (t: string) => `Hi Pat, I would like to receive information about “${t}”.`,
      similarPrefill: (t: string) => `Hi Pat, I loved “${t}” and I would like to commission a similar piece.`,
      printPrefill: 'Hi Pat, I am interested in a print of the artwork: ',
      workField: 'Artwork',
    },
    contactTitle: 'Contact',
    contactText:
      'Do you have an idea in mind and want to turn it into art? Write to me and let’s make it happen together. Every artwork starts with a vision, and yours could be the next one. I’m here to create with you!',
    contactMail: 'Send me your idea by email and let’s explore the possibilities.',
    aboutTitle: 'About me',
    about: [
      'I am a self-taught artist specialising in abstract art, seeking to create an emotional connection with the viewer.',
      'I use a variety of techniques, such as hydro printing, acrylic, spray paint, alcohol ink, watercolour and digital media, integrating them into balanced compositions. My constant experimentation drives the evolution of my style.',
      'I also actively manage my presence on social media, such as Instagram, to expand my reach and connection with the public.',
    ],
    printsTitle: 'Prints',
    printsText:
      'Prints of my artworks are coming soon. If you would like a reproduction of a specific piece, write to me and I will let you know as soon as it is available.',
    printsCta: 'I want a print',
    worksTitle: 'Works',
    exposTitle: 'Exhibitions',
    vendidasTitle: 'Sold works',
    vendidasIntro:
      'Some of the artworks that have already found their home. If you like one, I can create a piece with the same essence for you.',
    clothesIntro: 'Hand-painted, one-of-a-kind pieces: every garment is an extension of an artwork.',
    notFound: 'This page does not exist.',
    backHome: 'Back to home',
    footerRights: 'All artworks © Pat Sehart. Reproduction without permission is prohibited.',
    langName: 'ENG',
    skip: 'Skip to content',
    zoom: 'Enlarge image',
  },
} as const;

export type UI = (typeof ui)[Lang];
