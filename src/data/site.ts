// Datos generales de la web. Edita aquí el email, las redes o el envío del formulario.
export const site = {
  name: 'Pat Sehart',
  studio: 'Pat Sehart Art Studio',
  domain: 'patsehart.com',
  email: 'patri.martinez.asenjo13@hotmail.com',
  instagram: 'https://www.instagram.com/art.pat.sehart',
  instagramHandle: '@art.pat.sehart',
  // Pon aquí la URL de Pinterest cuando exista y aparecerá el icono automáticamente.
  pinterest: null as string | null,
  // Los formularios se envían por email a través de FormSubmit (sin servidor propio).
  // La primera vez que alguien escriba, FormSubmit manda a ese correo un email de activación
  // que hay que confirmar una sola vez. Si el envío falla, se abre el correo del visitante.
  formEndpoint: 'https://formsubmit.co/ajax/patri.martinez.asenjo13@hotmail.com',
};
