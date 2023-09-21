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
    let didRead = document.getElementById('didRead').value;

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
    //     let content1 = document.createElement("p");
    //     let node1 = document.createTextNode(myLibrary[index].title);
    //     content1.appendChild(node1);
    //     newBook.appendChild(content1);

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
    let content1 = document.createElement("p");
    let node1 = document.createTextNode(Book.title);
    content1.appendChild(node1);
    newBook.appendChild(content1);

    //create author block
    let content2 = document.createElement("p");
    let node2 = document.createTextNode(Book.author);
    content2.appendChild(node2);
    newBook.appendChild(content2);

    //create page block
    let content3 = document.createElement("p");
    let node3 = document.createTextNode(Book.pages + " pages");
    content3.appendChild(node3);
    newBook.appendChild(content3);

    //create read or not read block
    let content4 = document.createElement("button");
    let node4 = document.createTextNode(didRead(Book));
    content4.appendChild(node4);
    newBook.appendChild(content4);

    //create delete button
    let content5 = document.createElement("button");
    content5.setAttribute('id', 'delete');
    content5.addEventListener('click', (e) => deleteBook());
    let node5 = document.createTextNode("Remove");
    content5.appendChild(node5);
    newBook.appendChild(content5);

    //console.log(myLibrary[index].title);
    divCont.appendChild(newBook)
}

function didRead(Book){
    if(Book.didRead){
        return "Read";
    }
    else{
        return "Not Read";
    }
}

function deleteBook(){

    myLibrary.splice(myLibrary.indexOf(this.title), 1);
    displayMyLibrary();
}

function openForm() {
    document.getElementById("formContainer").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("formContainer").style.display = "none";
  }

// window.onclick = function(event) {
//     if (event.target == modal || event.target == newBook) {
//       return;
//     }
//     closeForm();
// }