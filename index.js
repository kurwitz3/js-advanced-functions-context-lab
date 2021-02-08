/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(array){
    let person = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return person
}
function createEmployeeRecords(array){
    return array.map(createEmployeeRecord)
}
    function createTimeInEvent(dates){
        let [date,hour] = dates.split(' ')
        let hourNumber = parseInt(hour,10)
         this.timeInEvents.push({
             type:'TimeIn',
             hour: hourNumber,
             date: date
         })
         return this 
 
 }

 function createTimeOutEvent(dateStamp){
    let [date,hour] = dateStamp.split(' ')
    let hourNumber = parseInt(hour,10)
     this.timeOutEvents.push({
         type:'TimeOut',
         hour: hourNumber,
         date: date
     })
     return this
 }

 function hoursWorkedOnDate(dates){
    let timeIn = this.timeInEvents.find(function(e){
        return e.date === dates
    })
    let timeOut = this.timeOutEvents.find(function(e){
        return e.date === dates
    })
    let timeInStamp =  timeIn.hour / 100
    let timeOutStamp = timeOut.hour / 100

    return   timeOutStamp - timeInStamp
}

function wagesEarnedOnDate(date){
    let wage = hoursWorkedOnDate.call(this,date) * this.payPerHour
    return wage
}
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(array,name){
    return array.find(e => {return e.firstName === name})
 }
 
 function calculatePayroll(array){
   return array.reduce((acc,value) => acc + allWagesFor.call(value),0)
    
    
}