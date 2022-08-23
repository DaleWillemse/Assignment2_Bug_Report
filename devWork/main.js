
function cCrudClick(){
  alert("Create");
}
function rCrudClick(){
  alert("Read");
}
function uCrudClick(){
  alert("Update");
}
function dCrudClick(){
  alert("Delete");
}

function openProject() {
  document.getElementById("createProject").style.display = "block";
}

function closeForm() {
  document.getElementById("createProject").style.display = "none";
}
function getInputFromTextBox() {
    var input = document.getElementById("userInput").value;
    alert(input);
}

function firstProject(){
  document.getElementById("p1").innerHTML = "New text!";
}
