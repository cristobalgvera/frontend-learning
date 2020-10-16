
// MODELO DE DATOS

let mis_peliculas_iniciales = [
    { titulo: "Superlópez", director: "Javier Ruiz Caldera", "miniatura": "files/superlopez.png" },
    { titulo: "Jurassic Park", director: "Steven Spielberg", "miniatura": "files/jurassicpark.png" },
    { titulo: "Interstellar", director: "Christopher Nolan", "miniatura": "files/interstellar.png" }
];

localStorage.mis_peliculas = localStorage.mis_peliculas || JSON.stringify(mis_peliculas_iniciales);

// VISTAS
const indexView = (peliculas) => {
    let i = 0;
    let view = "";

    while (i < peliculas.length) {
        view += `
                <div class="movie">
                   <div class="movie-img">
                        <img data-my-id="${i}" class="show" src="${peliculas[i].miniatura}" onerror="this.src='files/placeholder.png'"/>
                   </div>
                   <div class="title">
                       ${peliculas[i].titulo || "<em>Sin título</em>"}
                   </div>
                   <div class="actions">
                        <button class="show" data-my-id="${i}">Ver</button>
                        <button class="edit" data-my-id="${i}">Editar</button>
                        <button class="delete" data-my-id="${i}">Borrar</button>
                    </div>
                </div>\n`;
        i = i + 1;
    };

    view += `
    <div class="actions">
        <button class="new">Añadir</button>
        <button class="reset">Reset</button>
    </div>
    `;

    return view;
};

const editView = (i, pelicula) => {
    return `
            <h2>Editar Película </h2>
            <div class="field">
                Título <br>
                <input  type="text" id="titulo" placeholder="Título" value="${pelicula.titulo}">
            </div>
            <div class="field">
                Director <br>
                <input  type="text" id="director" placeholder="Director" value="${pelicula.director}">
            </div>
            <div class="field">
                Miniatura <br>
                <input  type="text" id="miniatura" placeholder="URL de la miniatura" value="${pelicula.miniatura}">
            </div>
            <div class="actions">
                <button class="update" data-my-id="${i}">Actualizar</button>
                <button class="index">Volver</button>
                <button class="delete" data-my-id="${i}">Borrar</button>
            </div>
            `;
}

const showView = (pelicula, i) => {

    return `
            <img src="${pelicula.miniatura}" onerror="this.src='files/placeholder.png'"/>
            <p>
                La película <b> ${pelicula.titulo}</b>, fue
                dirigida por <b> ${pelicula.director}</b>.
            </p>
            <div class="actions">
                <button class="edit" data-my-id=${i}>Editar</button>
                <button class="index">Volver</button>
            </div>
            `;
}

const newView = () => {

    return `
            <h2>Crear Película</h2>
            <div class="field">
            Título <br>
            <input  type="text" id="titulo" placeholder="Título">
            </div>
            <div class="field">
            Director <br>
            <input  type="text" id="director" placeholder="Director">
            </div>
            <div class="field">
            Miniatura <br>
            <input  type="text" id="miniatura" placeholder="URL de la miniatura">
            </div>
            <div class="actions">
                <button class="create">Crear</button>
                <button class="index">Volver</button>
            </div>
            `;
}


// CONTROLADORES 
const indexContr = () => {
    let mis_peliculas = JSON.parse(localStorage.mis_peliculas);
    document.getElementById('main').innerHTML = indexView(mis_peliculas);
};

const showContr = (i) => {
    let peliculas = JSON.parse(localStorage.mis_peliculas);
    document.getElementById('main').innerHTML = showView(peliculas[i], i);
};

const newContr = () => {
    document.getElementById("main").innerHTML = newView();
};

const createContr = () => {
    let peliculas = JSON.parse(localStorage.mis_peliculas);
    let pelicula = {};
    pelicula.titulo = document.getElementById('titulo').value;
    pelicula.director = document.getElementById('director').value;
    pelicula.miniatura = document.getElementById('miniatura').value;
    peliculas.push(pelicula);
    localStorage.mis_peliculas = JSON.stringify(peliculas);
    indexContr();
};

const editContr = (i) => {
    let pelicula = JSON.parse(localStorage.mis_peliculas)[i];
    document.getElementById('main').innerHTML = editView(i, pelicula);
};

const updateContr = (i) => {
    let mis_peliculas = JSON.parse(localStorage.mis_peliculas);
    mis_peliculas[i].titulo = document.getElementById('titulo').value;
    mis_peliculas[i].director = document.getElementById('director').value;
    mis_peliculas[i].miniatura = document.getElementById('miniatura').value;
    localStorage.mis_peliculas = JSON.stringify(mis_peliculas);
    indexContr();
};

const deleteContr = (i) => {
    let peliculas = JSON.parse(localStorage.mis_peliculas);

    if (confirm(`¿Eliminar ${peliculas[i].titulo}?`)) {
        peliculas.splice(i, 1);
        localStorage.mis_peliculas = JSON.stringify(peliculas);
        indexContr();
    }
};

const resetContr = () => {
    // Completar:  controlador que reinicia el modelo guardado en localStorage con las películas originales
    localStorage.mis_peliculas = JSON.stringify(mis_peliculas_iniciales);
    indexContr();
};

// ROUTER de eventos
const matchEvent = (ev, sel) => ev.target.matches(sel);
const myId = (ev) => Number(ev.target.dataset.myId);

document.addEventListener('click', ev => {
    if (matchEvent(ev, '.index')) indexContr();
    else if (matchEvent(ev, '.edit')) editContr(myId(ev));
    else if (matchEvent(ev, '.update')) updateContr(myId(ev));
    // Completar añadiendo los controladores que faltan
    else if (matchEvent(ev, '.show')) showContr(myId(ev));
    else if (matchEvent(ev, '.new')) newContr();
    else if (matchEvent(ev, '.create')) createContr();
    else if (matchEvent(ev, '.delete')) deleteContr(myId(ev));
    else if (matchEvent(ev, '.reset')) resetContr();
})


// Inicialización        
document.addEventListener('DOMContentLoaded', indexContr);