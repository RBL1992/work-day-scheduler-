function currentDateTime() {
    var dateTime = moment().format('lll');
    // console.log(dateTime)
    var currentDay = $('#currentDay');
    currentDay.text(dateTime);
};
currentDateTime();