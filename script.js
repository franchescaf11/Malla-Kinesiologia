const malla = {
  "1° semestre": [
    { nombre: "Bases Integradas de Química, Bioquímica, Biología Celular y Genética", id: "bioquimica" },
    { nombre: "Anatomía estructural y funcional I", id: "anato1" },
    { nombre: "Estructura y Función Tisular", id: "tisular" },
    { nombre: "Física", id: "fisica" },
    { nombre: "Estrategias de Búsqueda Bibliográfica", id: "busqueda" },
    { nombre: "Introducción a la Kinesiología", id: "introKine" }
  ],
  "2° semestre": [
    { nombre: "Anatomía estructural y funcional II", id: "anato2", prerreq: ["anato1"] },
    { nombre: "Fisiología General", id: "fisioGeneral", prerreq: ["bioquimica", "fisica"] },
    { nombre: "Neuroanatomía", id: "neuroanato" },
    { nombre: "Biomecánica, Lesión y Reparación Tisular", id: "biomecanica", prerreq: ["tisular"] },
    { nombre: "Introducción al estudio del Movimiento Humano", id: "movimiento" },
    { nombre: "Principios de Evolución", id: "evolucion" },
    { nombre: "Lectura Comprensiva de Artículos Científicos", id: "lecturaComprensiva" }
  ],
  "3° semestre": [
    { nombre: "Fisiología de Sistemas", id: "fisioSistemas", prerreq: ["fisioGeneral"] },
    { nombre: "Bases Integradas de Infectología, Inmunología y Farmacología General", id: "inmunofarma", prerreq: ["neuroanato", "fisioGeneral"] },
    { nombre: "Examen Kinésico Básico", id: "examenKinesico", prerreq: ["anato1", "anato2"] },
    { nombre: "Control y Aprendizaje Motor", id: "controlMotor" },
    { nombre: "Fundamentos de la Investigación Científica", id: "fundamentosInvestigacion" },
    { nombre: "Educación Física I", id: "educFisica1" }
  ],
  "4° semestre": [
    { nombre: "Fisiopatología y Farmacología de Sistemas", id: "fisiofarma", prerreq: ["fisioSistemas", "inmunofarma"] },
    { nombre: "Examen de la Condición Física y la Conducta Motora", id: "examenFisicaConducta" },
    { nombre: "Procedimientos Terapéuticos Básicos y Generales", id: "procedimientos", prerreq: ["movimiento", "examenKinesico"] },
    { nombre: "Kinesiología del Desarrollo Psicomotor", id: "desarrolloPsicomotor" },
    { nombre: "Lectura Crítica de Artículos Científicos", id: "lecturaCritica" },
    { nombre: "Análisis Epidemiológico", id: "epidemiologia" }
  ],
  "5° semestre": [
    { nombre: "Efectos de la actividad Física en la salud", id: "efectosFisica", prerreq: ["examenFisicaConducta", "fisiofarma"] },
    { nombre: "Evaluación e Intervención en la Neurokinesiología I", id: "neurokine1", prerreq: ["desarrolloPsicomotor"] },
    { nombre: "Evaluación e Intervención en Cuidados Respiratorios I", id: "respiratorio1", prerreq: ["examenFisicaConducta"] },
    { nombre: "Evaluación e Intervención en Musculoesquelético I", id: "musculoesqueletico1", prerreq: ["procedimientos"] },
    { nombre: "Revisión Bibliográfica", id: "revisionBiblio" },
    { nombre: "Análisis del Modelo de Salud Chileno", id: "modeloSalud" },
    { nombre: "Modulo Integrado Interdisciplinario y Multiprofesional I", id: "modulo1" },
    { nombre: "Educación Física II", id: "educFisica2", prerreq: ["educFisica1"] },
    { nombre: "Inglés IV", id: "ingles4" }
  ],
  "6° semestre": [
    { nombre: "Evaluación e Intervención en la Neurokinesiología II", id: "neurokine2", prerreq: ["neurokine1"] },
    { nombre: "Evaluación e Intervención en Cuidados Respiratorios II", id: "respiratorio2", prerreq: ["respiratorio1"] },
    { nombre: "Evaluación e Intervención en Musculoesquelético II", id: "musculoesqueletico2", prerreq: ["musculoesqueletico1"] },
    { nombre: "Razonamiento Clínico", id: "razonamiento", prerreq: ["respiratorio1", "musculoesqueletico1", "neurokine1"] },
    { nombre: "Diseño y Formulación de Proyectos de Investigación", id: "disenoInvestigacion" },
    { nombre: "Responsabilidad del Ejercicio Profesional", id: "responsabilidad" },
    { nombre: "Actividad Física y Deportes", id: "actividadFisica", prerreq: ["educFisica1", "efectosFisica"] }
  ],
  "7° semestre": [
    { nombre: "Intervención Profesional en Contexto I", id: "contexto1", prerreq: ["efectosFisica", "respiratorio2", "musculoesqueletico2", "neurokine2"] },
    { nombre: "Estrategias Deportivas y Recreativas", id: "estrategias", prerreq: ["actividadFisica"] },
    { nombre: "Análisis de la Relación Persona Entorno", id: "personaEntorno", prerreq: ["respiratorio2", "musculoesqueletico2", "neurokine2"] },
    { nombre: "Determinantes Sociales de la Salud", id: "determinantes" },
    { nombre: "Ejecución de Proyectos de Investigación I", id: "ejecucion1" },
    { nombre: "Conceptos Básicos de Administración en Salud", id: "adminSalud1" },
    { nombre: "Metodologías de Enseñanza Aprendizaje", id: "metodologias" }
  ],
  "8° semestre": [
    { nombre: "Intervención Profesional en Contexto II", id: "contexto2", prerreq: ["respiratorio2", "musculoesqueletico2", "neurokine2"] },
    { nombre: "Estrategias Deportivas y Recreativas Aplicadas", id: "estrategiasAplicadas", prerreq: ["estrategias"] },
    { nombre: "Evaluación Ergonómica", id: "ergonomia", prerreq: ["personaEntorno"] },
    { nombre: "Programas de Promoción y Prevención en Salud", id: "promocion" },
    { nombre: "Ejecución de Proyectos de Investigación II", id: "ejecucion2" },
    { nombre: "Proyectos de Emprendimientos", id: "emprendimientos" },
    { nombre: "Aplicación Básica de Metodologías Docentes", id: "aplicacionMetodologias" },
    { nombre: "Modulo Integrado Interdisciplinario y Multiprofesional II", id: "modulo2" }
  ],
  "5° año (anual)": [
    { nombre: "Intervención Profesional I", id: "intervencion1", prerreq: ["contexto2"] },
    { nombre: "Intervención Profesional II", id: "intervencion2", prerreq: ["intervencion1"] },
    { nombre: "Proyectos de Intervención Ergonómica", id: "proyectoErgo", prerreq: ["ergonomia"] },
    { nombre: "Intervención en Salud Comunitaria", id: "saludComunitaria" },
    { nombre: "Cursos de Profundización Disciplinar y Profesional", id: "profundizacion", prerreq: ["contexto1", "contexto2"] },
    { nombre: "Comunicación Científica", id: "comunicacion" },
    { nombre: "Administración en Salud", id: "adminSalud2" }
  ]
};

const estado = JSON.parse(localStorage.getItem("estadoMalla")) || {};

function guardarEstado() {
  localStorage.setItem("estadoMalla", JSON.stringify(estado));
}

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  Object.entries(malla).forEach(([semestre, ramos]) => {
    const columna = document.createElement("div");
    columna.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;

      const aprobado = estado[ramo.id];
      const prerreqCumplidos = (ramo.prerreq || []).every(id => estado[id]);

      if (aprobado) {
        div.classList.add("aprobado");
      } else if (!prerreqCumplidos && ramo.prerreq) {
        div.classList.add("bloqueado");
      }

      div.addEventListener("click", () => {
        if (div.classList.contains("bloqueado")) return;

        estado[ramo.id] = !estado[ramo.id];
        guardarEstado();
        crearMalla();
      });

      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  });
}

crearMalla();

