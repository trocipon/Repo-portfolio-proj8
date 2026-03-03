# Portfolio de Thibaud Rocipon

Bienvenue dans le dépôt du portfolio de Thibaud Rocipon, un développeur web spécialisé en JavaScript et React. Ce projet met en avant ses compétences, ses réalisations et son parcours professionnel.

## Fonctionnalités

- **Section "À propos"** : Présentation personnelle et résumé des compétences.
- **Projets** : Liste des projets réalisés avec des détails techniques et des liens vers les dépôts GitHub.
- **Compétences** : Technologies maîtrisées avec des icônes interactives.
- **Témoignages** : Avis de collègues ou managers.
- **Contact** : Formulaire de contact sécurisé.

## Technologies utilisées

- **Frontend** : React, TypeScript, Tailwind CSS
- **Outils** : Vite, PostCSS

## Structure du projet

```
portfolio/
├── public/               # Fichiers publics (images, icônes, etc.)
├── src/
│   ├── components/       # Composants React
│   ├── sections/         # Sections principales du site
│   ├── utils/            # Fonctions utilitaires
│   ├── styles/           # Fichiers CSS globaux
│   └── data/             # Données JSON
├── index.html            # Fichier HTML principal
├── vite.config.ts        # Configuration de Vite
└── package.json          # Dépendances du projet
```

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/trocipon/portfolio.git
   ```
2. Accédez au dossier du projet :
   ```bash
   cd portfolio
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
5. Ouvrez votre navigateur à l'adresse :
   [http://localhost:5173](http://localhost:5173)

## Configuration de reCAPTCHA

1. Créez un fichier `.env` à la racine du projet :

   ```bash
   REACT_APP_RECAPTCHA_SITE_KEY=your-site-key
   ```

   Remplacez `your-site-key` par votre clé publique reCAPTCHA obtenue sur [Google reCAPTCHA](https://www.google.com/recaptcha/admin/create).

2. Assurez-vous que le fichier `.env` est ajouté à `.gitignore` pour éviter qu'il ne soit versionné.

## Déploiement

Pour déployer ce projet, configurez les variables d'environnement nécessaires (comme la clé reCAPTCHA) sur votre plateforme de déploiement (Netlify, Vercel, etc.).
