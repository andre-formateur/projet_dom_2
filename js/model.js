import movies from "../data.json" with {type: "json"}

export function getAllMovies() {
    return movies;
}

export function checkMovie(movie) {
    movie.watched = !movie.watched
}

export function setMovie(movie) {
    movies.push(movie);
}

export function filterMovies(searchValue, selectedGenre) {

    const filteredMovies = movies.filter(movie => {
        return (
            (movie.title.toLowerCase().includes(searchValue.toLowerCase())) &&
            (movie.genre === selectedGenre || selectedGenre === "tous")
        );
    })

    return filteredMovies; 
}

export function deleteMovie(movie) {
    const index = movies.indexOf(movie)
    movies.splice(index, 1)
}