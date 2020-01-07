# Odoo

## Technologies utilisées

Compilation du CSS et JS : Gulp.
Framework CSS : Bootstrap.

## Choix graphiques et décisions

Utilisation de typographique Montserrat.

```bash
Typographie de Odoo sur le site web officiel.
```

Paramètres techniques.

```bash
J'ai inclus le fichier JS de Bootstap pour faire fonctionner les menus dropdown de la page, j'ai travaillé par la suite avec Jquery car j'ai du l'initaliser pour faire fonctionner la dépendance JS de Boostrap. Jquery m'a permis développer plus vite les fonctionalités que j'avais besoin pour ce projet.
```

Mise en place de l'agenda

```bash
J'ai ajouté une boucle en JS qui me permet de venir créer les différentes cases du tableau (pour ne pas devoir les écrire directement dans le fichier HTML). J'ai ensuite crée statiquement les différents élements de l'agenda dans mon fichier JS.
```

Mise en place de la notification Plan exisiting

```bash
Un pop-up vient s'ouvrir lorsque l'on clique sur les barres dans l'agenda. Celui-ci est crée au momement ou l'on clique sur les différentes barres de l'agenda. Il vient se placer au dessus de l'endroit ou le click a eu lieu, avec un léger décallage sur la gauche ce qui permet a l'utilisateur de comprendre sur quelle barre il a cliqué. Deux actions sont possibles par l'utilisateur qui appellent 2 fonctions JS différentes. Cancel qui permet de supprimer le pop-up et create qui vient créer le message new plan dans la barre choisie. 
```

## Avis sur le design fourni

Je trouve que la typographie de base n'apporte pas grand chose et est trop classique, j'ai opté pour du montserrat pour rester dans le thème Odoo. L'ergonomie est bonne.
J'aime beaucoup la palette de couleurs, elles sont sombres et ne sont pas tape à l'œil. les pastilles dans les barres de l'agenda permettent de rajouter de la profondeur et du dynamisme sur la page.

Pour améliorer la visibilité des barres et ajouter du dynamisme sur la page, une idée serait de mettre en place une animation au chargement de la page quii montre l'état d'avancement de la barre jusqu'a sa position finale.
