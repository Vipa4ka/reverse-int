module.exports = function reverse (n) {    
    m =n.toString().split("").reverse().join("");
    return parseFloat(m)
}

