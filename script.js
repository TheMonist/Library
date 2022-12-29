//Buttons
let myLibrary = [];
const addBook = document.querySelector(".addBook");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")
const closeModalBtn = document.querySelector(".btn-close");
const addLibrary = document.querySelector(".addLibrary");
//const removeBook = document.querySelector();

//Open Modal
const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

//Close Modal
const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

//Object and Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    //this.read = read;
}

function addBookToLibrary() {
    //Adding Book to Library (Definition)
    const titleInput = document.querySelector("#title").value;
    const authorInput = document.querySelector("#author").value;
    const pagesInput = document.querySelector("#pages").value;
    //const readInput document.querySelector("#read").checked;
    
    const newBook = new Book(titleInput, authorInput, pagesInput);
    myLibrary.push(newBook);
}

//Remove from Page
function removeBookFromLibrary() {
    titleInput.value == "";
    authorInput.value = "";
    pagesInput.value = "";
    //readInput.checked = false;
    //remove div like -> formContainer.classList.remove("container")
}

//Add to Page

//Validation (Maybe Remove)
function validateForm() {
    const inputs = document.querySelectorAll("input");
    for(let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            alert("Input Value Is Empty");
            return false;
        }
    }
    return true;
}

//Eventlisteners
addBook.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        modalClose();
    }
});
addLibrary.addEventListener("click", addBookToLibrary);
//removeBook.addEventListener("click", removeBookFromLibrary);