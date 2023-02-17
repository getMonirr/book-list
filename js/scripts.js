const formSubmit = document.getElementById('book-form');
const bookList = document.getElementById('book-list');



// events
formSubmit.addEventListener('submit', handleSubmit);
bookList.addEventListener('click', handleRemove);



// function
function handleSubmit(e) {
    e.preventDefault();
    const title = getInputValue('title');
    const author = getInputValue('author');
    const isbn = getInputValue('isbn');

    if (title === '' || author === '' || isbn === '') {
        showWarning('Please fill all input', 'error');
        return;
    }

    const book = new Book(title, author, isbn);

    // create ui
    const tr = document.createElement('tr');
    const list = `
    <th>${book.title}</th>
    <th>${book.author}</th>
    <th>${book.isbn}</th>
    <th><a href="#">X</a></th>
    `;
    tr.innerHTML = list;
    bookList.appendChild(tr);

    showWarning('New Book Added', 'success');

    setInputValue('title','');
    setInputValue('author','');
    setInputValue('isbn','');

}



// constructor function
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// get input value;

function getInputValue(id) {
    return document.getElementById(id).value;
}
// set input value
function setInputValue(id, value) {
    const targetInput = document.getElementById(id);
    targetInput.value = value;
}
// show warning

function showWarning(message, warnClass) {

    const div = document.createElement('div');
    div.innerText = message;
    div.className = warnClass;
    const container = document.getElementById('container-id');
    container.insertBefore(div, formSubmit);

    setTimeout(() => {
        div.style.display = 'none';
    }, 3000);
}

// handle remove

function handleRemove(e) {
    if (e.target.hasAttribute('href')) {
        e.target.parentNode.parentNode.remove();
    }
}