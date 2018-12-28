/**
 * Author: Cleumir Souza
 * Description: File contains template to create an generic table.
 * Date: 28/12/2018
 */

createTable = async () => {
    let books = await getAllBooks('http://localhost:8000/api/livros');
    var nOfBooks = books.length;

    if (nOfBooks > 0) {

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.style.width = '80%';
        table.style.marginLeft = '10%';
        table.setAttribute('border', '1');
        table.setAttribute('cellspacing', '0');
        table.setAttribute('cellpadding', '5');

        // retrieve column header
        var col = [
            'name',
            'author',
            'category',
            'price',
            'qtdPages',
            'Actions'
        ];

        const tHead = document.createElement("thead");
        const hRow = document.createElement("tr");
        const tBody = document.createElement("tbody");

        // Create columns with header.
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = col[i];
            hRow.appendChild(th);
        }
        tHead.appendChild(hRow);
        table.appendChild(tHead);

        // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
        for (let i = 0; i < books.length; i++) {
            let bRow = document.createElement("tr");

            for (let j = 0; j < col.length; j++) {
                let td = document.createElement("td");
                if ((col.length - 1) === j) {
                    td.innerHTML = `<div class="actions">
                                    <span>
                                        <i id=${books[i]._id} onclick="deleteItem()" class="material-icons action-delete">delete</i>
                                    </span>
                                    <span>
                                        <i id=${books[i]._id} onclick="editItem()" class="material-icons action-edit">edit</i>
                                    </span>
                                </div>`;
                } else {
                    td.innerHTML = books[i][col[j]];
                }

                bRow.appendChild(td);
            }

            tBody.appendChild(bRow)
        }

        // Applay content.
        table.appendChild(tBody);
        var divContainer = document.getElementById("updateBooks");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
}
