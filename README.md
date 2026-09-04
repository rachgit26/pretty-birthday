# Pretty Birthday — Ghizlane 🎂

Une carte d’anniversaire interactive, pensée pour être ouverte facilement sur téléphone. Elle contient une question avec un bouton « No » qui s’échappe, un mini-jeu pour attraper des étoiles et une animation de confettis finale.

Le site est publié avec GitHub Pages : <https://rachgit26.github.io/pretty-birthday/>

## Fichiers du projet

| Fichier | Rôle |
| --- | --- |
| `index.html` | Contenu, textes et structure de la carte. |
| `style.css` | Style visuel et adaptation mobile. |
| `script.js` | Jeux, bouton mobile et confettis. |
| `.github/workflows/deploy-pages.yml` | Publication automatique sur GitHub Pages. |

## Lancer le projet sur le Mac

Dans Terminal, place-toi dans le dossier du projet puis lance un serveur local :

```bash
cd /Users/rachidihssan/Desktop/pretty-birthday
python3 -m http.server 8080
```

Ouvre ensuite <http://localhost:8080/> dans le navigateur.

Pour arrêter le serveur, retourne dans le Terminal et appuie sur `Ctrl` + `C`.

## Personnaliser la carte

Pour changer le prénom ou le message, ouvre `index.html` et modifie les textes visibles, par exemple :

```html
<em>Ghizlane</em>
```

Tu peux aussi modifier le message final dans le paragraphe avec `class="message"`.

## Publier les modifications

Après chaque modification, exécute ces commandes dans Terminal :

```bash
cd /Users/rachidihssan/Desktop/pretty-birthday
git add .
git commit -m "Describe your change here"
git push
```

GitHub Actions republiera automatiquement le site. Attends une minute, puis recharge :

<https://rachgit26.github.io/pretty-birthday/>

## Première installation réalisée

Le dépôt GitHub a été créé à l’adresse suivante :

<https://github.com/rachgit26/pretty-birthday>

Les fichiers ont été envoyés avec :

```bash
git init
git add index.html style.css script.js
git commit -m "Add birthday surprise"
git branch -M main
git remote add origin https://github.com/rachgit26/pretty-birthday.git
git push -u origin main
```

Le workflow GitHub Pages a ensuite été ajouté afin de déployer le site automatiquement après chaque `git push`.
