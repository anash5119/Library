const myLibrary = [];

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
    const divCont = document.getElementById('bookContainer');

    for(let index = 0; index < myLibrary.length; index++){
        //console.log(myLibrary[index].title);
        let newBook = document.createElement("div");
        newBook.setAttribute('id', 'books'); 
        let content1 = document.createElement("p");
        let node1 = document.createTextNode(myLibrary[index].title);
        content1.appendChild(node1);
        newBook.appendChild(content1);

        console.log(myLibrary[index].title);
        divCont.appendChild(newBook)
    }

    //myLibrary.forEach((Book) => console.log(Book.title));
}

function openForm() {
    document.getElementById("formContainer").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("formContainer").style.display = "none";
  }