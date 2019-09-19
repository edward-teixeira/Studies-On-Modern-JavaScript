document.getElementById("button").addEventListener("click", function() {
  loadData();
});

function loadData() {
  //Create an XHR Object
  const xhr = new XMLHttpRequest();
  //console.log("READYSTATE", xhr.readyState);
  //Open method specifies the type of request and the file to work with
  xhr.open(
    /*Type of request*/ "GET",
    /*The file to work with*/ "data.txt",
    /*true = want's it to be asynchronous*/ true
  );
  // Optional - used for spinners/loader
  xhr.onprogress = function() {
    console.log("READYSTATE", this.readyState);
  };
  //Load the data when eveything is ready
  xhr.onload = function() {
    //this refers to the xhr object
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById("output").innerHTML = `<h1>
      ${this.responseText} 
      </h1>`;
    }
  };
  //console.log("READYSTATE", xhr.readyState);

  //Old alternative
  /*   xhr.onreadystatechange = function() {
    console.log("READYSTATE", xhr.readyState);
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  }; */
  //Handle errors
  xhr.onerror = function() {
    console.log("Something wen wrong!");
  };
  //Send the request
  xhr.send();

  /* radyState Values
  0 -  request not initialized;
  1 - server connection estabilished;
  2 - request received;
  3 - processing request;
  4 - request finished and response is ready;
  */

  /*HTTP Statuses:
  200 - OK
  403 - Forbidden
  404 - Not found
  */
}
