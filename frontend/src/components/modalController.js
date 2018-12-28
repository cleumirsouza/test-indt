
let items = [...document.getElementById('open-modal').getElementsByTagName('input')];

/**
 * Clean inputs values from modal.
 */
cleanModal = () => {
    items.map((data) => {
        data.value = '';
    });
}

/**
 * Get all values from inputs.
 */
getValuesInputsModal = () => {
    return items;
}

/**
 * Set values to input when use entry in edit mode.
 */
setValuesInputsModal = (values) => {
    items.map((data) => {
        data.value = values[data.id];
    });
}