function buildElement(tag, className, text = false) {
    const element = document.createElement(tag);
    element.classList.add(className);
    if(text !== false) { element.textContent = text; }

    return element;
}

export function buildMovieItem(movie, onMouseEnter, onMouseLeave, onDelete, onCheck) {
    // Créer le li général
    const li = buildElement("li", "movie");
    li.dataset.genre = movie.genre;
    if(movie.watched) { li.classList.add("is-watched"); }
    if(movie.genre === "Science-fiction") { li.classList.add("sci-fi"); }
    
    li.addEventListener("mouseenter", () => onMouseEnter(movie.genre))
    li.addEventListener("mouseleave", () => onMouseLeave())

    // Créer le titre
    const title = buildElement("span", "movie-title", movie.title);
    title.addEventListener("click", () => onCheck(li, movie))

    // Créer le genre
    const genre = buildElement("span", "movie-genre", movie.genre);

    // Bouton de suppression
    const button = buildElement("button", "delete", "Supprimer")
    button.addEventListener("click", () => onDelete(li, movie))

    // Assemble le li
    li.appendChild(title);
    li.appendChild(genre);
    li.appendChild(button);

    return li;
}