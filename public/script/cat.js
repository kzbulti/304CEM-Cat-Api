//change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search?limit=25&has_breeds=1`;
const api_key = "live_Al10Y6ksJz40FJ3u1NfOXIXMIH0lxA5kV0ty11k2KhCkf4xUAOr33IMe91CXGQob "
var imagesData2;

// `https://api.thecatapi.com/v1/images/search?api_key=live_Al10Y6ksJz40FJ3u1NfOXIXMIH0lxA5kV0ty11k2KhCkf4xUAOr33IMe91CXGQob&limit=1&has_breeds=1`

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  //let imagesData = data;
  

  data.map(function(imageData) {
    //imagesData2 = imagesData;
    let image = document.createElement('img');
    //use the url from the image object
    //console.log(image.src);
    image.src = `${imageData.url}`;
    let imagefile = image.src + "\n";

    //console.log(image.src);
    breeds = `${imageData.breeds[0].name}`;
    //console.log(breeds);
    //breedname = breeds[0].name;
    //console.log(breedname);
    //imagetext = `${imageData.id}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image);

    para = document.createElement("h1");
    breednode = document.createTextNode(breeds); 
    para.appendChild(breednode);
    gridCell.appendChild(para);
      
    document.getElementById('grid').appendChild(gridCell);
    
    });
})
.catch(function(error) {
   console.log(error);
});