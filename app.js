document.body.style.fontFamily= "gothic, sans-serif"; 
// (In the JavaScript) Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById("nickname").textContent="Skyford"; 
document.getElementById("favorites").innerHTML= "sleeping, laughing, gardening"; 
document.getElementById("hometown").textContent= "Oklahoma City"; 
// Iterate through each li and change the class to "list-item".
var items= document.getElementsByTagName('li')
for (let i=0; i< items.length; i++) {
    items[i].classname= 'list-item'; 
};
// (In the HTML head) Add a style tag that sets a rule for .list-item to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var myPicture= document.createElement('img')
myPicture.src= "http://bernheim.org/wp-content/uploads/2018/06/forestTrail.jpg"
document.body.appendChild(myPicture); 
