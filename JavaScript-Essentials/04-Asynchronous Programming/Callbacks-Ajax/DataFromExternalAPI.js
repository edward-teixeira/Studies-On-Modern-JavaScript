//Get a random joke from a Chuck Norris  external APIS
document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      //If everything is ok
      if (response.type === "success") {
        //*Respect the format from the API
        response.value.forEach(element => {
          const li = `
       <li><p style="color: black;font-weight: bold; font-size: 20px;">${element.joke}<p></li>
      `;
          document.querySelector(".jokes").insertAdjacentHTML("afterbegin", li);
        });
      }
    }
  };

  e.preventDefault();

  xhr.send();
}
