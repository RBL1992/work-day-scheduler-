// function to display time

function currentDateTime() {
    var dateTime = moment().format('lll');
    // console.log(dateTime)
    var currentDay = $('#currentDay');
    currentDay.text(dateTime);
};
currentDateTime();

// adding click event to save button ...function to save to local storage
$('.saveBtn').click(function(){
    var nineAm = document.getElementById('9am').value;
    localStorage.setItem('9am', nineAm);
});