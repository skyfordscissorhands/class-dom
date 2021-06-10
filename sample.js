function myFun() {
    let note= document.createElement("img");
    note.setAttribute("src","https://image.shutterstock.com/image-photo/starberry-summer-260nw-1304884612.jpg");
    note.setAttribute("width","150");
    note.setAttribute("height","125");
    note.setAttribute("border","5px solid black",);
    note.setAttribute("alt","image of fruit")
    document.body.appendChild(note);
}
function myFunction() {
    let para = document.createElement("P");
    let text = document.createTextNode("some text");
    parent.appendChild(text);
    document.getElementById("myDiv").appendChild(para);
};

function checkFunc() {
    let node= document.createElement("li");
    let text1= document.createTextNode("grapes");
    node.appendChild(text1);
    document.getElementById("myList").appendChild(node);
}
