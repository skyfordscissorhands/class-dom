
function libIt() {
    let storyDiv = document.getElementById("story");
    let name = document.getElementById("person").value;
    let adjective = document.getElementById("adjective").value;
    let noun = document.getElementById("noun").value;
    
    storyDiv.innerHTML = name + " fell off a " + adjective + " " + noun + "... strange";
  }
  let libButton = document.getElementById('lib-button');
//   add event lisrent keyword (event, function)
  libButton.addEventListener('click', libIt);

  document.getElementById("story").style.color = "orange";
  document.getElementById("story").style.fontSize = "30px";