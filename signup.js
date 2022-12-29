function signUp() {
    var username = document.getElementById("un").value;
    var password = document.getElementById("pw").value;
    var firstname = document.getElementById("fn").value;
    var lastname= document.getElementById("ln").value;
    var email = document.getElementById("em").value;
    var data = {
      firstname: firstname,
      username: username,
      password: password,
      lastname: lastname,
      email: email,
    } 
    console.log(data); 
    fetch("http://localhost:3000/api/signup", {
      headers: {
        "Accept": "application/json, */*",
        "Content-Type": "application/json"
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