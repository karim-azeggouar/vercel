const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
// Définition de la route principale
app.get("/", (req, res) => {
  res.send("Welcome to Vercel Node.js!");
});

// Démarrage du serveur en local uniquement
if (require.main === module) {
  
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// Exportation pour Vercel (nécessaire pour le déploiement)
module.exports = app;
