/**
 * myFilter: polyfill of Array.filter
 * @param callback
 * @returns {*[]}
 */
Array.prototype.myFilter = function (callback) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            resultArray.push(this[i]);
        }
    }
    return resultArray;
};
