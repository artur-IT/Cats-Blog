import { useState } from "react";

export const AddArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/addArticle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, date: new Date() }),
    });
    if (response.ok) {
      // Wyczyść formularz i zaktualizuj listę artykułów
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tytuł" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Treść" />
      <button type="submit">Dodaj artykuł</button>
    </form>
  );
};
