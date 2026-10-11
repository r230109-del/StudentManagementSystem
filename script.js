const form = document.getElementById("studentForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const rollno = document.getElementById("rollno").value;
    const branch = document.getElementById("branch").value;
    const email = document.getElementById("email").value;

    const apiURL = "https://jdk0l0plu8.execute-api.ap-southeast-2.amazonaws.com/register";

    fetch(apiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            rollno: rollno,
            branch: branch,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        result.innerHTML =
            "Registration Successful!<br>" +
            "Name: " + name + "<br>" +
            "Roll No: " + rollno + "<br>" +
            "Branch: " + branch + "<br>" +
            "Email: " + email;
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        result.innerHTML = "Registration failed! Please try again.";
    });
});