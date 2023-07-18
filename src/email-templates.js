export function emailTemplates(templateId, params) {
  switch (templateId) {
    case 4:
      return `
            Este es un mensaje del sitio web <b>Formulario de contacto Nuevo negocio</b><br>
            <br>
            <b>Nombre:</b> ${params.name}<br>
            <b>Email:</b> ${params.email}<br>
            <b>Ciudad:</b> ${params.city}<br>
            <b>Teléfono:</b> ${params.phone}<br>
            <b>Mensaje:</b> ${params.message}<br>
            <br>
            `;
      break;

    default:
      break;
  }
}
