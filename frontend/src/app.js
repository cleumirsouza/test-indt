/**
 * Author: Cleumir Souza
 * @description: File to start application, get data and render components.
 * Date: 28/12/2018
 */



onUpdateBooks = () => {
    let books = document.getElementById("updateBooks");
    let carousel = document.getElementById("showcase");

    if (carousel.style.display === 'none') {
        carousel.style.display = 'block';
        books.style.display = 'none';
    } else {
        carousel.style.display = 'none';
        books.style.display = 'block';
        createTable();

       
//         //Month Arrays -----------------------------------------------------------
// var monthsEnglish = ["January","February","March","April", "May", "June", "July", "August", "September","October","November","December"];
// var monthsSpanish = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre ","Octubre ","Noviembre","Diciembre"];
// //Static content ---------------------------------------------------------
// document.write("<table border='1' width='200'>")
// document.write("<tr><th>Month #</th><th>English</th><th>Spanish</th></tr>");
// //Dynamic content --------------------------------------------------------
// for(var i=0; i<13;i++)
// {
// 	document.write("<tr><td>" + (i+1) + "</td><td>" + monthsEnglish[i] + "</td><td>" + monthsSpanish[i] +"</td></tr>");
// }
// //Static content  --------------------------------------------------------
// document.write("</table>")
    }
}

createTable = async ()=> {
    let books = await getAllBooks('http://localhost:8000/api/livros');
    console.log('load data', books);
// console.log('testesl', getAllBooks());
var nOfBooks = books.length;

if(nOfBooks>0){
    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");
    table.style.width = '50%';
    table.setAttribute('border', '1');
    table.setAttribute('cellspacing', '0');
    table.setAttribute('cellpadding', '5');
    
    // retrieve column header ('Name', 'Email', and 'Mobile')

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
    
    // CREATE TABLE BODY .
    
    // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
    for (let i = 0; i < books.length; i++) {
    
        let bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
        
        for (let j = 0; j < col.length; j++) {
            let td = document.createElement("td");
            
            if ((col.length - 1) === j) {
                td.innerHTML = 'hahahahhaha'
            } else {
                td.innerHTML = books[i][col[j]];
            }
            bRow.appendChild(td);
        }
        
        tBody.appendChild(bRow)

    }
    table.appendChild(tBody);	
    
    
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("updateBooks");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    
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
    console.log('load data', books);

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