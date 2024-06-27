const doubleNumbers = function (numbers) {
    return numbers.map(number => number * 2);
}

const filterEvenNumbers = (numbers) => {
    return numbers.filter(num => num % 2 === 0);
}

const calculateTotal = (numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const findFirstNegative = (numbers) => {
    return numbers.find(num => num < 0);
}
