function calculateDaysBetweenDates(date1, date2) {
    // your code here
    var date1 = new Date(date1);
    var date2 = new Date(date2);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}

//test calculateDaysBetweenDates
var date1 = '2014-01-01';
var date2 = '2014-12-31';
var days = calculateDaysBetweenDates(date1, date2);
console.log(days); // should be 365

