function openTicket() {
  document.getElementById("innerBody").style.opacity = "0.5"
  document.getElementById("myTicket").style.display = "flex"  
}

function closeTicket() {
  document.getElementById("myTicket").style.display = "none";
  document.getElementById("innerBody").style.opacity = "1"
}
localStorage.setItem('TitleAuthor', getElementById(TicketTitle));