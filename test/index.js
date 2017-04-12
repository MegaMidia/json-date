const assert = require('assert')

describe( "Date validations" , () => {

    let dateIn = {
        day: 10,
        month: 3,
        year: 2017,
        hour: 0,
        minute: 0
    }

    let dateOut = {
        day: 12,
        month: 3,
        year: 2017,
        hour: 5,
        minute: 59
    }

    let week = {
        'sun' : true,
        'mon' : true,
        'tue' : true,
        'wed' : true,
        'thu' : true,
        'fri' : true,
        'sat' : true
    }

    let datePeriod = {
        in : dateIn,
        out : dateOut,
        week,
        undefined: false
    }


    const DateUtil = require('../index');

    it( "Should return right dates", function(){
        let fromJsonDate = DateUtil.jsonToDate( { day: 30, month: 8, year: 2017 } );
        assert.equal( fromJsonDate.getDate(), 30 )
        assert.equal( fromJsonDate.getMonth() + 1, 8 )
        assert.equal( fromJsonDate.getFullYear(), 2017 )
    })

    it( "Should verify if the date period is not valid", function(){
        datePeriod.in.day = 30
        datePeriod.in.month = 4
        datePeriod.in.year = 2000
        datePeriod.out.day = 20
        datePeriod.out.month = 1
        datePeriod.out.year = 2100
        datePeriod.in.hour = 0
        datePeriod.out.hour = 23
        datePeriod.week[ DateUtil.weekNames[new Date().getDay()] ] = false
        assert.equal( DateUtil.periodValid( datePeriod ), false, "Date period is valid");
    }) 
    it( "Should verify if the date period is valid and return true", function(){
        datePeriod.in.day = 30
        datePeriod.in.month = 4
        datePeriod.in.year = 2000
        datePeriod.out.day = 20
        datePeriod.out.month = 1
        datePeriod.out.year = 2100
        datePeriod.in.hour = 0
        datePeriod.out.hour = 23

        for( let index in datePeriod.week ){
            datePeriod.week[index] = true;
        }

        assert.equal( DateUtil.periodValid( datePeriod ), true, "Date period is not valid");
    }) 
})