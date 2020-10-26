const pow = (x, n) => {
    if (checkWholeNumber(n)) {
        return x ** n;
    }
    return NaN;
}

const checkWholeNumber = n => {
    if (n % 1 !== 0 || n < 0) return false;
    return true;
}
