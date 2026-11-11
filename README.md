# Projet DOM, partie 1 : Ma liste de films

Vous construisez une petite application web de liste de films. Dans cette première partie, vous affichez une liste à partir d'un tableau et vous pouvez supprimer des films. Vous la ferez évoluer dans le cours suivant

Vous n'écrivez que le **JavaScript** : le HTML et le CSS vous sont fournis et ne doivent pas être modifiés.

💡 Le HTML contient déjà un formulaire, un champ de recherche et une liste de genres : **ignorez-les pour l'instant**, ils serviront pour le prochain cours.

## Résultat attendu

- **Affichage de la liste** : les films du tableau films sont affichés dans la page, sans qu’aucun film ne soit écrit à la main dans le HTML. Ajouter un film dans le tableau suffit à le faire apparaître.
- **Contenu d’un film** : chaque film affiche son titre, son genre et un bouton « Supprimer ».
- **Films déjà vus** : ils sont visuellement barrés.
- **Compteur** : un texte indique le nombre de films et le nombre de films vus, par exemple 5 film(s), dont 2 vu(s).
- **Suppression** : un clic sur « Supprimer » retire uniquement le film concerné de la page.
- **Compteur à jour** : après chaque suppression, le compteur reflète l’état réel de la liste.

### Au chargement

- La liste affiche **les 5 films du tableau `films`**. Ils sont **créés par JavaScript** : vous n'ajoutez aucun film à la main dans le HTML.
- Chaque film est affiché avec, dans cet ordre : son **titre**, son **genre** et un bouton **Supprimer**.
- Les films déjà vus (`vu: true`) sont **barrés** : Matrix et Intouchables.
- Le paragraphe du compteur affiche exactement : `5 film(s), dont 2 vu(s)`.

Aperçu du résultat :

```
5 film(s), dont 2 vu(s)

Matrix (barré)            Science-fiction   [Supprimer]
Le Voyage de Chihiro      Animation         [Supprimer]
Inception                 Science-fiction   [Supprimer]
Intouchables (barré)      Comédie           [Supprimer]
Gladiator                 Action            [Supprimer]
```

### Au clic sur « Supprimer »

- Le film concerné **disparaît** de la page, et seulement lui.
- Le film doit disparaitre également de la liste.
- Le compteur est **mis à jour**.
  - Exemple : après avoir supprimé Matrix, il affiche `4 film(s), dont 1 vu(s)`.
  - Exemple : après avoir supprimé ensuite Gladiator, il affiche `3 film(s), dont 1 vu(s)`.

### Contraintes pour que le CSS fourni s'applique

- Chaque film est un `<li>` avec la classe `film`.
- Le titre est dans un `<span>` avec la classe `titre`, le genre dans un `<span>` avec la classe `genre`.
- Un film vu a, en plus, la classe `vu` sur son `<li>`.

### Test de robustesse

Votre code doit fonctionner avec **n'importe quel contenu du tableau** : si vous ajoutez un sixième film dans `films`, il doit apparaître dans la liste, avec son bouton, et le compteur doit afficher `6 film(s)…`.

### Bonus ⭐

Les films de genre `Science-fiction` ont une **bordure gauche violette** (`#6c5ce7`). Ce style doit être géré avec une **classe CSS** (écrite dans `style.css`) ajoutée avec `classList`, et non avec la propriété `style`.

---

### Vérifiez votre travail

- [ ] Les 5 films s'affichent au chargement, avec leur titre, leur genre et un bouton
- [ ] Les films déjà vus sont barrés
- [ ] Le compteur affiche `5 film(s), dont 2 vu(s)`
- [ ] Supprimer un film le retire de la liste et met le compteur à jour
- [ ] Un film ajouté dans le tableau apparaît dans la liste
- [ ] Aucune erreur dans la console
