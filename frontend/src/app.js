/**
 * Author: Cleumir Souza
 * @description: File to start application, get data and render components.
 * Date: 28/12/2018
 */

document.getElementById('btnVitrine').innerText = 'Atualizar Cadastro';

/**
 * Method fired when user change view.
 */
onUpdateBooks = () => {
    let showBooks = document.getElementById("showBooks");
    let carousel = document.getElementById("showcase");

    if (carousel.style.display === 'none') {
        carousel.style.display = 'block';
        showBooks.style.display = 'none';
        document.getElementById('btnVitrine').innerText = 'Atualizar Cadastro';
        loadData();
    } else {
        carousel.style.display = 'none';
        showBooks.style.display = 'block';
        document.getElementById('btnVitrine').innerText = 'Vitrine'
        createTable();
    }
}

/**
 * Method to resquest dada from api using async (like promise).
 */
loadData = async ()=> {
    let response = [];
    let books;

    // get all books.
    books = await getAllBooks('http://localhost:8000/api/livros');

    if (books.length) {
        response = handleData(books);
    } else {
        // empty template.
    }
    currentData = response;

    start(response);
}

// init application.
loadData();