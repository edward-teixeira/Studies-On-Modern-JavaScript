//*An Object to handle the requests
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

//* Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true); //initializes a newly-created request, or re-initializes an existing one
  let self = this;
  // onload is the function to be executed when the request completes successfully.
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText); // Call back this function when the http.status is 200
    } else {
      callback("Error" + self.http.status); // Or put an error if the http.status is not ok
    }
  };
  this.http.send();
};
//* Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  //url to where to put the data, the data itself and the callback function to execute after the request is made
  this.http.open("POST", url, true);
  /* The XMLHttpRequest method setRequestHeader() sets the value of an HTTP request header. 
  When using setRequestHeader(), you must call it after calling open(), but before calling send().
   If this method is called several times with the same header, the values are merged into one single request header.*/
  this.http.setRequestHeader("Content-type", "application/json");
  /*Params: XMLHttpRequest.setRequestHeader(The name of the header whose value is to be set , The value to set as the body of the header.)*/
  this.http.onload = () => {
    callback(null, this.http.responseText); // call this function that was passed as the parameter when the request is done
  };
  this.http.send(JSON.stringify(data)); // It is needed to transform our data into a JSON string , so that it can be passed on
};
//* Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");
  this.http.onload = () => {
    callback(null, this.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};
//* Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  //We delete the posts with their id number  embbed into this url
  this.http.open("DELETE", url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, "Post Deleted!");
      //Just a message to verify if everything is ok, because we are not retrieving or sending anything
    } else {
      callback("Error" + this.http.status);
    }
  };
  this.http.send();
};
