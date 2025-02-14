# Library_Managment_System

📌 Projet : API de Gestion de Livres avec Vanilla Node.js
Ce projet consiste à créer une API REST qui permet de gérer une bibliothèque virtuelle de livres.

📂 Fonctionnalités de l'API :

Ajouter un livre (POST /books)
Récupérer tous les livres (GET /books)
Obtenir les détails d'un livre spécifique (GET /books/:id)
Mettre à jour les informations d'un livre (PUT /books/:id)
Supprimer un livre de la bibliothèque (DELETE /books/:id)

🛠️ Technologies utilisées :
Node.js pur (sans Express)
Module http natif de Node.js
Fichier JSON pour stocker les livres

📜 Explication du projet :
Chaque livre a un titre, un auteur, une année de publication et un résumé.
Les données sont stockées dans un fichier JSON.
L'API permet aux utilisateurs de gérer une collection de livres facilement.
