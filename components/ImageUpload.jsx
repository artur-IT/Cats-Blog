import React, { useRef, useEffect } from "react";
import "../css/imageUpload.css";

export const ImageUpload = () => {
  const fileInputRef = useRef(null);
  const uploadButtonRef = useRef(null);
  const previewContainerRef = useRef(null);

  useEffect(() => {
    const fileInput = fileInputRef.current;
    const uploadButton = uploadButtonRef.current;
    const previewContainer = previewContainerRef.current;

    function uploadImage() {
      // Pobierz wybrany plik
      const file = fileInput.files[0];

      // Sprawdź, czy plik jest zdjęciem JPG
      if (!file || !file.type.startsWith("image/jpeg")) return alert("Proszę wybrać plik JPG");

      // Sprawdź rozmiar pliku
      if (file.size > 500 * 1024) return alert("Rozmiar pliku nie może przekraczać 500 KB");

      // Utwórz obiekt FileReader do odczytu pliku
      const reader = new FileReader();

      // Dodaj nasłuchiwacz zdarzenia dla zakończenia odczytu pliku
      reader.onload = function () {
        // Utwórz element img i ustaw jego źródło na zawartość pliku
        const img = document.createElement("img");
        img.src = reader.result;

        // Wyczyść poprzedni podgląd i dodaj nowy
        previewContainer.innerHTML = "";
        previewContainer.appendChild(img);
      };

      // Odczytaj plik jako adres URL
      reader.readAsDataURL(file);
    }

    uploadButton.addEventListener("click", uploadImage);

    return () => {
      uploadButton.removeEventListener("click", uploadImage);
    };
  }, []);

  return (
    <div>
      <h3>FileUpload</h3>

      <input type="file" id="fileInput" accept="image/jpeg" ref={fileInputRef}></input>
      <button id="uploadButton" ref={uploadButtonRef}>
        Dodaj zdjęcie
      </button>
      <div id="preview" ref={previewContainerRef}></div>
    </div>
  );
};
