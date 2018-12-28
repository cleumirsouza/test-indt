/**
 * Author: Cleumir Souza
 * Description: File contains endpoints to books.
 * Date: 28/12/2018
 *
 * @description: Request books from api.
 */

 /**
  * Endpoint to get all books.
  */
getAllBooks = async (url) => {
    return await request(url, 'get');
}

 /**
  * Endpoint to get book by Id.
  */
getBookById = async (url) => {
    return await request(url, 'get');
}

 /**
  * Endpoint to delete book by Id.
  */
deleteItemById = async (url) => {
    return await request(url, 'delete');
}

 /**
  * Endpoint to create a new book.
  */
createNewBook = async (url, param) => {
    return await request(url, 'post', param);
}

 /**
  * Endpoint to update book by Id.
  */
updateItemById = async (url, param) => {
    return await request(url, 'put', param);
}