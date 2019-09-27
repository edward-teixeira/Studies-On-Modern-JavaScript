//Display books when loaded DOM is loaded
document.addEventListener("DOMContentLoaded", function(e) {
  Storage.displayBook();
});

document.querySelector("#book-form").addEventListener("submit", function(e) {
  //get the form data
  let { title, author, isbn } = UiHandler.HTMLGetInputFields();
  //Validation
  if (title.value !== "" && author.value !== "" && isbn.value !== "") {
    if (title.value !== null && author.value !== null && isbn.value !== null) {
      //Create the book and append the HTML
      let book = new Book(title.value, author.value, isbn.value);
      UiHandler.HTMLBookBuilder(book);
      //Add to local Storage
      Storage.addBook(book);
      UiHandler.HTMLClearInputFields();
      //Show the alert
      UiHandler.HTMLMessageBuilder(
        "You book was added succesfully!",
        "success"
      );
    } else {
      UiHandler.HTMLMessageBuilder("Invalid fields!", "error");
    }
  }
  e.preventDefault();
});
// remove book listener
document.querySelector("#book-list").addEventListener("click", function(e) {
  e.preventDefault();
  if (e.target.className === "delete") {
    UiHandler.HTMLBookRemover(e.target);
    UiHandler.HTMLMessageBuilder(
      "You book was removed succesfully!",
      "success"
    );
    //get the sibling text content which is the ISBN
    Storage.removeBook(e.target);
  }
});

class Storage {
  //Retrive the books from local storage
  static getBook() {
    let books = [];
    if (localStorage.getItem("books") !== null) {
      return (books = JSON.parse(localStorage.getItem("books")));
    }
    return books;
  }
  //add books to local storage
  static addBook(book) {
    let books = Storage.getBook();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    return true;
  }
  //remove books from local storage
  static removeBook(target) {
    let books = Storage.getBook();
    books.forEach(function(book, index) {
      if (
        book.isbn === target.parentElement.previousElementSibling.textContent
      ) {
        books.splice(index, 1);
        UiHandler.HTMLBookRemover(target);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
  // append the table with books from local storage
  static displayBook() {
    let books = Storage.getBook() || "";
    if (books !== "") {
      books.forEach(book => UiHandler.HTMLBookBuilder(book));
    }
  }
}

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UiHandler {
  static HTMLBookBuilder(book) {
    let tbody = document.querySelector("#book-list");
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${book.title}</td>
          <td>${book.author}</td>
            <td>${book.isbn}</td>
              <td><a href="#" class="delete" style="color: red;">X</a></td>
    `;
    tbody.appendChild(tr);
  }

  static HTMLBookRemover(target) {
    target.parentElement.parentElement.remove();
  }

  static HTMLMessageBuilder(message, type) {
    let div = document.createElement("div");
    div.className = `alert ${type}`;
    div.appendChild(document.createTextNode(`${message}`));

    document
      .querySelector(".container")
      .insertAdjacentElement("afterbegin", div);
    UiHandler.HTMlHideAlert();
  }

  static HTMlHideAlert() {
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 2000);
  }
  static HTMLGetInputFields() {
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let isbn = document.querySelector("#isbn");
    return { title, author, isbn };
  }
  static HTMLClearInputFields() {
    document.querySelector("#book-form").reset();
  }
}
