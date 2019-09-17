// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}
// Add Book to List
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");
  //Create tr element
  const row = document.createElement("tr");
  //Insert cols
  row.innerHTML = `
    <td>${book.title}</td> 
        <td>${book.author}</td> 
            <td>${book.isbn}</td> 
                <td>${book.title}</td> 
                <td><a href="#" class="delete" style="color: red;">X<a></td>
  `;
  list.appendChild(row);
  console.log(row);
};

// Show Alert
UI.prototype.showAlert = function(message, className) {
  //Create div
  const div = document.createElement("div");
  //add classes
  div.className = `alert ${className}`;
  //Add text
  div.appendChild(document.createTextNode(message));
  //Get parent
  const container = document.querySelector(".container");
  container.insertAdjacentElement("afterbegin", div);

  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 2000);
};

UI.prototype.showSuccess = function(message, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  container.insertAdjacentElement("afterbegin", div);

  setTimeout(function() {
    document.querySelector(".success").remove();
  }, 2000);
};
// Clear Field
UI.prototype.clearFields = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};
//Event Listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
  console.log("tapped");

  //Get form Values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  //Instantiate book
  const book = new Book(title, author, isbn);
  // Instantiate UI;
  const ui = new UI();

  //Validate
  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill in all fields", "error");
    //alert("Empty");
  } else {
    // Add book to list
    ui.addBookToList(book);
    ui.showSuccess("Thanks for adding a book", "success");
    //console.log();
    ui.clearFields();
  }
  e.preventDefault();
});
