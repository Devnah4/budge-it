// Handles the login form submission
async function loginFormHandler(event) {
  event.preventDefault();
    // Sets the notation for the username and password
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

   // Checks if the username and password are empty
  if (email && password) {
    const response = await fetch("/api/users/login", {
        // Sets the method it will be performing
      method: "POST",
    //   Sets the headers it will be sending
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
