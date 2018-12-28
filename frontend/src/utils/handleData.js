// Method to manipuate data before send to template.
handleData = (data) => {
    let items = [];
    items.item = data[0];
    data.shift();
    items.recommendation = [...data];
    
    return items;
}