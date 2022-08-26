
function openTicket() {
  document.getElementById("myTicket").style.display = "block";
  document.getElementById("innerBody").style.opacity = "0.5"
}

function closeTicket() {
  document.getElementById("myTicket").style.display = "none";
  document.getElementById("innerBody").style.opacity = "1"
}

function clearStorage() {
  localStorage.clear();
  location.reload();
}

// Getting current date.
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

//Adding elements and using local storage below:
const TicketForm = document.getElementById("TicketForm");
const TicketContainer = document.querySelector(".TicketContainer");
const inputTitle = TicketForm["TicketTitle"];
const inputAuthor = TicketForm["TicketAuthor"];
const inputDescription = TicketForm["TicketDescription"];
const inputType = TicketForm["TicketType"];
const inputStatus = TicketForm["TicketStatus"];
const dateIssued = String(today);
const inputDateETA = TicketForm["TicketDateETACompleted"];
const inputDateComp = TicketForm["TicketDateCompleted"];

const Tickets = JSON.parse(localStorage.getItem("Tickets")) || [];

const addTicket = (TicketNumber, TicketTitle, TicketAuthor, TicketDescription, TicketType, TicketStatus, TicketDateIssued, TicketDateETACompleted, TicketDateCompleted) => {
  Tickets.push({
    TicketNumber,
    TicketTitle,
    TicketAuthor,
    TicketDescription,
    TicketType,
    TicketStatus,
    TicketDateIssued,
    TicketDateETACompleted,
    TicketDateCompleted,

  });
  localStorage.setItem("Tickets", JSON.stringify(Tickets));

  return { TicketNumber, TicketTitle, TicketAuthor, TicketDescription, TicketType, TicketStatus, TicketDateIssued, TicketDateETACompleted, TicketDateCompleted, TicketNumber };
};


const CreateTicketElement = ({ TicketNumber, TicketTitle, TicketAuthor, TicketDescription, TicketType, TicketStatus, TicketDateIssued, TicketDateETACompleted, TicketDateCompleted }) => {

  //create the elements
  const tTicketDiv = document.createElement('div');
  tTicketDiv.classList.add('ticket');
  tTicketDiv.id = TicketNumber;
  const tTicketTitle = document.createElement('h3');
  const tTicketAuthor = document.createElement('p');
  const tTicketDescription = document.createElement('p');
  const tTicketType = document.createElement('p');
  const tTicketStatus = document.createElement('p');
  const tTicketDateIssued = document.createElement('p');
  const tTicketDateETACompleted = document.createElement('p');
  const tTicketDateCompleted = document.createElement('p');

  // Ticket button to open ticket elements
  const tbTicketButton = document.createElement('button');
  tbTicketButton.classList.add('ticketButton');
  tbTicketButton.id = TicketNumber;


  const tbTicket = document.createElement('div');
  tbTicket.classList.add('Ticket');

  const tbTicketNumber = document.createElement('div');
  tbTicketNumber.innerHTML = TicketNumber;

  const tbTicketTitle = document.createElement('div');
  tbTicketTitle.innerHTML = TicketTitle;

  const tbAssingedTo = document.createElement('div');

  const tbDueDate = document.createElement('div');

  const deleteBtn = document.createElement('button');
  deleteBtn.id = TicketNumber;
  deleteBtn.addEventListener('click', deleteTicket);
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.innerHTML = "<img src='images/trash_can.png' id = 'trashCan' alt='trash' width='20' height='20'>";

  tbTicket.appendChild(tbTicketNumber);
  tbTicket.appendChild(tbTicketTitle);
  tbTicket.appendChild(tbAssingedTo);
  tbTicket.appendChild(tbDueDate);
  tbTicketButton.appendChild(tbTicket);

  //Fill the content
  tTicketTitle.innerText = "Title: " + TicketTitle;
  tTicketAuthor.innerText = "Author: " + TicketAuthor;
  tTicketDescription.innerText = "Description: " + TicketDescription;
  tTicketType.innerText = "Type: " + TicketType;
  tTicketStatus.innerText = "Priority: " + TicketStatus;
  tTicketDateIssued.innerText = "Date Issued: " + TicketDateIssued;
  tTicketDateETACompleted.innerText = "Estimated Date of Completion: " + TicketDateETACompleted;
  tTicketDateCompleted.innerText = "Date of Completion: " + TicketDateCompleted;

  //Add to the Domain
  //The order it is appended is the order it will be displayed in.
  tTicketDiv.append(tTicketTitle, tTicketAuthor, tTicketDescription, tTicketType, tTicketStatus, tTicketDateIssued, tTicketDateETACompleted, tTicketDateCompleted);
  TicketContainer.appendChild(deleteBtn);
  TicketContainer.appendChild(tbTicketButton);
  TicketContainer.appendChild(tTicketDiv);
}

Tickets.forEach(CreateTicketElement);

TicketForm.onsubmit = (e) => {
  e.preventDefault();
  location.reload();
  const newTicket = addTicket(
    Tickets.length + 1,
    inputTitle.value,
    inputAuthor.value,
    inputDescription.value,
    inputType.value,
    inputStatus.value,
    dateIssued,
    inputDateETA.value,
    inputDateComp.value,
  )

  CreateTicketElement(newTicket);

  //Clear the inputs 
  inputTitle.value = "";
  inputAuthor.value = "";
  inputDescription.value = "";
  inputType.value = "";
  inputStatus.value = "";
  dateIssued.value = "";
  inputDateETA.value = "";
  inputDateComp.value = "";
};

// Click on the ticket button to open the ticket.
document.querySelectorAll(".ticketButton").forEach(button => {
  button.addEventListener("click", () => {
    const ticket = button.nextElementSibling;
    button.classList.toggle('ticket--active');

    if (button.classList.contains('ticket--active')) {
      ticket.style.maxHeight = ticket.scrollHeight + "px";
    }
    else {
      ticket.style.maxHeight = 0;
    }
  });
});



