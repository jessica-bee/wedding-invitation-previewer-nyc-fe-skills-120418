const invitation = document.querySelector("#invitation")
const firstName = document.querySelector(".First-Name")
const secondName = document.querySelector(".Second-Name")
const lastName = document.querySelector(".Last-Name")
const date = document.querySelector(".Date")
const weddingLocation = document.querySelector(".Wedding-Location")
const secondFirstName = document.querySelector(".Second-First-Name")
const surname = document.querySelector(".Surname")
const secondDate = document.querySelector(".Second-Date")
const weddingLocation2 = document.querySelector(".Location")
const formal = document.querySelector("#formal")

formal.addEventListener("click", function() {
  invitation.className = "formal"
})

firstName.addEventListener('keyup', logFirstName);

function logFirstName(e) {
  secondFirstName.innerText = firstName.value;
}

secondName.addEventListener('keyup', logSecondName);

// function logSecondName(e) {
//   names.innerText = secondName.value;
// }

lastName.addEventListener('keyup', logLastName);

function logLastName(e) {
  surame.innerText = lastName.value;
}

date.addEventListener('keyup', logDate);

function logDate(e) {
  secondDate.innerText = date.value;
}

weddingLocation.addEventListener('keyup', logWeddingLocation);

function logWeddingLocation(e) {
  location.innerText = weddingLocation.value;
}