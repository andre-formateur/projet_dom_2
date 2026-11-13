import { buildMovieItem } from "./builder.js";

// Les constantes globales (éléments du DOM)
export const movieForm = document.querySelector("#movie-form");
export const searchInput = document.querySelector("#search-input");
export const genreFilter = document.querySelector("#genre-filter");

// Ajout d'un film dans la liste
export function createMovieElement(movie, onDeleteItem, onCheckItem) {

    const li = buildMovieItem(movie, onMouseEnterItem, onMouseLeaveItem, onDeleteItem, onCheckItem)

    // Mettre le li dans le ul
    document.querySelector("#movie-list").appendChild(li);

}

// Survol d'un film : affichage du genre
function onMouseEnterItem(genre) {
    const hoverInfo = document.querySelector('#hover-info');
    hoverInfo.textContent = genre
}

function onMouseLeaveItem() {
    const hoverInfo = document.querySelector('#hover-info');
    hoverInfo.textContent = "";
}

// Suppression de la <li>
export function removeMovieElement(li) {
    li.remove();
}

// Afficher l'élément barré dans le navigateur
export function toggleWatchedElement(li) {
    li.classList.toggle("is-watched");
}

// Affichage du compteur
export function renderCounter(movies) {
    const counter = document.querySelector("#counter");
    const watchedCount = movies
                        .filter(movie => movie.watched)
                        .length

    counter.textContent = `${movies.length} film(s), dont ${watchedCount} vu(s)`
}

// Récupérer les saisies des filtres
export function getFilterValues() {
    return {
        searchValue: searchInput.value,
        selectedGenre: genreFilter.value
    }
}

// Cacher les films qui n'ont pas le bon genre ET le bon titre
export function renderFilteredMovies(filteredMovies) {
    const movieItems = document.querySelectorAll("#movie-list li");

    movieItems.forEach(li => {
        li.classList.add("is-hidden");
        if(filteredMovies.find(movie => movie.title === li.firstElementChild.textContent)) {
            li.classList.remove("is-hidden")
        }
    })
}

// Récupérer les champs du formulaire
export function getFormValues() {
    const titleInput = document.querySelector("#title-input");
    const genreSelect = document.querySelector("#genre-select");

    return {
        title: titleInput.value,
        genre: genreSelect.value
    }
}

// Vider le champ titre
export function resetForm() {
    const titleInput = document.querySelector("#title-input");
    titleInput.value = "";
}