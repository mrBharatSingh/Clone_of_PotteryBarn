document.getElementById("aa");
var userArr = JSON.parse(localStorage.getItem("userData")) || [];
// console.log(userArr);
console.log("hadldkjdlkjglkjg");
function signUp() {
  var firstName = document.getElementById("firstname");
  var emailAddress = document.getElementById("email_address");
  var Confirm = document.getElementById("Confirm");
  var password = document.getElementById("password");
  var passwordConfirmation = document.getElementById("passwordconfirmation");

  // warning text

  var worngName = document.getElementById("wronfname");
  var worngEmail = document.getElementById("wronemail");
  var worngCemail = document.getElementById("wronCemail");
  var worngPass = document.getElementById("wronpass");
  var worngCpass = document.getElementById("wronCpass");

  worngName.textContent = null;
  worngEmail.textContent = null;
  worngCemail.textContent = null;
  worngPass.textContent = null;
  worngCpass.textContent = null;

  firstName.style.backgroundColor = "white";
  emailAddress.style.backgroundColor = "white";
  Confirm.style.backgroundColor = "white";
  password.style.backgroundColor = "white";
  passwordConfirmation.style.backgroundColor = "white";

  if (firstName.value.length <= 0) {
    firstName.style.backgroundColor = "#ff7575";
    worngName.textContent = "*please enter name";
  } else if (emailAddress.value.length <= 4) {
    worngEmail.textContent = "*please enter email";
    emailAddress.style.backgroundColor = "#ff7575";
  } else if (emailAddress.value != Confirm.value) {
    worngCemail.textContent = "*email is not match";
    Confirm.style.backgroundColor = "#ff7575";
  } else if (password.value.length < 6) {
    worngPass.textContent = "*please enter password";
    password.style.backgroundColor = "#ff7575";
  } else if (password.value != passwordConfirmation.value) {
    passwordConfirmation.style.backgroundColor = "#ff7575";
    worngCpass.textContent = "*password not match";
  } else {
    var userC = {
      name: firstName.value,
      email: emailAddress.value,
      password: password.value,
      role: "coustmer",
    };
    //   userArr.push(userC);
    console.log(userC);

    const sign = async () => {
      var url = `https://potterybarn-database.herokuapp.com/register`;

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userC),
        headers: {
          "Content-Type": "application/json",
        },
      });

      var signRes = await res.json();

      if (signRes.message == "user with that email alrady exists") {
        worngEmail.textContent = "*" + signRes.message;
        emailAddress.style.backgroundColor = "#ff7575";
      }
      if (signRes.user) {
        alert("varification email send to your email");
        window.location.reload();
      }
      console.log(signRes);
    };

    sign();

    //   localStorage.setItem("userData", JSON.stringify(userArr));
    //   window.location.reload();
  }
}

document.getElementById("aaa");
var falage = false;
var rUsers = JSON.parse(localStorage.getItem("userData"));

//login function get data form backend and validate it----------------------------------------------
// console.log("rUsers:", rUsers);

function signIn() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  var wrongemail = document.getElementById("wrongemail");
  var wrongpass = document.getElementById("wrongpass");

  wrongpass.textContent = null;
  wrongemail.textContent = null;

  document.getElementById("email").style.backgroundColor = "white";
  document.getElementById("pass").style.backgroundColor = "white";

  if (email.length <= 0) {
    document.getElementById("email").style.backgroundColor = "#ff7575";
    wrongemail.textContent = "* plese enter valid email";
  } else if (pass.length < 6) {
    document.getElementById("pass").style.backgroundColor = "#ff7575";
    wrongpass.textContent = "* password length must be grater then 6 digit";
  } else {
    var dataob = {
      email: email,
      password: pass,
    };

    //   console.log(dataob);
    const log = async () => {
      try {
        console.log(dataob);
        var url = `https://potterybarn-database.herokuapp.com/login`;

        const res = await fetch(url, {
          method: "POST",
          body: JSON.stringify(dataob),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const logdata = await res.json();
        console.log(logdata);
        if (logdata.message == "Email is not match") {
          document.getElementById("email").style.backgroundColor = "#ff7575";
          wrongemail.textContent = `* ${logdata.message} `;
        } else if (logdata.message == "Password is not match") {
          document.getElementById("pass").style.backgroundColor = "#ff7575";
          wrongpass.textContent = `* ${logdata.message}`;
        } else if (logdata.message == "Please verified user email") {
          document.getElementById("email").style.backgroundColor = "#ff7575";
          wrongemail.textContent = `* ${logdata.message} `;
        }

        console.log(logdata);

        if (logdata.user) {
          var token = {
            token: "Bearer" + " " + logdata.token,
            id: logdata.user,
          };
          localStorage.setItem("token", JSON.stringify(token));
          window.history.back();
        }
      } catch (error) {
        console.log(error);
      }
    };
    log();
  }
}
