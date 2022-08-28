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

    projectName.innerText = `Project Name: ` + name;
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
