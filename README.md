# NostradaKick — Backend

## 🚀 Présentation du projet

Bienvenue dans le backend de **NostradaKick** ! Cette partie du projet gère toute la logique métier, les requêtes HTTP et l'accès à la base de données. NostradaKick permet aux utilisateurs de partager leurs prédictions de matchs de football, de défier leurs amis et de suivre leur classement.

## 📦 Technologies utilisées

- **Node.js** : Environnement d'exécution côté serveur, parfait pour les applications asynchrones.
- **Express** : Framework minimaliste pour gérer les routes et les middlewares.
- **PostgreSQL** : Base de données relationnelle robuste et fiable.
- **Sequelize** : ORM pour simplifier les requêtes SQL et la gestion des tables.

## 📡 Installation

1. Clonez le projet :

```bash
git clone https://github.com/votre-repo.git
```

2. Accédez au dossier backend :

```bash
cd backend
```

3. Installez les dépendances :

```bash
npm install
```

4. Configurez le fichier `.env` avec vos variables d'environnement :

```plaintext
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nostradakick
DB_USER=votre_user
DB_PASSWORD=votre_mot_de_passe
JWT_SECRET=secret_key
PORT=3001
```

5. Lancez le serveur :

```bash
npm run dev
```

Le serveur tournera sur `http://localhost:3001`.

## 📚 Routes API

### 🎯 Prédictions

- **GET /api/predictions** — Récupérer toutes les prédictions
- **GET /api/predictions/:id** — Récupérer une prédiction spécifique
- **POST /api/prediction** — Ajouter une prédiction
- **PATCH /api/prediction/:id** — Modifier une prédiction
- **DELETE /api/prediction/:id** — Supprimer une prédiction

### 👥 Utilisateurs

- **GET /api/users** — Récupérer tous les utilisateurs
- **GET /api/users/:id/profil** — Récupérer le profil d'un utilisateur
- **POST /api/users** — Créer un nouvel utilisateur
- **PATCH /api/users/:id** — Mettre à jour un utilisateur
- **DELETE /api/users/:id** — Supprimer un utilisateur

### 🏆 Classement et résultats

- **GET /api/results** — Récupérer les résultats des matchs
- **GET /api/calendar** — Récupérer les matchs à venir
- **GET /api/inplay** — Récupérer les matchs en cours

## 🏗️ Modèles de données

### Utilisateur

```javascript
{
  user_id: INTEGER,
  first_name: STRING,
  last_name: STRING,
  pseudo: STRING,
  email: STRING,
  password: STRING,
  picture: STRING
}
```

### Prédiction

```javascript
{
  prediction_id: INTEGER,
  score_predi_home: INTEGER,
  score_predi_away: INTEGER,
  points_score: INTEGER,
  points_outcome: INTEGER,
  user_id: INTEGER,
  match_id: INTEGER
}
```

### Match

```javascript
{
  match_id: INTEGER,
  competition_id: INTEGER,
  date: TIMESTAMP,
  stadium: STRING,
  score_home: INTEGER,
  score_away: INTEGER,
  outcome: STRING
}
```

## 📈 Évolutions futures

- Implémentation des WebSockets pour le chat entre utilisateurs.
- Ajout de la gestion des ligues privées.
- Système de notifications en temps réel.
- Intégration des connexions via Google et Facebook.

## 🤝 Contributeurs

- **Guillaume** — Product Owner
- **Abdelhak** — Scrum Master
- **Abdel** — Lead Dev Front
- **Yvan** — Lead Dev Back
- **Fabien** — Référent Git et Déploiement

---

N'hésitez pas à nous contacter si vous avez des questions ou suggestions ! ⚽

