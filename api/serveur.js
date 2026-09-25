const express = require("express");
const app = express();
app.use(express.json()); // permet de lire req.body en JSON

  let brawler = [
  { id:1, nom: "shelly", type: "degats bruts" },
{ id: 2, nom: "colt", type: "degats bruts" },
{ id: 3, nom: "piper", type: "tir d'elite" },
{ id: 4, nom: "8-bit", type: "degats bruts" },
{ id: 5, nom: "bo", type: "controle" },
{ id: 6, nom: "brock", type: "tir d'elite" },
{ id: 7, nom: "bull", type: "tank" },
{ id: 8, nom: "nita", type: "degats bruts" },
{ id: 9, nom: "el primo", type: "tank" },
{ id: 10, nom: "poco", type: "soutien" },
{ id: 11, nom: "rosa", type: "tank" },
{ id: 12, nom: "rico", type: "degats bruts" },
{ id: 13, nom: "jessie", type: "controle" },
{ id: 14, nom: "dynamike", type: "artillerie" },
{ id: 15, nom: "darryl", type: "tank" },
{ id: 16, nom: "penny", type: "controle" },
{ id: 17, nom: "tick", type: "artillerie" },
{ id: 18, nom: "carl", type: "degats bruts" },
{ id: 19, nom: "8-bit", type: "degats bruts" },
{ id: 20, nom: "jacky", type: "tank" },
{ id: 21, nom: "gus", type: "soutien" },
{ id: 22, nom: "bea", type: "tir d'elite" },
{ id: 23, nom: "emz", type: "controle" },
{ id: 24, nom: "stu", type: "assassin" },
{ id: 25, nom: "bibi", type: "tank" },
{ id: 26, nom: "bonnie", type: "tir d'elite" },
{ id: 27, nom: "edgar", type: "assassin" },
{ id: 28, nom: "griff", type: "controle" },
{ id: 29, nom: "ash", type: "tank" },
{ id: 30, nom: "lola", type: "degats bruts" },
{ id: 31, nom: "sam", type: "assassin" },
{ id: 32, nom: "mandy", type: "tir d'elite" },
{ id: 33, nom: "maisie", type: "tir d'elite" },
{ id: 34, nom: "hank", type: "tank" },
{ id: 35, nom: "pearl", type: "degats bruts" },
{ id: 36, nom: "larry & lawrie", type: "artillerie" },
{ id: 37, nom: "angelo", type: "tir d'elite" },
{ id: 38, nom: "berry", type: "soutien" },
{ id: 39, nom: "shade", type: "assassin" },
{ id: 40, nom: "meeple", type: "controle" },
{ id: 41, nom: "trunk", type: "tank" },
{ id: 42, nom: "bolt", type: "tank" },
{ id: 43, nom: "mortis", type: "assassin" },
{ id: 44, nom: "tara", type: "degats bruts" },
{ id: 45, nom: "gene", type: "controle" },
{ id: 46, nom: "mr. p", type: "controle" },
{ id: 47, nom: "max", type: "soutien" },
{ id: 48, nom: "sprout", type: "artillerie" },
{ id: 49, nom: "lou", type: "controle" },
{ id: 50, nom: "byron", type: "soutien" },
{ id: 51, nom: "squeak", type: "controle" },
{ id: 52, nom: "buzz", type: "assassin" },
{ id: 53, nom: "fang", type: "assassin" },
{ id: 54, nom: "eve", type: "degats bruts" },
{ id: 55, nom: "janet", type: "tir d'elite" },
{ id: 56, nom: "otis", type: "controle" },
{ id: 57, nom: "buster", type: "tank" },
{ id: 58, nom: "gray", type: "soutien" },
{ id: 59, nom: "r-t", type: "degats bruts" },
{ id: 60, nom: "willow", type: "controle" },
{ id: 61, nom: "doug", type: "soutien" },
{ id: 62, nom: "chuck", type: "controle" },
{ id: 63, nom: "charlie", type: "controle" },
{ id: 64, nom: "mico", type: "assassin" },
{ id: 65, nom: "melodie", type: "assassin" },
{ id: 66, nom: "lily", type: "assassin" },
{ id: 67, nom: "clancy", type: "degats bruts" },
{ id: 68, nom: "moe", type: "degats bruts" },
{ id: 69, nom: "juju", type: "artillerie" },
{ id: 70, nom: "ollie", type: "tank" },
{ id: 71, nom: "lumi", type: "degats bruts" },
{ id: 72, nom: "finx", type: "controle" },
{ id: 73, nom: "jae-yong", type: "soutien" },
{ id: 74, nom: "alli", type: "assassin" },
{ id: 75, nom: "mina", type: "degats bruts" },
{ id: 76, nom: "ziggy", type: "controle" },
{ id: 77, nom: "gigi", type: "assassin" },
{ id: 78, nom: "glowy", type: "soutien" },
{ id: 79, nom: "najia", type: "degats bruts" },
{ id: 80, nom: "damian", type: "tank" },
{ id: 81, nom: "starr nova", type: "assassin" },
{ id: 82, nom: "wendy", type: "soutien" },
{ id: 83, nom: "cosmo", type: "controle" },
{ id: 84, nom: "vince", type: "degats bruts" },
{ id: 85, nom: "spike", type: "degats bruts" },
{ id: 86, nom: "crow", type: "assassin" },
{ id: 87, nom: "leon", type: "assassin" },
{ id: 88, nom: "sandy", type: "controle" },
{ id: 89, nom: "surge", type: "degats bruts" },
{ id: 90, nom: "amber", type: "controle" },
{ id: 91, nom: "meg", type: "tank" },
{ id: 92, nom: "chester", type: "degats bruts" },
{ id: 93, nom: "cordelius", type: "assassin" },
{ id: 94, nom: "kit", type: "soutien" },
{ id: 95, nom: "draco", type: "tank" },
{ id: 96, nom: "kenji", type: "assassin" },
{ id: 97, nom: "pierce", type: "tir d'elite" },
{ id: 98, nom: "nori", type: "assassin" },
{ id: 99, nom: "kaze", type: "assassin" },
{ id: 100, nom: "sirius", type: "controle" }
];
// GET /brawler -> renvoie tout le tableau
app.get("/brawler", (req, res) => {
  res.json(brawler);
});
// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});
// GET /brawler -> renvoie tout le tableau
app.get("/brawler", (req, res) => {
  res.json(brawler);
});
// GET /brawler/2 -> renvoie le brawler dont l id vaut 2
app.get("/brawler/:id", (req, res) => {
  const id = Number(req.params.id);            // ":id" arrive en texte -> on convertit
  const produit = brawler.find((p) => p.id === id);
  if (!produit) {                              // rien trouve
    return res.status(404).json({ erreur: "produit introuvable" });
  }
  res.json(produit);
});
// POST /produits -> ajoute un produit envoye dans le corps de la requete
app.post("/brawler", (req, res) => {
  if (!req.body.nom) {                          // donnee obligatoire manquante
    return res.status(400).json({ erreur: "Le nom est obligatoire" });
  }
  const nouveau = {
    id: brawler.length + 1,
    nom: req.body.nom,
    prix: req.body.prix
  };
  brawler.push(nouveau);                       // on ajoute au tableau
  res.status(201).json(nouveau);                // 201 = cree
});









// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});
