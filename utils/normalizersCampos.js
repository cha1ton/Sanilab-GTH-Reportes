// utils/normalizersCampos.js

// Normalización de Áreas
const areasMap = {
  "ambiente": "Ambiente",
  "medio ambiente": "Ambiente",
  "gestion ambiental": "Ambiente",
  "ambiental": "Ambiente",
  
  "proyectos": "Proyectos",
  "gestion de proyectos": "Proyectos",
  "project": "Proyectos",
  
  "talento humano": "Talento Humano",
  "gestion de talento humano": "Talento Humano",
  "rrhh": "Talento Humano",
  "recursos humanos": "Talento Humano",
  
  "marketing": "Marketing",
  "marketing y publicidad": "Marketing",
  "publicidad": "Marketing",
  
  "salud": "Salud",
  "salud ocupacional": "Salud",
  
  "infraestructura": "Infraestructura",
  "construccion": "Infraestructura",
  
  "otro": "Otros",
  "otros": "Otros",
};

// Normalización de Carreras
const carrerasMap = {
  "ingeniería ambiental": "Ingeniería Ambiental",
  "ingenieria ambiental": "Ingeniería Ambiental",
  "ing. ambiental": "Ingeniería Ambiental",
  "ambiental": "Ingeniería Ambiental",
  
  "ingeniería industrial": "Ingeniería Industrial",
  "ingenieria industrial": "Ingeniería Industrial",
  "ing. industrial": "Ingeniería Industrial",
  
  "ingeniería química": "Ingeniería Química",
  "ingenieria quimica": "Ingeniería Química",
  "ing. quimica": "Ingeniería Química",
  
  "administración": "Administración",
  "administracion": "Administración",
  "administración industrial": "Administración Industrial",
  "administracion industrial": "Administración Industrial",
  
  "arquitectura": "Arquitectura",
  "arquitecto": "Arquitectura",
  
  "biología": "Biología",
  "biologia": "Biología",
  
  "psicología": "Psicología",
  "psicologia": "Psicología",
  
  "derecho": "Derecho",
  "antropología": "Antropología",
  "antropologia": "Antropología",
  "desarrollo de software": "Desarrollo de Software",
  "software": "Desarrollo de Software",
};

// NUEVA: Normalización de Fuentes de Captación
const fuentesMap = {
  "linkedin": "LinkedIn",
  "linked in": "LinkedIn",
  
  "whatsapp": "WhatsApp",
  "whats app": "WhatsApp",
  "wp": "WhatsApp",
  
  "facebook": "Facebook",
  "fb": "Facebook",
  
  "redes sociales": "Redes sociales",
  "red social": "Redes sociales",
  "instagram": "Redes sociales",
  "ig": "Redes sociales",
  "twitter": "Redes sociales",
  "tiktok": "Redes sociales",
  
  "feria laboral": "Feria laboral",
  "feria de empleo": "Feria laboral",
  "feria": "Feria laboral",
  
  "recomendación personal": "Recomendación personal",
  "recomendacion personal": "Recomendación personal",
  "amigo": "Recomendación personal",
  "familiar": "Recomendación personal",
  "referido": "Recomendación personal",
  "referencia": "Recomendación personal",
  
  "evento": "Evento / networking",
  "networking": "Evento / networking",
  "evento networking": "Evento / networking",
  "conferencia": "Evento / networking",
  
  "organización": "Organización / institución",
  "organizacion": "Organización / institución",
  "institución": "Organización / institución",
  "institucion": "Organización / institución",
  "universidad": "Organización / institución",
  
  "programa": "Programa / convocatoria académica",
  "convocatoria": "Programa / convocatoria académica",
  "académica": "Programa / convocatoria académica",
  "academica": "Programa / convocatoria académica",
  "beca": "Programa / convocatoria académica",
  
  "publicidad": "Publicidad / anuncio",
  "anuncio": "Publicidad / anuncio",
  "google": "Publicidad / anuncio",
  "anuncio google": "Publicidad / anuncio",
};

export function normalizarArea(area = "") {
  if (!area || area === "No especificado") return "No especificado";
  
  const areaLower = area.toLowerCase().trim();
  
  for (const [key, value] of Object.entries(areasMap)) {
    if (areaLower.includes(key)) {
      return value;
    }
  }
  
  return area.trim();
}

export function normalizarCarrera(carrera = "") {
  if (!carrera || carrera === "No especificado") return "No especificado";
  
  const carreraLower = carrera.toLowerCase().trim();
  
  for (const [key, value] of Object.entries(carrerasMap)) {
    if (carreraLower.includes(key)) {
      return value;
    }
  }
  
  return carrera.trim();
}

// NUEVA FUNCIÓN
export function normalizarFuenteCaptacion(fuente = "") {
  if (!fuente || fuente === "No especificado" || fuente.trim() === "") {
    return "No hubo respuesta";
  }
  
  const fuenteLower = fuente.toLowerCase().trim();
  
  for (const [key, value] of Object.entries(fuentesMap)) {
    if (fuenteLower.includes(key)) {
      return value;
    }
  }
  
  // Si no coincide con nada, devolver "Otros"
  return "Otros";
}