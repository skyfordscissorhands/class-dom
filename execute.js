let changeIt = document.getElementById("w3c");
changeIt.addEventListener("click", changeButton);
changeIt.addEventListener("click", addAlert);

function changeButton(){
    document.getElementById("w3c").style.background = "yellow";
}
  
function addAlert(){
    alert ("hello")
}



