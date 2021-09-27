let myLibrary = [];

function Book(title, author, page, hasRead) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.hasRead = hasRead;
}

function addBookToLibrary() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const page = document.querySelector("#page");
  const hasRead = document.querySelector("#read");
  const newBook = new Book(title, author, page, hasRead);
  myLibrary.push(newBook);
}

function validateForm() {
  
}
