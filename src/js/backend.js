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

  // Endpoint to seve articles
  app.post("/articles", (req, res) => {
    const article = req.body;

    // Load articles from JSON
    const existingArticles = JSON.parse(fs.readFileSync("articles.json", "utf-8"));

    // Add article to list of all articles
    existingArticles.push(article);

    // Save updates articles list to JSON
    fs.writeFileSync("articles.json", JSON.stringify(existingArticles));

    // Send response with message
    res.json({ message: "Artykuł został zapisany." });
  });

  app.listen(3000, () => {
    console.log("Serwer uruchomiony na porcie 3000");
  });
})();
