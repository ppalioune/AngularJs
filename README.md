# Démarrage
Dans cette partie nous avons vu comment mettre en place et demarrer une application angular avec le `CLI`.
- Installer [nodejs](https://nodejs.org/en/)
- Installer `npm`
- Installer `angular` avec la commande: `npm install -g @angular/cli`
- Créer ton son projet angular: ` ng new nom_projet` ou `ng new nom_projet --style=scss --skip-tests=true`
- créer un component `ng generate component nom-component `
- Se dépalcer dans le dossier du projet et démarer son projet: ` ng serve --open`

# Gestion des données
Maintenant nous allons voir comment communiquer le DOM.
Dans ce premier test nous avons vu les éléments suivant:
- String interpolation
- Property binding
- Event binding
- Two-way binding
- Propriétes personnalisés

# Structurez le document avec les directives
Il a deux types de directives:
- les directives structurelles permettent de modifier la structure du document
- les directives par attributs modifient le comportement d'un objet déjà existant.

# Organisation du code
Dans cette partie nous vu les éléments suivants:
- les services
- le routing de votre application avec des  `routerLink`  et de manière programmatique (avec `router.navigate()`).
- la redirection des utilisateurs
- la protection des routes avec les guards. Exemple: authentifivation