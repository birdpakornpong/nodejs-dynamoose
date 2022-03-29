function countZero(number) {
    let countZero = 0
    for (let i = 1; i <= number; i++) {
        countZero += i.toString().replace(/[1-9]/g,"").length
    }
    return countZero
}

console.log('count',countZero(10000))
