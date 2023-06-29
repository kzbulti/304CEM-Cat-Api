
/*
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
*/

window.onload=function(){
var button = document.getElementById("cat-button");
button.addEventListener("click", addCat);
}

let ts = Date.now();
var imagename = "image" + ts + ".png";


async function downloadImage(
  imageSrc,
  nameOfDownload = imagename,
) {
  const response = await fetch(imageSrc);

  const blobImage = await response.blob();

  const href = URL.createObjectURL(blobImage);

  const anchorElement = document.createElement('a');
  anchorElement.href = href;
  anchorElement.download = nameOfDownload;

  document.body.appendChild(anchorElement);
  anchorElement.click();

  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(href);
}

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
    console.log(imagefile);
    //let ts = Date.now();
    //let filename = "image" + ts +".jpg";
    
    /*fs.writeFile(filename, imageData, 'binary', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Image saved successfully!');
    });
    */

    downloadImage(
      imagefile,
      imagename,
    )
      .then(() => {
        console.log('The image has been downloaded');
      })
      .catch(err => {
        console.log('Error downloading image: ', err);
      });

});
})
.catch(function(error) {
   console.log(error);
});

}

