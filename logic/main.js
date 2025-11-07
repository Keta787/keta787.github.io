// === EQUIPO ===
const miembros = [
  { nombre: "Juan Pablo Ángel Quitián", apodo: "backend-dev", descripcion: "Desarrollador backend enfocado en la lógica del sistema y gestión de base de datos.", imagen: "../style/img/logo.jpg" },
  { nombre: "Joel Sebastián Bueno Medina", apodo: "backend-dev", descripcion: "Desarrollador backend enfocado en la lógica del sistema y gestión de base de datos.", imagen: "../style/img/logo.jpg" },
  { nombre: "Johan Steven López Ordoñez", apodo: "frontend-dev", descripcion: "Diseñador y desarrollador frontend responsable de la interfaz web.", imagen: "../style/img/logo.jpg" },
  { nombre: "Juan Sebastián Rueda Ortiz", apodo: "frontend-dev", descripcion: "Diseñador y desarrollador frontend responsable de la interfaz web.", imagen: "../style/img/logo.jpg" },
  { nombre: "Jairo Esteban Salgado Tinoco", apodo: "Tech Writer", descripcion: "Responsable de la creación, organización y mantenimiento de la documentación del proyecto SGEMD.", imagen: "../style/img/logo.jpg" },
  { nombre: "Jhoan Pablo Bueno Tinoco", apodo: "cluster", descripcion: "cluster.", imagen: "../style/img/logo.jpg" },
  { nombre: "Esteban Morales", apodo: "scrum-master", descripcion: "Asesor area de programación y mentor académico del proyecto SGEMD.", imagen: "../style/img/logo.jpg" },
  { nombre: "Juan Carlos Gonzales", apodo: "asesor-docs", descripcion: "Asesor del área de documentación y mentor académico del proyecto SGEMD.", imagen: "../style/img/logo.jpg" }
];

// === BLOG ===
const posts = [
  { titulo: "Inicio del Proyecto SGEMD", contenido: "El equipo Quantum (ISUM) inició el desarrollo de una plataforma que optimizará la gestión de emprendimientos en UNIMINUTO." },
  { titulo: "Análisis de Requerimientos", contenido: "Se realizaron entrevistas y levantamiento de información con asesores y estudiantes de Centro Progresa." },
  { titulo: "Diseño y Arquitectura", contenido: "Se definieron los modelos de datos y la estructura técnica de la plataforma web." },
  { titulo: "Próximos Pasos", contenido: "Avanzamos hacia la fase de desarrollo del prototipo funcional según los requerimientos validados." }
];

// === RENDER EQUIPO ===
const contenedor = document.getElementById('perfiles');
miembros.forEach(m => {
  contenedor.innerHTML += `
    <div class="contenido">
      <figure class="imagenPerfil"><img src="../style/img/perfil.jpg" /></figure>
      <article class="descripcionPerfil">
        <h3>${m.nombre} (${m.apodo})</h3>
        <p>${m.descripcion}</p>
      </article>
    </div>
  `;
});

// === RENDER BLOG ===
const postContainer = document.getElementById('posts');
posts.forEach(p => {
  postContainer.innerHTML += `
    <div class="post">
      <img src="../style/img/l.png" alt="Blog Post" />
      <h3>${p.titulo}</h3>
      <p>${p.contenido}</p>
    </div>
  `;
});

// === CARRUSEL FUNCIONAL ===
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// índice actual y total de tarjetas
let currentIndex = 0;
const cards = document.querySelectorAll('.carousel .card');
const totalCards = cards.length;
const visibleCards = 3; // las que se muestran a la vez

function updateCarousel() {
  const offset = -(currentIndex * (100 / visibleCards));
  carousel.style.transform = `translateX(${offset}%)`;
}

// Botón siguiente
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
  } else {
    currentIndex = 0; // vuelve al inicio
  }
  updateCarousel();
});

// Botón anterior
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - visibleCards; // va al final
  }
  updateCarousel();
});
