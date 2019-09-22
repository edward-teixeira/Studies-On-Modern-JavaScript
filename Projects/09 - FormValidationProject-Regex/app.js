// Form Blur Event Listeners
document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{2,10}$/;
  // Starts with an upper or lower case A-Z with minum of 2 maximum of 10 characters

  if (!re.test(name.value)) {
    // If it doesn't match
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateZip() {
  const zip = document.getElementById("zip");
  const re = /^[0-9]{5}(-[0-9]{3})$/;
  // Starts with 5 digits from 0-9, a dash followed by 3 0-9 optional
  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  //starts with any number or digit or undersoce or dash or dot
  //+ = which can be more than one
  // followed by an @ that can have the same as the start with mroe than one
  // end with a dot that can be a-z lower or upper case, and have min of 2 digits and amx of 5
  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

//095.549.696-94
// /\d{3}\.\d{3}\.d{3}\-\d{2}$/

function validatePhone() {
  const phone = document.getElementById("phone");
  //const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  const re = /^([0{1}][0-9]{2}).([0-9]{3}).([0-9]{3})-([0-9]{2})$/;
  //starts with an option parenteses with 3 digits and option closing parenteses
  //with option dot and dash
  // with optional 3 digits, point or dot
  //with option 4 digits at the end
  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
