//Buttons
let myLibrary = [];

//Open and Close Modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")
const closeModalBtn = document.querySelector(".btnClose");
const addBook = document.querySelector(".addBook");

const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

addBook.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        modalClose();
    }
});

//Object and Constructor
class Book {
    constructor(Title, Author, Pages, Read) {
        this.Title = Title;
        this.Author = Author;
        this.Pages = Pages;
        this.Read = Read;
    }
}


function addBookToLibrary() {
    let newBook = new Book(Title, Author, Pages, Read);
    myLibrary.push(newBook);
    displayUI();
}
 

//Add to Page
function displayUI() {
    const books = document.querySelector(".books");

    //Removing previously generated div cards
    const removeDivs = document.querySelectorAll(".cardBody");
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    };
    
    let index = 0;
    //Loop over library array and display cards
    myLibrary.forEach((myLibrarys) => {
        const cardBody = document.createElement("div");
        cardBody.classList.add("cardBody");
        books.appendChild(cardBody);

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.textContent = "REMOVE";

        removeBtn.dataset.linkedArray = index;
        cardBody.appendChild(removeBtn);

        removeBtn.addEventListener("click", removeBookFromLibrary);

        function removeBookFromLibrary(){
            let retriveBookToRemove = removeBtn.dataset.linkedArray;
            myLibrary.splice(parseInt(retriveBookToRemove), 1);
            cardBody.remove();
            displayUI();
        }

        const readStatus = document.createElement("button");
        readStatus.classList.add("readStatus");
        readStatus.textContent = "Status";

        readStatus.dataset.linkedArray = index;
        cardBody.appendChild(readStatus);

        readStatus.addEventListener("click", toggleRead);

        function toggleRead() {
            let retreiveBookToToggle = readStatus.dataset.linkedArray;
            Book.prototype = Object.create(Book.prototype);
            const toggleBook = new Book();

            if (myLibrary[parseInt(retreiveBookToToggle)].Read == "Yes") {
                toggleBook.Read = "No";
                myLibrary[parseInt(retreiveBookToToggle)].Read = toggleBook.Read;
            } else if (myLibrary[parseInt(retreiveBookToToggle)].Read == "No") {
                toggleBook.Read = "Yes";
                myLibrary[parseInt(retreiveBookToToggle)].Read = toggleBook.Read;
            }
            displayUI()
        }

        for (let key in myLibrarys) {
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            cardBody.appendChild(para);
        }
        index++;
    });
}

const addLibrary = document.querySelector(".submitBtn");
addLibrary.addEventListener("click", intakeData);

function intakeData() {
//Adding Book to Library (Definition)
    let Title = document.getElementById("title").value;
    let Author = document.getElementById("author").value;
    let Pages = document.getElementById("pages").value;
    let Read = document.getElementById("read").value;

    //Validation
    if (Title === "" || Author === "" || Pages === "" || Read === "") {
        return;
    }

    addBookToLibrary(Title, Author, Pages, Read);
    
    document.getElementById("bookForm").reset;
}