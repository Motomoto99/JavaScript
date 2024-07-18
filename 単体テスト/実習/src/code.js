function checkDate(dateString) {
    if (!dateString) {
        return 1; // 引数が無い
    }
    if (dateString.length !== 8) {
        return 2; // 文字列長が8以外
    }
    if (!/^\d{8}$/.test(dateString)) {
        return 3; // YYYYMMDDの形式でない
    }

    const year = parseInt(dateString.substring(0, 4), 10);
    const month = parseInt(dateString.substring(4, 6), 10);
    const day = parseInt(dateString.substring(6, 8), 10);

    if (year < 1 || year > 2999 || month < 1 || month > 12 || day < 1) {
        return 3; // YYYYMMDDの形式でない
    }

    const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day > daysInMonth[month - 1]) {
        return (month === 2 && day === 29) ? 4 : 3 //うるう年の誤りまたはYYYYMMDDの形式ではない
    }

    return 0; // 正常

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
}
