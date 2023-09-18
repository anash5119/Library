const myLibrary = [];

function Book(title, author, pages, didRead){
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.didRead = didRead;
    
}

function addBookToLibrary(){
    let title = prompt("Book Title?");
    let author = prompt("Author?");
    let pages = prompt("Number of Pages?");
    let didRead = prompt("Did you already read it?");

    myLibrary.push(new Book(title, author, pages, didRead));

    displayMyLibrary();
}

function displayMyLibrary(){
    // for(let index = 0; index < myLibrary.length; index++){
    //     console.log(myLibrary[index].title);
    // }

    myLibrary.forEach((Book) => console.log(Book.title));
}
