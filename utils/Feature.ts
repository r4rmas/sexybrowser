const Feature: FeatureInterface = {
  cloud: "Deje que una supercomputadora se encargue del trabajo pesado.",
  adblock: "Elimine la publicidad con nuestro bloqueador de publicidad integrado.",
  sync: "Sincronice todo entre tus dispositivos.",
  workstations: "Organice sus pestañas en espacios de trabajo.",
  splitpages: "Aumente su productividad y navegue en dos sitios a la vez, ¡en la misma ventana!",
  chromeextensions: "¡Totalmente compatible con extensiones Chrome!",
  tor: "Navegue privadamente en la red Tor.",
}

export interface FeatureInterface {
  cloud: string,
  workstations: string,
  splitpages: string,
  adblock: string,
  chromeextensions: string,
  sync: string,
  tor: string
}

export default Feature
