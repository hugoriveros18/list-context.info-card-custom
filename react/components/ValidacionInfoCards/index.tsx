import React from "react";
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [
  'info-card__general-container',
  'info-card__title',
  'info-card__image'
]

const ValidacionInfoCards = (infoCards: InfoCard[], titleAtTop: boolean = true) => {


  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    infoCards.map((card, index) => {
      const ahora = new Date();
      const inputFechaInicio = new Date(card.fechaInicio);
      const inputFechaFinal = new Date(card.fechaFinal);
      if (ahora.getTime() > inputFechaInicio.getTime() && ahora.getTime() < inputFechaFinal.getTime()) {
        if(card.urlRedireccion === '' || !card.urlRedireccion) {
          return (
            <div
              key={index}
              className={`${handles['info-card__general-container']}`}
              style={titleAtTop ? {display: 'flex', width: "100%",flexDirection: 'column'} : {display: 'flex', width: "100%", flexDirection: 'column-reverse'}}
            >
              <h3
                className={`${handles['info-card__title']}`}
                style={{width: "100%"}}
              >
                {card.titulo}
              </h3>
              <img
                alt={card.titulo}
                src={card.urlImagen}
                className={`${handles['info-card__image']}`}
                style={{width: "100%"}}
              />
            </div>
          )
        }

        return (
          <a
            href={card.urlRedireccion}
            target={card.abrirNuevaVentana ? '_blank' : '_self'}
            key={index}
            className={`${handles['info-card__general-container']}`}
            style={titleAtTop ? {display: 'flex', width: "100%",flexDirection: 'column'} : {display: 'flex', width: "100%", flexDirection: 'column-reverse'}}
          >
            <h3
              className={`${handles['info-card__title']}`}
              style={{width: "100%"}}
            >
              {card.titulo}
            </h3>
            <img
              alt={card.titulo}
              src={card.urlImagen}
              className={`${handles['info-card__image']}`}
              style={{width: "100%"}}
            />
          </a>
        )
      }
      return null;
    })
  )
}

export default ValidacionInfoCards;
