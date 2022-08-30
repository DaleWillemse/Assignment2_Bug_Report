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

//added remove button instead of remove selector
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.style.width = "65px";
    removeBtn.style.borderRadius = "5px";
    removeBtn.style.border = "1px solid";
    removeBtn.innerText = "Delete!";
    removeBtn.style.backgroundColor = "red";
    //removeBtn.addEventListener("click", myScript);

    projectName.innerText = `Project Name: ${name}` ;
    projectDesc.innerHTML = `Project Description: \n` + desc;

    projectDiv.append(projectName, projectDesc, ticketBtn, removeBtn);
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

//my function for deleting (still working on it)

function deleteFunction(){
  document.getElementByClassName("removeBtn");
  localStorage.remove();
}
