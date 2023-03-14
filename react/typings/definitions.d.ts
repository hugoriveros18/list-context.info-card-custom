type InfoCard = {
  urlImagen: string
  urlRedireccion: string
  titulo: string
  abrirNuevaVentana: boolean
  fechaInicio: string
  fechaFinal: string
}

type InfoCardCustomProps = {
  infoCards: InfoCard[]
  titleAtTop: boolean
  children: ReactNode
}
