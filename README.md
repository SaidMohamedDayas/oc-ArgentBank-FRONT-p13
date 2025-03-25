# Argent Bank - Frontend

Argent Bank est une application bancaire permettant aux utilisateurs de gérer leurs comptes en ligne. Ce dépôt contient le frontend de l'application, développé avec React et Vite.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/)

## Installation

1. Clonez ce dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/SaidMohamedDayas/oc-ArgentBank-FRONT-p13.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd argent-bank-frontend
   ```

3. Installez les dépendances du projet :

   ```bash
   npm install
   ```

## Lancer l'application en local

1. Démarrez le serveur de développement :

   ```bash
   npm run dev
   ```

2. Ouvrez votre navigateur et accédez à l'URL suivante :

   ```bash
   http://localhost:5173
   ```

   (L'URL peut varier en fonction de la configuration de votre environnement.)

## Scripts disponibles

Voici les scripts définis dans le fichier package.json :

- `npm run dev` : Lance le serveur de développement.
- `npm run build` : Compile l'application pour la production.
- `npm run preview` : Prévisualise l'application compilée.
- `npm run lint` : Analyse le code avec ESLint pour détecter les erreurs.

## Configuration de l'API Backend

Le backend de l'application est disponible sur le dépôt suivant :  
[oc-ArgentBank-API-p13](https://github.com/SaidMohamedDayas/oc-ArgentBank-API-p13)

L'application frontend communique avec une API backend. Par défaut, l'URL de l'API est configurée pour pointer vers `http://localhost:3001/api/v1`. Assurez-vous que le backend est en cours d'exécution avant de lancer l'application frontend.

Si vous devez modifier l'URL de l'API, mettez à jour les fichiers suivants :

- `authApi.js`
- `userApi.js`

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez ouvrir une issue ou soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.
