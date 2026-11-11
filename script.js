const films = [
  { titre: "Matrix", genre: "Science-fiction", vu: true },
  { titre: "Le Voyage de Chihiro", genre: "Animation", vu: false },
  { titre: "Inception", genre: "Science-fiction", vu: false },
  { titre: "Intouchables", genre: "Comédie", vu: true },
  { titre: "Gladiator", genre: "Action", vu: false }
];

const liste = document.querySelector("#liste");

// Création d'un élément
films.forEach(film => {

    // Créer le li général
    const li = document.createElement("li");
    li.classList.add("film");
    
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

})

function refreshCompteur(data) {
    // Créer le compteur
    const compteur = document.querySelector("#compteur");
    const viewFilm = data
                        .filter(film => film.vu)
                        .length

    compteur.textContent = `${data.length} film(s), dont ${viewFilm} vu(s)`
}

refreshCompteur(films)