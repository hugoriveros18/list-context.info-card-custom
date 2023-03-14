import React from "react";
import { useListContext, ListContextProvider } from 'vtex.list-context';
import ValidacionInfoCards from "../ValidacionInfoCards";
import { InfoCardCustomSchema } from "../../schema/InfoCardCustomSchema";

const InfoCardCustom = ({infoCards, titleAtTop, children}:InfoCardCustomProps) => {

  //LIST CONTEXT
  const { list } = useListContext() || [];

  //STATES
  const grupoInfoCards = ValidacionInfoCards(infoCards, titleAtTop).filter(card => card !== null);
  const cardsParaVisualizar = list.concat(grupoInfoCards);


  //JSX
  if(cardsParaVisualizar.length > 1) {
    return (
      <ListContextProvider list={cardsParaVisualizar}>
        {children}
      </ListContextProvider>
    )
  }

  if(cardsParaVisualizar.length === 1) {
    return (
      <>
        {cardsParaVisualizar}
      </>
    )
  }

  return null;
}

InfoCardCustom.schema = InfoCardCustomSchema;

export default InfoCardCustom;

