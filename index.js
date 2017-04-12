
const jsonToDate = (date) => {
    return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
}

const weekNames = {
    0 : 'sun',
    1 : 'mon',
    2 : 'tue',
    3 : 'wed',
    4 : 'thu',
    5 : 'fri',
    6 : 'sat'
}

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
