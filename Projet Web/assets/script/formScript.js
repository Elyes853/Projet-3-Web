const lastName = document.getElementById("LastName");
const firstName = document.getElementById("FirstName");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const number = document.getElementById("number");
const email = document.getElementById("email");

//this function will create a table with the elements submitted in it
function insert() {
  var tb1 = document.getElementById("insertionTable");
  var row = tb1.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  var cell4 = row.insertCell();
  var cell5 = row.insertCell();
  var cell6 = row.insertCell();
  var cell7 = row.insertCell();
  cell1.innerHTML = document.getElementById("FirstName").value;
  cell2.innerHTML = document.getElementById("LastName").value;
  cell3.innerHTML = document.getElementById("BirthDate").value;
  cell4.innerHTML = document.getElementById("Gender").value;
  cell5.innerHTML = document.getElementById("Adress").value;
  cell6.innerHTML = document.getElementById("email").value;
  cell7.innerHTML = document.getElementById("number").value;
}

//this functions checks if all the characters are numbers
function PhoneNumberCheck(number) {
  if (typeof number == Number) {
    return false;
  }
  return true;
}

form.addEventListener("submit", (e) => {
  let messages = [];

  // first name opertions
  if (firstName.value === "" || firstName.value == null) {
    messages.push("First name is required");
  }

  if (firstName.value.length <= 6) {
    messages.push("First name must be longer than 6 characters");
  }

  if (firstName.value.length >= 20) {
    messages.push("First name must be less than 20 characters");
  }

  // last name opertions
  if (lastName.value === "" || lastName.value == null) {
    messages.push("Last name is required");
  }

  if (lastName.value.length <= 6) {
    messages.push("Last name must be longer than 6 characters");
  }

  if (lastName.value.length >= 20) {
    messages.push("Last name must be less than 20 characters");
  }

  //phone number operations
  if (PhoneNumberCheck(number)) {
    messages.push("please insert a valid phone number");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
