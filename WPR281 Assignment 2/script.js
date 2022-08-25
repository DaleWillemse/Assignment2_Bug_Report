
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

//Adding elements and using local storage below:
const TicketForm = document.getElementById("TicketForm");
const TicketContainer = document.querySelector(".TicketContainer");
const inputTitle = TicketForm["TicketTitle"];
const inputAuthor = TicketForm["TicketAuthor"];
const inputDescription = TicketForm["TicketDescription"];
const inputType = TicketForm["TicketType"];
const inputStatus = TicketForm["TicketStatus"];
const inputDateIssued = TicketForm["TicketDateIssued"];
const inputDateETA = TicketForm["TicketDateETACompleted"];
const inputDateComp = TicketForm["TicketDateCompleted"];

const Tickets = JSON.parse(localStorage.getItem("Tickets")) || [];

const addTicket = (TicketTitle, TicketAuthor, TicketDescription, TicketType, TicketStatus, TicketDateIssued, TicketDateETACompleted, TicketDateCompleted) => {
  Tickets.push({
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

  return { TicketTitle, TicketAuthor, TicketDescription, TicketType, TicketStatus, TicketDateIssued, TicketDateETACompleted, TicketDateCompleted, TicketNumber };
};

const CreateTicketElement = ({ TicketTitle, TicketAuthor, TicketDescription, TicketType, TicketStatus, TicketDateIssued, TicketDateETACompleted, TicketDateCompleted }) => {

  //create the elements
  const tTicketDiv = document.createElement('div');
  tTicketDiv.classList.add('ticket');
  const tTicketTitle = document.createElement('h3');
  const tTicketAuthor = document.createElement('p');
  const tTicketDescription = document.createElement('p');
  const tTicketType = document.createElement('p');
  const tTicketStatus = document.createElement('p');
  const tTicketDateIssued = document.createElement('p');
  const tTicketDateETACompleted = document.createElement('p');
  const tTicketDateCompleted = document.createElement('p');
  const Line = document.createElement('hr')

  // Ticket button to open ticket elements
  const tbTicketButton = document.createElement('button');
  tbTicketButton.classList.add('ticketButton');

  const tbTicket = document.createElement('div');
  tbTicket.classList.add('Ticket');

  const tbTicketNumber = document.createElement('div');
  const pTicketNumber = document.createElement('p');
  
  const tbTicketHeading = document.createElement('div');
  const pTicketHeading = document.createElement('p');
  pTicketHeading.innerText = TicketTitle;

  const tbAssingedTo = document.createElement('div');
  const pAssingedTo = document.createElement('p');

  const tbDueDate = document.createElement('div');
  const pDueDate = document.createElement('p');

  tbTicketButton.appendChild(tbTicket);
  tbTicket.appendChild(tbTicketNumber);
  tbTicketNumber.appendChild(pTicketNumber);
  tbTicket.appendChild(tbTicketHeading);
  tbTicketHeading.appendChild(pTicketHeading);
  tbTicket.appendChild(tbAssingedTo);
  tbAssingedTo.appendChild(pAssingedTo);
  tbTicket.appendChild(tbDueDate);
  tbDueDate.appendChild(pDueDate);


  //Fill the content
  tTicketTitle.innerText = "Title: " + TicketTitle;
  tTicketAuthor.innerText = "Author: " + TicketAuthor;
  tTicketDescription.innerText = "Description: " + TicketDescription;
  tTicketType.innerText = "Type: " + TicketType;
  tTicketStatus.innerText = "Status: " + TicketStatus;
  tTicketDateIssued.innerText = "Date Issued: " + TicketDateIssued;
  tTicketDateETACompleted.innerText = "Estimated Date of Completion: " + TicketDateETACompleted;
  tTicketDateCompleted.innerText = "Date of Completion " + TicketDateCompleted;

  //Add to the Domain
  //The order it is appended is the order it will be displayed in.
  tTicketDiv.append(Line, tTicketTitle, tTicketAuthor, tTicketDescription, tTicketType, tTicketStatus, tTicketDateIssued, tTicketDateETACompleted, tTicketDateCompleted, Line);
  TicketContainer.appendChild(tbTicketButton);
  TicketContainer.appendChild(tTicketDiv);
}

Tickets.forEach(CreateTicketElement);

TicketForm.onsubmit = (e) => {
  e.preventDefault();
  location.reload();
  const newTicket = addTicket(
    inputTitle.value,
    inputAuthor.value,
    inputDescription.value,
    inputType.value,
    inputStatus.value,
    inputDateIssued.value,
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
  inputDateIssued.value = "";
  inputDateETA.value = "";
  inputDateComp.value = "";
};

// Click on the ticket to open the ticket.
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
