document.body.style.backgroundColor="silver"
document.getElementById("title").style.color="green"
document.getElementById("fruity").style.textTransform= "uppercase";
document.getElementById("vegie").style.textTransform= "uppercase";

var listOfFruits = ["Kiwi","Apple","pumpkin","Avocado"] 
var listoffruity = document.getElementById("fruList");
for (let i=0;i<listOfFruits.length;i++){
    var newList =document.createElement("li")
    newList.textContent =listOfFruits[i] 
    listoffruity.appendChild(newList)
}
var listOfvegies = ["cauliflower","cowpeas","pumpkin leaves","Kales"] 
var listofvegy = document.getElementById("vegList");
for (let i=0;i<listOfvegies.length;i++){
    var newList =document.createElement("li")
    newList.textContent =listOfvegies[i] 
    listofvegy.appendChild(newList)
}

