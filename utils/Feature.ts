const Feature: FeatureInterface = {
  workstations: "Organiza tus pestañas en espacios de trabajo",
  splitpages: "Aumenta tu productividad y navega en dos sitios a la vez, ¡en la misma ventana!",
  adblock: "Protege tu privacidad con nuestro bloqueador de publicidad integrado",
  chromextensions: "¡Totalmente compatible con extensiones Chrome!",
  sync: "Sincronízalo todo entre tus dispositivos",
  tor: "Navega privadamente en la red Tor",
}

export interface FeatureInterface {
  workstations: string,
  splitpages: string,
  adblock: string,
  chromextensions: string,
  sync: string,
  tor: string
}

export default Feature
