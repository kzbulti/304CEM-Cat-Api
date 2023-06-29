document.addEventListener("DOMContentLoaded", function() {
  const imageGallery = document.getElementById("image-gallery");

  // Replace "images" with the path to your image folder
  const imageFolder = "/Users/theul/Node/cat/";

  // Fetch the image files from the folder
  fetchImageFiles(imageFolder)
    .then(imageFiles => {
      // Create and append <img> elements for each image file
      imageFiles.forEach(imageFile => {
        const img = document.createElement("img");
        img.src = imageFolder + imageFile;
        imageGallery.appendChild(img);
      });
    })
    .catch(error => {
      console.error("Error:", error);
    });
});

function fetchImageFiles(folder) {
  return new Promise((resolve, reject) => {
    // Fetch the list of image files using XHR or Fetch API
    const xhr = new XMLHttpRequest();
    xhr.open("GET", folder);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const fileNames = parseFileNames(xhr.responseText);
        resolve(fileNames);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = function() {
      reject(xhr.statusText);
    };
    xhr.send();
  });
}

function parseFileNames(responseText) {
  // Parse the list of image files from the response text
  const regex = /href="([^"]+\.(?:png|jpg|jpeg|gif))"/g;
  const matches = responseText.matchAll(regex);
  const fileNames = Array.from(matches, match => match[1]);
  return fileNames;
}