const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// добавляем книгу в библиотеку
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks(); // обновляем
}

// функция отображенияя книг
function displayBooks() {
    const container = document.getElementById("library-container");
    container.innerHTML = ""; // очищаем перед обновлением

   for (let i = 0; i < myLibrary.length; i++){
     const book = myLibrary[i];
     const index = i;

     const bookCard = document.createElement("div"); //карточка для книги
     bookCard.classList.add("book-card");

     const titleElement = document.createElement("h3");
     titleElement.textContent = book.title;
     bookCard.appendChild(titleElement);

     const authorElement = document.createElement("p");
     authorElement.textContent = `Автор: ${book.author}`;
     bookCard.appendChild(authorElement);
     
     const pagesElement = document.createElement("p");
     pagesElement.textContent = `Страниц: ${book.pages}`;
     bookCard.appendChild(pagesElement);

     const readElement = document.createElement("p");
     readElement.textContent = "Прочитано: ";

     const readStatus = document.createElement("span");
     readStatus.classList.add("read-status"); 
     readStatus.textContent = book.read ? "Да" : "Нет";
     readElement.appendChild(readStatus);
     bookCard.appendChild(readElement);

     const toggleReadButton = document.createElement("button");
     toggleReadButton.classList.add("toggle-read");
     toggleReadButton.textContent = "Изменить статус";
     toggleReadButton.setAttribute("data-index", index); //сохраняем индекс в атрибуте data-index добавляяя в кнопку
     bookCard.appendChild(toggleReadButton);

     const removeButton = document.createElement("button");
     removeButton.classList.add("remove-book");
     removeButton.textContent = "Удалить";
     removeButton.setAttribute("data-index", index);
     bookCard.appendChild(removeButton);

     container.appendChild(bookCard);
   };
     addEventListeners();
}
    
 function addEventListeners() {
   const toggleButtons = document.querySelectorAll(".toggle-read");
        
    toggleButtons.forEach(function(button) {
     button.addEventListener("click", function() {
     const index = button.getAttribute("data-index");
     myLibrary[index].read = !myLibrary[index].read;
     displayBooks();
        });
    });
  
  const removeButtons = document.querySelectorAll(".remove-book");
   
     removeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
        const index = button.getAttribute("data-index");
        myLibrary.splice(index, 1);
        displayBooks();
        });
     });
}
  
// открытие и закрытие окнаa
const newBookBtn = document.getElementById("newBookBtn");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close-btn");

newBookBtn.addEventListener("click", () => {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// обработка формы
const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", function(event) {
    event.preventDefault(); // без перезагрузки страницы
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value === "Да";
    
    addBookToLibrary(title, author, pages, read);
    
    bookForm.reset(); // очищаем форму
    popup.style.display = "none"; // закрываем форму
});






