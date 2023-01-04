function signUp() {
  var username = document.getElementById("un").value;
  var password = document.getElementById("pw").value;
  var firstname = document.getElementById("fn").value;
  var lastname = document.getElementById("ln").value;
  var email = document.getElementById("em").value;
  var errormsg = "Password Not A Match!";
  var confirmpassword = document.getElementById("cpw").value;
  var errormsg2 = "Field cannot be empty!";
  var data = {
    firstname: firstname,
    username: username,
    password: password,
    lastname: lastname,
    email: email,
    confirmpassword: confirmpassword,
  };
  console.log(data);
  if (username == "" || password == "" || firstname == "" || lastname == "" || email == "" || confirmpassword == ""){
    console.log(errormsg2)
    document.getElementById("htag").innerHTML = errormsg2;
    return;
  }
  if (password != confirmpassword) {
    document.getElementById("htag").innerHTML = errormsg;
    return;
  }
  document.getElementById("htag").innerHTML = "";
  fetch("http://localhost:3000/api/signup", {
    headers: {
      Accept: "application/json, */*",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => {
      /*console.log(response.json())*/
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
    
}
