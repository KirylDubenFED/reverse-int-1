module.exports = function reverse (n) {
    const reverseInt = n +""
    return reverseInt.split("").reverse().join("")
}
