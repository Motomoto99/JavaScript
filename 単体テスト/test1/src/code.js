const isNumberInRange = (number, min, max) => {
    if (typeof number !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
        return false;
    }
    return number >= min && number <= max;
}