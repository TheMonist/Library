//Buttons
let myLibrary = [];
const addBook = document.querySelector(".addBook");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay")
const closeModalBtn = document.querySelector(".btnClose");
const addLibrary = document.querySelector(".addLibrary");

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
    this.read = read;
}

function addBookToLibrary() {
    let newBook = new Book(titleInput, authorInput, pagesInput, readInput);
    myLibrary.push(newBook);
    displayUI();
}
 

//Add to Page
function displayUI() {
    const bookContainer = document.querySelector(".container");

    //Removing previously generated div cards
    const removeDivs = document.querySelectorAll(".cardBody");
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    };
    
    let index = 0;
    //Loop over library array and display cards
    myLibrary.forEach(myLibrarys => {
        const cardBody = document.createElement("div");
        cardBody.classList.add("cardBody");
        container.appendChild(cardBody);

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.textContent = "REMOVE";

        removeBtn.dataset.linkedArray = index;
        
        cardBody.appendChild(removeBtn);

        removeBtn.addEventListener("click", removeBookFromLibrary);

        function removeBookFromLibrary(){
            let retriveBookToRemove = removeBtn.dataset.linkedArray;
            myLibrary.splice(parseInt(retriveBookToRemove), 1);
            cardBody.remove()
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
            const toggleBook = newBook;

            if (myLibrary[parseInt(retreiveBookToToggle)].Read == "Yes") {
                toggleBook.Read = "No";
                myLibrary[parseInt(retreiveBookToToggle)].Read = toggleBook.Read
            } else if (myLibrary[parseInt(retreiveBookToToggle)].Read == "No") {
                toggleBook.Read = "Yes"
                myLibrary[parseInt(retreiveBookToToggle)].Read = toggleBook.Read
            }
        }

        for (let key in myLibrarys) {
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            cardBody.appendChild(para);
        }
        index++;
    })
}

function intakeData() {
//Adding Book to Library (Definition)
    let titleInput = document.getElementById("title").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("pages").value;
    let readInput = document.getElementById("read").value;

    if ((titleInput === "") || (authorInput === "") || (pagesInput === "") || (readInput === null)) {
        return;
    }

    addBookToLibrary(title, author, pages, read);

    document.getElementById("bookForm").requestFullscreen;
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

addLibrary.addEventListener("click", intakeData); 