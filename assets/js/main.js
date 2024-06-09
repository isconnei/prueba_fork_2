const divPortafolio = document.getElementById("portafolio-content")

const projects = [
  {
    name: "Barroco",
    desc: "Este restaurante está ubicado en Santa Fé de Antioquia (Colombia), y requería un sitio web para dar a conocer el restaurante y el mismo pueblo.",
    image: "project-barroco.png",
    link: "https://pruebas.restaurantebarroco.com",
  },
  {
    name: "iPerio",
    desc: "Cuando los odontólogos evalúan un paciente y hacen un periodontograma, usualmente lo hacen en papel, y tienen que hacer todos los cálculos y los dibujos manualmente. Esta app trata de automatizar este proceso, liberándolos de esta tarea que consume tanto tiempo, para que puedan concentrarse en quien realmente importa: el paciente.",
    image: "project-iperio.png",
    link: "https://iperio-demo.albotero.com/",
  },
  {
    name: "Sigma",
    desc: "Actualmente, la mayoría de las soluciones de Historia Clínica se centran en asuntos administrativos y no en las necesidades de los pacientes y los profesionales de la salud, haciéndolas poco amigables de usar. Esta app fue desarrollada con especial énfasis en requerir la información clínicamente relevante para facilitar el ingreso de información al profesional.",
    image: "project-sigma.png",
    link: "https://sigma-demo.albotero.com/",
  },
  {
    name: "Acuatur",
    desc: "La asignación de turnos es una tarea que demanda mucho tiempo y debe realizarse cada mes en los servicios de salud, como es el caso del servicio de cirugía. Esta App maneja esa asignación y da un fácil acceso a las estadísticas de horas laboradas por empleado.",
    image: "project-acuatur.png",
    link: "https://acuatur-demo.albotero.com/",
  },
  {
    name: "Tablero",
    desc: "La mayoría de los Servicios de Cirugía carecen de una forma de dar información constante a los acompañantes de los pacientes que están en cirugía, requiriendo llamarlos personalmente. Esta app muestra el estado del paciente (con un código dado a los acompañantes por motivos de privacidad) para que ellos puedan saber en todo momento qué está sucediendo.",
    image: "project-tablero.png",
    link: "https://tablero-demo.albotero.com/",
  },
]

divPortafolio.innerHTML = projects
  .map(
    ({ name, desc, image, link }) => `
    <div class="col-12 col-md-5 gy-5 gx-0">
      <div class="card hover mx-0 bg-body-secondary gx-0 mx-md-3">
        <img src="./assets/img/${image}" alt="${name}" class="card-img-top" /></p>
        <div class="card-body">
          <h4 class="card-title">${name}</h4>
          <p class="card-text">${desc}</p>
          <a class="btn btn-outline-warning float-end" href="${link}" target="_blank">Ir al sitio</a>
        </div>
      </div>
    </div>`
  )
  .join("")
