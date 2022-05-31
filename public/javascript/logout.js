// Makes an async function to logout
async function logout() {
    // uses the user model to select logout options
  const response = await fetch("/api/users/logout", {
    //   Method of the request
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    //   Transfers the user to the homepage after logout
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

// Conects to the logout button and attaches a click listener
document.querySelector("#logout").addEventListener("click", logout);
