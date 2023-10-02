const myLibrary = [];
const divCont = document.getElementById('bookContainer');
const modal = document.getElementById('formContainer');
const newBook = document.getElementById('newBookButton');

function Book(title, author, pages, didRead){
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.didRead = didRead;
    
}

function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let didRead = document.getElementById('didRead').checked;

    myLibrary.push(new Book(title, author, pages, didRead));
    
    displayMyLibrary();

    document.getElementById("bookForm").reset();
    closeForm();
}

function displayMyLibrary(){
    // const divCont = document.getElementById('bookContainer');

    // for(let index = 0; index < myLibrary.length; index++){
    //     //console.log(myLibrary[index].title);
    //     let newBook = document.createElement("div");
    //     newBook.setAttribute('id', 'books'); 
    //     let titleElement = document.createElement("p");
    //     let titleNode = document.createTextNode(myLibrary[index].title);
    //     titleElement.appendChild(titleNode);
    //     newBook.appendChild(titleElement);

    //     console.log(myLibrary[index].title);
    //     divCont.appendChild(newBook);
    // }

    divCont.innerHTML='';

    myLibrary.forEach((Book) => createBookDiv(Book));
}

function createBookDiv(Book){
    //create book div
    let newBook = document.createElement("div");
    newBook.setAttribute('id', 'books'); 

    //create title block
    let titleElement = document.createElement("p");
    let titleNode = document.createTextNode(Book.title);
    titleElement.appendChild(titleNode);
    newBook.appendChild(titleElement);

    //create author block
    let authorElement = document.createElement("p");
    let authorNode = document.createTextNode(Book.author);
    authorElement.appendChild(authorNode);
    newBook.appendChild(authorElement);

    //create page block
    let pageElement = document.createElement("p");
    let pageNode = document.createTextNode(Book.pages + " pages");
    pageElement.appendChild(pageNode);
    newBook.appendChild(pageElement);

    //create read or not read block
    let readElement = document.createElement("button");
    readElement.addEventListener('click', (e) => {
        if(Book.didRead)
        {
            Book.didRead = false; 
            readElement.innerHTML = didRead(Book, readElement);
            readElement.style.backgroundColor = "white";
        }
        else{
            Book.didRead = true;
            readElement.innerHTML = didRead(Book, readElement);
            readElement.style.backgroundColor = "green";
        }
    });
    let readNode = document.createTextNode(didRead(Book, readElement));
    readElement.appendChild(readNode);
    newBook.appendChild(readElement);

    //create delete button
    let deleteElement = document.createElement("button");
    deleteElement.setAttribute('id', 'delete');
    deleteElement.addEventListener('click', (e) => deleteBook(Book));
    let deleteNode = document.createTextNode("Remove");
    deleteElement.appendChild(deleteNode);
    newBook.appendChild(deleteElement);

    //console.log(myLibrary[index].title);
    divCont.appendChild(newBook)
}

function didRead(Book, element){
    if(Book.didRead){
        element.style.backgroundColor = "green";
        return "Read";
    }
    else{
        element.style.backgroundColor = "white";
        return "Not Read";
    }
}

function deleteBook(Book){
    myLibrary.splice(myLibrary.indexOf(Book), 1);
    displayMyLibrary();
}

function openForm() {
    document.getElementById("formContainer").style.display = "block";
    document.getElementById("bg").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("bg").style.display = "none";
  }

// window.onclick = function(event) {
//     if (event.target == modal || event.target == newBook) {
//       return;
//     }
//     closeForm();
// }