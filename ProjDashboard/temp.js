const projectForm = document.getElementById("projectForm");
const projectContainer = document.querySelector(".row");
const nameInput = projectForm["projName"];
const descInput = projectForm["projDesc"];

const projects = JSON.parse(localStorage.getItem("row")) || [];

const addProject = (name, desc) => {
    projects.push({name, desc});

    localStorage.setItem("row", JSON.stringify(projects));

    return name, desc;
};

console.log(projects);


const createProjectElement = ({name, desc}) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("col");
    const projectName = document.createElement("h2");
    projectName.classList.add("projHead");
    const projectDesc = document.createElement("p");
    projectDesc.classList.add("projDesc");

    const ticketBtn = document.createElement("button");
    ticketBtn.classList.add("ticketBtn");
    ticketBtn.style.width = "3cm";
    ticketBtn.style.borderRadius = "5px";
    ticketBtn.style.border = "1px solid";
    ticketBtn.innerText = "View Tickets";
    ticketBtn.style.backgroundColor = "lightblue";


    projectName.innerText = `Project Name: \n${name}` ;
    projectDesc.innerHTML = `Project Description: \n` + desc;

    projectDiv.append(projectName, projectDesc, ticketBtn);
    projectContainer.appendChild(projectDiv);

    projectContainer.style.display = projects.length === 0 ? "none" : "";
};

projectContainer.style.display = projects.length === 0 ? "none" : "";

projects.forEach(createProjectElement);

projectForm.onsubmit = e => {
    e.preventDefault();

    const newProject = addProject(
        nameInput.value,
        descInput.value
    );

    createProjectElement(newProject);

    nameInput.value = "";
    descInput.value = "";
};

const targetDiv = document.getElementById("searchLi");
const targetDiv2 = document.getElementById("searchLi2");
const btnFind = document.getElementById("btnSearch");
const btnRemove = document.getElementById("btnRemove");

btnFind.onclick = function () {
    if (targetDiv.style.display !== "block") {
        targetDiv.style.display = "block";
    } else {
        targetDiv.style.display = "none";
    }
};
btnRemove.onclick = function () {
    if (targetDiv2.style.display !== "block") {
        targetDiv2.style.display = "block";
    } else {
        targetDiv2.style.display = "none";
    }
};

function searchProjectsFunction() { 
    const searchValue = document.getElementById("searchInput");
    let index;
    isFound = false;
    for (let i = 0; i < projects.length; i++) {
        const element = projects[i];
        
        if (String(element.name) == String(searchValue.value)) {
            index = projects.indexOf(element);  
            isFound = true;
            break;
        }
    }
    if (isFound) {
        alert(`Project Name: ${projects[index].name}\nProject Desccription: ${projects[index].desc}`)
    }
    else{
        searchValue.value = '';
        searchValue.setAttribute('placeholder', 'Try again...')
    }
}

function deleteProject(){
    const searchValue = document.getElementById("deleteInput");
    let index = 0;
    isFound = false;
    for (let i = 0; i < projects.length; i++) {
        const element = projects[i];
        
        if (String(element.name) == String(searchValue.value)) {
            index = i;  
            isFound = true;
            break;
        }
    }
    if (isFound) {

        projects.splice(index, 1);
        
        let block = document.getElementById("tbClear");
        block.innerHTML = "";
        localStorage.clear();
        localStorage.setItem("row", JSON.stringify(projects));

        document.location.reload();
        alert(`successfully deleted`)
    }
    else{
        alert(`not found`);
    }
}

 var input = document.getElementById("searchInput");
 input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("searchBtn").click();
    }
});
var input = document.getElementById("deleteInput");
input.addEventListener("keypress", function(event) {
   if (event.key === "Enter") {
     event.preventDefault();
     document.getElementById("removeBtn").click();
   }
});

