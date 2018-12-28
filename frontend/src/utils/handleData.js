/**
 * Author: Cleumir Souza
 * Description: File contains methods to handle data.
 * Date: 28/12/2018
 */

// Method to manipuate data before send to template.
handleData = (data) => {
    let items = [];
    items.item = data[0];
    data.shift();
    items.recommendation = [...data];

    return items;
}