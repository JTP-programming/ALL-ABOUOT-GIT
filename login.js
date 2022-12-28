function myFunction() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var data = {
    username: username,
    password: password
  }
console.log(data);
  fetch("http://localhost:3000/api/login", { 
    headers: {
        'Accept': 'application/json, */*',
        'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data) 
})
  .then(response=> {
    /*console.log(response.json())*/
      return response.json()
  })
  .then(data=> {      
    console.log(data);
  })
}
