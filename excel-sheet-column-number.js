/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        result += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, columnTitle.length - 1 - i);
    }

    return result;
};

console.log(titleToNumber("BBBHHJ"));