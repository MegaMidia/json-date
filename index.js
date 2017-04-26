const jsonToDate = require('./src/parsers/jsonToDate')
const weekNames = require('./src/constants/weekNames')
const dateToJson = require('./src/parsers/dateToJson')

console.log("json-date@0.0.4")

const periodValid = (datePeriod) => {
    let today = new Date()

    let todayDate = new Date();
    todayDate.setHours(0)
    todayDate.setMinutes(0)
    todayDate.setSeconds(0)
    todayDate.setMilliseconds(0);

    let dateIn = datePeriod.in;
    let dateOut = datePeriod.out;
 
    return ( 
        datePeriod && (
            datePeriod.undefined || (
                (today.getHours() / 60) + today.getMinutes() >= (dateIn.hour / 60) + dateIn.minute )  &&  
                (today.getHours() / 60) + today.getMinutes() <= (dateOut.hour / 60) + dateOut.minute )  &&   
                todayDate.getTime() >= jsonToDate(dateIn).getTime() &&
                todayDate.getTime() <= jsonToDate(dateOut).getTime() &&
                datePeriod.week[ weekNames[today.getDay()] ] != false 
            )
        )
    );  
}

module.exports = {
    jsonToDate,
    dateToJson,
    weekNames,
    periodValid
}
