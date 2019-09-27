document.getElementById("button2").addEventListener("click", loadCustumers);

function loadCustumers(e) {
  const xhr = new XMLHttpRequest();

  /* xhr.onload = function() {
    if (this.status === 200) {
      let custumer = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${custumer.id} </li>
         <li>Name: ${custumer.name} </li>
           <li> Company: ${custumer.company}</li>
            <li> Phone: ${custumer.phone} </li>
              </ul>
      `;
      document.getElementById("customer").innerHTML = output;
    }
  }; */
  xhr.open("GET", "customers.json", true);
  xhr.onload = function() {
    if (this.status === 200) {
      let custumers = JSON.parse(this.responseText);
      custumers.forEach(element => {
        const li = ` 
               <ul>
                <li>ID: ${element.id}</li>
                <li>Name: ${element.name} </li>
                  <li> Company: ${element.company}</li>
                    <li> Phone: ${element.phone} </li>
                      </ul>`;
        document
          .getElementById("customers")
          .insertAdjacentHTML("beforeend", li);
      });
    }
  };
  xhr.send();
}
