//buttons
let myLibrary = [];
const addBook = document.querySelector(".addBook");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")
const closeModalBtn = document.querySelector(".btn-close");

//open modal
const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

//close modal
const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

//object and constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    //do stuff here
}

//eventlisteners
addBook.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        modalClose();
    }
});