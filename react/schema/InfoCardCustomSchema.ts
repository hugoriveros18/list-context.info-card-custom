const InfoCardCustomSchema = {
  title: "Configuracion InfoCards",
  description: "Configuracion Individual de Cards",
  type: "object",
  properties: {
    infoCards: {
      title: "InfoCards",
      type: "array",
      items: {
        properties: {
          urlImagen: {
            title: "Imagen Card",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          urlRedireccion: {
            title: "Url de Redireccion",
            type: "string",
            default: ''
          },
          titulo: {
            title: "Titulo Card",
            type: "string"
          },
          abrirNuevaVentana: {
            title: "Abrir Link En Nueva Ventana",
            type: "boolean"
          },
          fechaInicio: {
            title: "Fecha y Hora de Inicio Visualizacion",
            type: "string",
            widget: {
              "ui:widget": "date-time"
            }
          },
          fechaFinal: {
            title: "Fecha y Hora de Final Visualizacion",
            type: "string",
            widget: {
              "ui:widget": "date-time"
            }
          },
        }
      },
    },
    titleAtTop: {
      title: "Titulo Parte Superior",
      type: "boolean"
    }
  }
}

export { InfoCardCustomSchema }
