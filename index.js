const jsonToDate = require('./src/parsers/jsonToDate')
const weekNames = require('./src/constants/weekNames')

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
    weekNames,
    periodValid
}
