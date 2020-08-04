const removeFromArray = function(array, value) {
    let deleteList = Array.from(arguments).slice(1);

    for (i = 0; i < deleteList.length; i++) {
        const index = array.indexOf(deleteList[i]);
            if (index > -1) {
                array.splice(index, 1);
            }
    }
    return array;
}

module.exports = removeFromArray
