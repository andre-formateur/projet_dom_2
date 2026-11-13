import { getAllMovies, checkMovie, setMovie, deleteMovie, filterMovies } from "./model.js";
import { movieForm, searchInput, genreFilter, createMovieElement, removeMovieElement, toggleWatchedElement, renderCounter, getFilterValues, renderFilteredMovies, getFormValues, resetForm } from "./view.js";

// Function
function onPageLoad() {
    const movies = getAllMovies();
    movies.forEach(movie => createMovieElement(movie, onDeleteItem, onCheckItem))
    updateCounter(movies)
}

function onDeleteItem(li, movie) {
    // Suppression de la <li>
    removeMovieElement(li);

    // Suppression de l'élément dans la liste de film
    deleteMovie(movie)

    // Rafraichit le compteur
    updateCounter()
}

function onCheckItem(li, movie) {

    // Afficher l'élément barré dans le navigateur
    toggleWatchedElement(li);

    // Modifier le vu dans la liste
    checkMovie(movie);

    // Rafraichir le compteur
    updateCounter()

}

function updateCounter() {
    // Créer le compteur
    const movies = getAllMovies();

    renderCounter(movies);
}

function applyFilters() {

    // Récupérer les saisies
    const { searchValue, selectedGenre } = getFilterValues();

    // Récupération des résultats
    const filteredMovies = filterMovies(searchValue, selectedGenre)

    // Cacher les films qui n'ont pas le bon genre ET le bon titre
    renderFilteredMovies(filteredMovies);

}

onPageLoad();

// Les eventListeners
// Création d'un film
movieForm.addEventListener("submit", (event) => {
    // On bloque le comportement par défault du formulaire
    event.preventDefault();

    // Créer l'objet du film
    const { title, genre } = getFormValues();

    if(!title.trim()) {
        return;
    }

    const movie = {
        title: title,
        genre: genre,
        watched: false
    }

    // Ajouter le films en BDD
    setMovie(movie)

    // Créer l'élément du DOM
    createMovieElement(movie, onDeleteItem, onCheckItem);

    // Rafraichir le compteur
    updateCounter();

    resetForm();
})

// Filtrer les films par saisie
searchInput.addEventListener("input", () => applyFilters())

// Filtrer les films par genre
genreFilter.addEventListener("change", () => applyFilters())