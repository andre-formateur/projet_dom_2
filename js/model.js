import movies from "../data.json" with {type: "json"}

export function getAllMovies() {
    return movies;
}

export function checkMovie(movie) {
    movie.watched = !movie.watched
}

export function deleteMovie(movie) {
    const index = movies.indexOf(movie)
    movies.splice(index, 1)
}