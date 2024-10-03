// window.addEventListener("load", () => {
//   // pobierz elementy
//   const form = document.getElementById("uploadForm");
//   const fileInput = document.getElementById("fileInput");

//   // nasłuchuj submit formularza
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // stwórz obiekt FormData
//     const formData = new FormData();

//     // dodaj plik
//     formData.append("file", fileInput.files[0]);

//     // ustaw opcje żądania
//     const options = {
//       method: "POST",
//       body: formData,
//     };

//     // wyślij żądanie POST
//     fetch("/Cats-Blog/public/", options)
//       .then((response) => response.text())
//       .then((result) => console.log(result))
//       .catch((error) => console.error(error));
//   });
// });

// window.addEventListener("load", () => {
//   const fileInput = document.getElementById("fileInput");
//   const sendButton = document.getElementById("sendButton");

//   sendButton.addEventListener("click", (e) => {
//     const reader = new FileReader();
//     e.preventDefault();
//     const file = fileInput.files[0];

//     reader.onload = () => {
//       const file = reader.result;

//       fetch("/upload", {
//         method: "POST",
//         body: file,
//       });
//     };

//     reader.readAsDataURL(file);
//   });
// });

// TEST file upload
