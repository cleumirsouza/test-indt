/**
 * Author: Cleumir Souza
 * Description: File contains controller to handle table template.
 * Date: 28/12/2018
 */

let currentId = '';

/**
 * Method to call service to delete item by id.
 */
deleteItem = async () => {
    let e = window.event.target.id;
    let res;
    const del = confirm('Tem certeza que deseja deletar Item? ');
    if (del) {
        res = await deleteItemById(`http://localhost:8000/api/livro/${e}`);
        alert(res.message);
        createTable();
    }
}

/**
 * Method to call service to get item by id and set modal inputs.
 */
editItem = async () => {
    flagToCreate = false;
    let e = window.event.target.id;
    currentId = e;
    let res;

    res = await getBookById(`http://localhost:8000/api/livro/${e}`);
    setValuesInputsModal(res);
    location.href = '#open-modal';
}

/**
 * Open Modal in create mode.
 */
newOpenModal = () => {
    currentId = '';
    cleanModal();
}

/**
 * Method to call service to save or update an item.
 */
newItem = async () => {
    let items = getValuesInputsModal();
    let param = '';
    let res;

    items.map((data) => {
        param += `${data.id}=${data.value}&`;
    });

    if(!currentId) {
        res = await createNewBook('http://localhost:8000/api/livros', param);
    } else {
        res = res = await updateItemById(`http://localhost:8000/api/livro/${currentId}`, param);
    }

    createTable();
    location.href = '#';
    alert(res.message);
    cleanModal();
}