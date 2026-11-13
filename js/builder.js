function buildElement(tag, className, text = false) {
    const element = document.createElement(tag);
    element.classList.add(className);
    if(text !== false) { element.textContent = text; }

    return element;
}

export function buildMovieItem(movie) {
    // Créer le li général
    const li = buildElement("li", "movie");
    li.dataset.genre = movie.genre;
    li.addEventListener("mouseenter", () => {
        const hoverInfo = document.querySelector('#hover-info');
        hoverInfo.textContent = movie.genre
    })
    li.addEventListener("mouseleave", () => {
        const hoverInfo = document.querySelector('#hover-info');
        hoverInfo.textContent = "";
    })

    if(movie.watched) {
        li.classList.add("is-watched");
    }

    if(movie.genre === "Science-fiction") {
        li.classList.add("sci-fi")
    }

    // Créer le titre
    const title = buildElement("span", "movie-title", movie.title);
    title.addEventListener("click", () => {

        // Afficher l'élément barré dans le navigateur
        li.classList.toggle("is-watched");

        // Modifier le vu dans la liste
        movie.watched = !movie.watched

        // Rafraichir le compteur
        updateCounter(movies)

    })

    // Créer le genre
    const genre = buildElement("span", "movie-genre", movie.genre);

    // Bouton de suppression
    const button = buildElement("button", "delete", "Supprimer")
    button.addEventListener("click", () => {
        // Suppression de la <li>
        li.remove();

        // Suppression de l'élément dans la liste de film
        const index = movies.indexOf(movie)
        movies.splice(index, 1)

        // Rafraichit le compteur
        console.log(movies)
        updateCounter(movies)
    })

    // Assemble le li
    li.appendChild(title);
    li.appendChild(genre);
    li.appendChild(button);

    return li;
}