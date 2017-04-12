const jsonToDate = (date) => {
    return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
}
module.exports = jsonToDate