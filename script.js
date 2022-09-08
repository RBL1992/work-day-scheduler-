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
    var nineAm = document.getElementById('nineAm').value;
    localStorage.setItem('nineAm', nineAm);
    var tenAm = document.getElementById('tenAm').value;
    localStorage.setItem('tenAm', tenAm);
    var elevenAm = document.getElementById('elevenAm').value;
    localStorage.setItem('elevenAm', elevenAm);
    var noon = document.getElementById('noon').value;
    localStorage.setItem('noon', noon);
    var onePm = document.getElementById('onePm').value;
    localStorage.setItem('onePm', onePm);
    var twoPm = document.getElementById('twoPm').value;
    localStorage.setItem('twoPm', twoPm);
    var threePm = document.getElementById('threePm').value;
    localStorage.setItem('threePm', threePm);
    var fourPm = document.getElementById('fourPm').value;
    localStorage.setItem('fourPm', fourPm);
    var fivePm = document.getElementById('fivePm').value;
    localStorage.setItem('fivePm', fivePm);

});