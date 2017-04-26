const jsonToDate = require('./src/parsers/jsonToDate')
const weekNames = require('./src/constants/weekNames')
const dateToJson = require('./src/parsers/dateToJson')

console.log("json-date@0.0.2")

const periodValid = (datePeriod) => {
    let today = new Date()

    let todayDate = new Date();
    todayDate.setHours(0)
    todayDate.setMinutes(0)
    todayDate.setSeconds(0)
    todayDate.setMilliseconds(0);

    let dateIn = datePeriod.in;
    let dateOut = datePeriod.out;
 
    console.log(today.getMinutes() >= dateIn.minute )
    console.log(today.getMinutes() <= dateOut.minute )
    console.log(today.getHours() >= dateIn.hour) 
    console.log(today.getHours() <= dateOut.hour )
    console.log(todayDate.getTime() >= jsonToDate(dateIn).getTime())
    console.log(todayDate.getTime() <= jsonToDate(dateOut).getTime())
    console.log(datePeriod.week[ weekNames[today.getDay()] ] != false  )
    
    return ( 
        datePeriod && (
            datePeriod.undefined || (
                today.getMinutes() >= dateIn.minute && 
                today.getMinutes() <= dateOut.minute &&    
                today.getHours() >= dateIn.hour &&  
                today.getHours() <= dateOut.hour &&   
                todayDate.getTime() > jsonToDate(dateIn).getTime() &&
                todayDate.getTime() < jsonToDate(dateOut).getTime() &&
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
