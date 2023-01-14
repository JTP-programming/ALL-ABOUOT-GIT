function signUp() {
  var username = document.getElementById("un").value;
  var password = document.getElementById("pw").value;
  var firstname = document.getElementById("fn").value;
  var lastname = document.getElementById("ln").value;
  var email = document.getElementById("em").value;
  var confirmpassword = document.getElementById("cpw").value;
  var errormsg = "Password Not A Match!";
  var errormsg2 = "Field cannot be empty!";
  var data = {
    firstname: firstname,
    username: username,
    password: password,
    lastname: lastname,
    email: email,
    confirmpassword: confirmpassword,
  };
  console.log("Working")
  console.log(data);
  if (username == "" || password == "" || firstname == "" || lastname == "" || email == "" || confirmpassword == ""){
    console.log(errormsg2)
    document.getElementById("htag").innerHTML = errorsmsg2;
    return;
  }
  if (password != confirmpassword) {
    document.getElementById("htag").innerHTML = errormsg;
    return;
  }
  console.log("Redirecting to landing page")
  //document.location = "landing.html"  
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
      if (response.ok) {
        console.log("HELLO");
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => {
      document.location = "landing.html"
      console.log(data);
    });
    
}
