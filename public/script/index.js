var button = document.getElementById("cat-button");
button.addEventListener("click", addCat);




function addCat() {

const url = `https://api.thecatapi.com/v1/images/search?limit=1`;
const api_key = "live_Al10Y6ksJz40FJ3u1NfOXIXMIH0lxA5kV0ty11k2KhCkf4xUAOr33IMe91CXGQob "



fetch(url,{headers: {
    'x-api-key': api_key
  }})
.then((response) => {
 return response.json();
})
.then((data) => {
//let imagesData = data;


data.map(function(imageData) {
    let imagefile = `${imageData.url}`;

    saveImage(imageLink);

});
})
.catch(function(error) {
   console.log(error);
});

}

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

function saveImage(imageLink) {
  fetch(imageLink)
    .then(response => response.buffer())
    .then(buffer => {
      const filename = path.basename('C:\Users\theul\Node\cat' + imageLink); // Extract the filename from the image link
      fs.writeFile(filename, buffer, (error) => {
        if (error) {
          console.error('Error:', error);
        } else {
          console.log(`Image saved as ${filename}`);
        }
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}