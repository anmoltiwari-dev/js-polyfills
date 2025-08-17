/**
 * myReduce: polyfill of Array.reduce
 * @param callback
 * @param initialValue
 * @returns {*}
 */
Array.prototype.myReduce = function (callback, initialValue) {
    for (let i = 0; i < this.length; i++) {
        initialValue = callback.call(initialValue, this[i], i);
    }
    return initialValue;
};