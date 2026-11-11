# Projet DOM, partie 2 : Ma liste de films

Vous reprenez votre projet de la partie 1 et vous le rendez interactif : ajout de films, marquage « vu », recherche et filtre par genre.

Gardez les mêmes fichiers (`index.html`, `style.css`, `script.js`). Le HTML et le CSS ne changent pas : vous n'écrivez que du JavaScript.

**Point de départ :** Le code de ce dépot.

---

# Résultat attendu


## 1. Ajouter un film

- Le formulaire (titre + genre) ajoute un nouveau film **à la fin de la liste**, avec son titre, son genre et son bouton « Supprimer ». Un film ajouté n'est **pas vu**.
- La page **ne se recharge pas**.
- Le formulaire fonctionne aussi avec la touche **Entrée**.
- Après l'ajout, le champ titre est **vidé** et le curseur y revient.
- Un titre vide, ou composé uniquement d'espaces, n'ajoute **rien**.
- Le compteur est mis à jour.

## 2. Marquer un film comme vu

- Un clic sur le **titre** d'un film le marque comme vu (il est barré). Un second clic annule le marquage.
- Le compteur est mis à jour à chaque clic.

## 3. Le genre dans le HTML

- Chaque film porte son genre dans un attribut `data-genre` (à vérifier dans l'onglet **Éléments** des outils de développement), y compris les films ajoutés avec le formulaire.

## 4. Rechercher un film

- Le champ de recherche filtre la liste **en direct**, pendant la frappe.
- La recherche porte sur le titre, **sans tenir compte des majuscules** ni des espaces autour du texte.
- Les films qui ne correspondent pas sont **masqués** (avec la classe CSS `cache` déjà fournie), pas supprimés.
- Quand le champ est vidé, tous les films réapparaissent.

## 5. Filtrer par genre

- La liste déroulante du filtre n'affiche que les films du genre choisi. L'option « Tous les genres » les affiche tous.

## 6. Les deux filtres ensemble

- La recherche et le genre fonctionnent **en même temps** : un film n'est affiché que s'il respecte les deux.
- Un film ajouté avec le formulaire **respecte les filtres en cours**.
- Le compteur continue de compter **tous** les films, y compris les films masqués.

Exemple avec les 5 films de départ :

| Recherche | Genre | Films affichés |
|-----------|-------|----------------|
| *(vide)* | Tous les genres | les 5 films |
| `in` | Tous les genres | Inception, Intouchables |
| `in` | Science-fiction | Inception |
| `IN` | Science-fiction | Inception |
| *(vide)* | Science-fiction | Matrix, Inception |

## Bonus ⭐

- Au **survol** d'un film, le paragraphe `#info` affiche `Genre : Animation` (avec le genre du film survolé). Quand la souris quitte le film, le message disparaît.

---

# Vérifiez votre travail

- [ ] Ajouter un film avec le formulaire l'affiche, sans recharger la page
- [ ] La touche Entrée valide aussi le formulaire
- [ ] Un titre vide ou composé d'espaces n'ajoute rien
- [ ] Cliquer sur un titre le barre (ou le débarre) et met le compteur à jour
- [ ] Chaque `<li>` a un attribut `data-genre`
- [ ] Taper dans la recherche masque les films qui ne correspondent pas, sans tenir compte des majuscules
- [ ] La liste déroulante filtre par genre
- [ ] Les deux filtres fonctionnent **ensemble**, y compris pour un film ajouté
- [ ] Échap vide la recherche
- [ ] Aucune erreur dans la console