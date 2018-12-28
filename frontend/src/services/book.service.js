/**
 * Author: Cleumir Souza
 * Description: File contains endpoints to books.
 * Date: 28/12/2018
 *
 * @description: Request books from api.
 */
getAllBooks = async (url) => {
    return await request(url, 'get');
}

getBookById = async (url) => {
    return await request(url, 'get');
}

deleteItemById = async (url) => {
    return await request(url, 'delete');
}

createNewBook = async (url, param) => {
    return await request(url, 'post', param);
}

updateItemById = async (url, param) => {
    return await request(url, 'put', param);
}