// on submit check password and username

onsubmit = function() {
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;
    if (password == "") {
        alert("Please enter a password");
        return false;
    }
    if (username == "") {
        alert("Please enter a username");
        return false;
    }
    alert("Welcome to the website");
    // form action to new page
    document.getElementById("loginForm").action = "TicketDash.html"; // CHANGE TO MAIN PAGE
}
