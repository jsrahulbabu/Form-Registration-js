const form = document.getElementById('registerForm');

form.addEventListener('submit', function(event){
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if(name === ""){
    alert("Enter the name!");
    return;
  }

  if(email === ""){
    alert("Enter the Email!");
    return;
  }

  if(password === ""){
    alert("Enter the Password!");
    return;
  }

  if(password.length < 6){
    alert("Enter the password minimum 6 characters!");
    return;
  }

  // Create object to store data
  const userData = {
    userName: name,
    userEmail: email,
    userPassword: password
  };

  // Convert to JSON and save in Local Storage
  localStorage.setItem("registeredUser", JSON.stringify(userData));

  console.log("Registration Successful!");
  console.log(userData);

  alert("User Registered Successfully & Saved in Local Storage!");
});
