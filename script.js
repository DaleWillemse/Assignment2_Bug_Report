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

    projectName.innerText = `Project Name: ` + name;
    projectDesc.innerText = `Project Description: \n`; + desc;

    projectDiv.append(projectName, projectDesc);
    projectContainer.appendChild(projectDiv);
    
};

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