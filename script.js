const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if(username === "admin" && password === "1234"){
    message.textContent = "Login successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid credentials";
    message.style.color = "red";
  }
});
