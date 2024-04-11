import express from "express";

import fs from "fs";

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

(function backendDB() {
  app.use(express.json());

  // Endpoint do zapisywania artykułów
  app.post("/articles", (req, res) => {
    // Odebranie danych artykułu z żądania
    const article = req.body;

    // Wczytanie istniejących artykułów z pliku JSON
    const existingArticles = JSON.parse(fs.readFileSync("articles.json", "utf-8"));

    // Dodanie nowego artykułu do listy artykułów
    existingArticles.push(article);

    // Zapisanie zaktualizowanej listy artykułów do pliku JSON
    fs.writeFileSync("articles.json", JSON.stringify(existingArticles));

    // Wysłanie odpowiedzi
    res.json({ message: "Artykuł został zapisany." });
  });

  app.listen(3000, () => {
    console.log("Serwer uruchomiony na porcie 3000");
  });
})();
