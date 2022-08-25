var TICKET_COUNT = 0;

// Adding a new ticket.
function openTicket() {
  document.getElementById("innerBody").style.opacity = "0.5"
  document.getElementById("myTicket").style.display = "flex"
}

function closeTicket() {
  document.getElementById("myTicket").style.display = "none";
  document.getElementById("innerBody").style.opacity = "1"
}

function submitTicket() {
  TICKET_COUNT++;

  var ticketDetailsInput = document.getElementById("detailsInput").value;
  var assignedToInput = document.getElementById("assignedInput").value;

  var div = document.createElement("div");
  div.className = "ticket";

  var divTicketNo = document.createElement("div");
  var pTicketNo = document.createElement("p");
  pTicketNo.id = "ticketNumber";
  pTicketNo.innerHTML = TICKET_COUNT;

  var divDetails = document.createElement("div");
  var pDetails = document.createElement("p");
  pDetails.id = "ticketDetails";
  pDetails.innerHTML = ticketDetailsInput;

  var divAssigned = document.createElement("div");
  var pAssigned = document.createElement("p");
  pAssigned.id = "assignedTo";
  pAssigned.innerHTML = assignedToInput;

  div.appendChild(divTicketNo);
  divTicketNo.appendChild(pTicketNo);
  div.appendChild(divDetails);
  divDetails.appendChild(pDetails);
  div.appendChild(divAssigned);
  divAssigned.appendChild(pAssigned);
  document.getElementById("ticketDash").appendChild(div);
  console.log(ticketDetailsInput);
  console.log(assignedToInput);
}