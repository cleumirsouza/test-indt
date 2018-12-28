/**
 * Author: Cleumir Souza
 * Description: File contains endpoints to books.
 * Date: 08/13/2018
 *
 * @description: Request books from api.
 */
getAllBooks = async (url)=> {
    return await request(url, 'get');
}

getBookById = async (url)=> {
    return await request(url, 'get');
}
