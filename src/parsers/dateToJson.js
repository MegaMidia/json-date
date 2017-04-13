const dateToJson = (date) => {
    return {
        day : date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        hour: date.getHours(),
        minute: date.getMinutes()
    }
}
module.exports = dateToJson