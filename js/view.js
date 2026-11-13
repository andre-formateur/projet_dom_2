import { buildMovieItem } from "./builder.js";

const movies = [
  { title: "Matrix", genre: "Science-fiction", watched: true },
  { title: "Le Voyage de Chihiro", genre: "Animation", watched: false },
  { title: "Inception", genre: "Science-fiction", watched: false },
  { title: "Intouchables", genre: "Comédie", watched: true },
  { title: "Gladiator", genre: "Action", watched: false }
];

// Les constantes globals
const movieList = document.querySelector("#movie-list");
const movieForm = document.querySelector("#movie-form");
const searchInput = document.querySelector("#search-input");
const genreFilter = document.querySelector("#genre-filter");

// Au chargement de la page
movies.forEach(movie => createMovieElement(movie))
updateCounter(movies)

// Les eventListeners
// Création d'un film
movieForm.addEventListener("submit", (event) => {
    // On bloque le comportement par défault du formulaire
    event.preventDefault();

    // Créer l'objet du film
    const titleInput = document.querySelector("#title-input");
    const genreSelect = document.querySelector("#genre-select");

    // Vérifie que titre n'est pas vide
    // S'il est vide, alors le résultat de la fonction sera true
    // Et donc il ne lancera pas le reste de la fonction
    if(!titleInput.value.trim()) {
        return;
    }

    const movie = {
        title: titleInput.value,
        genre: genreSelect.value,
        watched: false
    }

    // Ajouter le films en BDD
    movies.push(movie);

    // Créer l'élément du DOM
    createMovieElement(movie);

    // Rafraichir le compteur
    updateCounter(movies);

    titleInput.value = "";
})

// Filtrer les films par saisie
searchInput.addEventListener("input", () => applyFilters())

// Filtrer les films par genre
genreFilter.addEventListener("change", () => applyFilters())

// Nos functions
function createMovieElement(movie) {

    const li = buildMovieItem(movie, onMouseEnterItem, onMouseLeaveItem, onDeleteItem, onCheckItem)

    // Mettre le li dans le ul
    movieList.appendChild(li);

}

function onMouseEnterItem(genre) {
    const hoverInfo = document.querySelector('#hover-info');
    hoverInfo.textContent = genre
}

function onMouseLeaveItem() {
    const hoverInfo = document.querySelector('#hover-info');
    hoverInfo.textContent = "";
}

function onDeleteItem(li, movie) {
    // Suppression de la <li>
    li.remove();

    // Suppression de l'élément dans la liste de film
    const index = movies.indexOf(movie)
    movies.splice(index, 1)

    // Rafraichit le compteur
    console.log(movies)
    updateCounter(movies)
}

function onCheckItem(li, movie) {

    // Afficher l'élément barré dans le navigateur
    li.classList.toggle("is-watched");

    // Modifier le vu dans la liste
    movie.watched = !movie.watched

    // Rafraichir le compteur
    updateCounter(movies)

}

function updateCounter(movies) {
    // Créer le compteur
    const counter = document.querySelector("#counter");
    const watchedCount = movies
                        .filter(movie => movie.watched)
                        .length

    counter.textContent = `${movies.length} film(s), dont ${watchedCount} vu(s)`
}

function applyFilters() {

    // Récupérer les saisies
    const searchValue = searchInput.value;
    const selectedGenre = genreFilter.value;

    // Récupération des résultats
    const filteredMovies = movies.filter(movie => {
        return (
            (movie.title.toLowerCase().includes(searchValue.toLowerCase())) &&
            (movie.genre === selectedGenre || selectedGenre === "tous")
        );
    })

    // Cacher les films qui n'ont pas le bon genre ET le bon titre
    const movieItems = document.querySelectorAll("#movie-list li");

    movieItems.forEach(li => {
        li.classList.add("is-hidden");
        if(filteredMovies.find(movie => movie.title === li.firstElementChild.textContent)) {
            li.classList.remove("is-hidden")
        }
    })

}