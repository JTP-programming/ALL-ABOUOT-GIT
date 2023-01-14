function myFunction() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errormsg3 = "Incorrect Username or password";
  var data = {
    username: username,
    password: password
  }
console.log(data);
  if(username || password == undefined){
    document.getElementById("ptag").innerHTML = errormsg3;
  }
  fetch("http://localhost:3000/api/login", { 
    headers: {
        'Accept': 'application/json, */*',
        'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
})
  .then(response=> {
    if (response.ok) {
      console.log("HELLO");
      return response.json();
    }
    return Promise.reject(response);
  })
  .then(data=> {      
    console.log(data);
    document.location = "landing.html"
  })
  .catch(response=> {
    console.log("Incorrect user name or password")
  })
}
