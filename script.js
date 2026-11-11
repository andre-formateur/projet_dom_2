const films = [
  { titre: "Matrix", genre: "Science-fiction", vu: true },
  { titre: "Le Voyage de Chihiro", genre: "Animation", vu: false },
  { titre: "Inception", genre: "Science-fiction", vu: false },
  { titre: "Intouchables", genre: "Comédie", vu: true },
  { titre: "Gladiator", genre: "Action", vu: false }
];

// Les constantes globals
const liste = document.querySelector("#liste");
const formulaire = document.querySelector("#formulaire");
const recherche = document.querySelector("#recherche");
const filtreSelect = document.querySelector("#filtre-genre");

// Au chargement de la page
films.forEach(film => creationElementDOM(film))
refreshCompteur(films)

// Les eventListeners
// Création d'un film
formulaire.addEventListener("submit", (event) => {
    // On bloque le comportement par défault du formulaire
    event.preventDefault();

    // Créer l'objet du film
    const titre = document.querySelector("#titre");
    const genre = document.querySelector("#genre");

    // Vérifie que titre n'est pas vide
    // S'il est vide, alors le résultat de la fonction sera true
    // Et donc il ne lancera pas le reste de la fonction
    if(!titre.value.trim()) {
        return;
    }

    const film = {
        titre: titre.value,
        genre: genre.value,
        vu: false
    }

    // Ajouter le films en BDD
    films.push(film);

    // Créer l'élément du DOM
    creationElementDOM(film);

    // Rafraichir le compteur
    refreshCompteur(films);

    titre.value = "";
})

// Filtrer les films par saisie
recherche.addEventListener("input", () => searchFilters())

// Filtrer les films par genre
filtreSelect.addEventListener("change", () => searchFilters())

// Nos functions
function creationElementDOM(film) {

    // Créer le li général
    const li = document.createElement("li");
    li.classList.add("film");
    li.dataset.genre = film.genre;
    li.addEventListener("mouseenter", () => {
        const info = document.querySelector('#info');
        info.textContent = film.genre
    })
    li.addEventListener("mouseleave", () => {
        const info = document.querySelector('#info');
        info.textContent = "";
    })
    
    if(film.vu) {
        li.classList.add("vu");
    }

    if(film.genre === "Science-fiction") {
        li.classList.add("sf")
    }

    // Créer le titre
    const titre = document.createElement("span");
    titre.classList.add("titre");
    titre.textContent = film.titre;
    titre.addEventListener("click", () => {
        
        // Afficher l'élément barré dans le navigateur
        li.classList.toggle("vu");

        // Modifier le vu dans la liste
        film.vu = !film.vu

        // Rafraichir le compteur
        refreshCompteur(films)

    })

    // Créer le genre
    const genre = document.createElement("span");
    genre.classList.add("genre");
    genre.textContent = film.genre;

    // Bouton de suppression
    const button = document.createElement("button");
    button.textContent = "Supprimer"
    button.addEventListener("click", () => {
        // Suppression de la <li>
        li.remove();

        // Suppression de l'élément dans la liste de film
        const key = films.indexOf(film)
        films.splice(key, 1)

        // Rafraichit le compteur
        console.log(films)
        refreshCompteur(films)
    })

    // Assemble le li
    li.appendChild(titre);
    li.appendChild(genre);
    li.appendChild(button);

    // Mettre le li dans le ul
    liste.appendChild(li);

}

function refreshCompteur(data) {
    // Créer le compteur
    const compteur = document.querySelector("#compteur");
    const viewFilm = data
                        .filter(film => film.vu)
                        .length

    compteur.textContent = `${data.length} film(s), dont ${viewFilm} vu(s)`
}

function searchFilters() {

    // Récupérer les saisies
    const saisie = recherche.value;
    const genre = filtreSelect.value;

    // Récupération des résultats
    const resultat = films.filter(film => {
        return (
            (film.titre.toLowerCase().includes(saisie.toLowerCase())) &&
            (film.genre === genre || genre === "tous")
        );
    })

    // Cacher les films qui n'ont pas le bon genre ET le bon titre
    const list = document.querySelectorAll("#liste li");

    list.forEach(li => {
        li.classList.add("cache");
        if(resultat.find(film => film.titre === li.firstElementChild.textContent)) {
            li.classList.remove("cache")
        }
    })

}