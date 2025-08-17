/**
 * myMap: polyfill of Array.map
 * @param callback
 * @returns {*[]}
 */
Array.prototype.myMap = function (callback) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i]), i, this);
    }
    return resultArray;
};