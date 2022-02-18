module.exports = function reverse (n) {    
    m =n.toString().split("").reverse().join("");
    return parseFloat(m)
}

function towelSort(a) {
    let result = [];
      a.map((m, ind) => {
        if (ind % 2 === 0) {
            result.push(...m);
        } else {
            result.push(...m.reverse());
     }     
    })
return result
}