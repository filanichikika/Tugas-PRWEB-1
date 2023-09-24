document.addEventListener("DOMContentLoaded", function () {
  const divElements = document.getElementsByTagName("h4");

  for (let i = 0; i < divElements.length; i++) {
      const divElement = divElements[i];
      divElement.addEventListener("click", function () {
          alert("Playlist sedang diputar");
      });
  }
});




