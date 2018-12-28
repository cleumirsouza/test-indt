/**
 * Method to create cards by type.
 */
templateCard = (typeCard, data, level = '')=> {
    let tempCard = '';
    
    switch (typeCard) {
        case type.RECOMENDATION:
            tempCard = `<div class="item level${level}">`;    
            break;
        case type.ITEM:
            tempCard = `<div class="book">`;
        default:
            break;
    }

    return  tempCard + `
        <div class="card-img-item">
            <img class="card-img" src=${data.thumbnail} </img>
        </div>
        <div class="card-price">
            <p class="card-book-name">${data.name} </p>
            <div class="price-by">
                <span>Preço: </span>
                <span class="price-by-value"> ${data.price} </span> 
            </div>
            <div class="card-payment">
                <span> sem juros </span>
            </div>
        </div>
    </div>`;
}