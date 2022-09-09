
// function to display time

function currentDay() {
    var day = moment().format('dddd');
    var currentDay = $('#currentDay');
    currentDay.text(day);
};
currentDay();



// adding click event to save button ...function to save to local storage
// also displays user test after save button clicked"
$('.saveBtn').click(function(){
    var nineAm = document.getElementById('nineAm').value;
    localStorage.setItem('nineAm', nineAm);
    var displayNine = localStorage.getItem('nineAm');
    document.getElementById('nineAm').value = displayNine;
    var tenAm = document.getElementById('tenAm').value;
    localStorage.setItem('tenAm', tenAm);
    var displayTen = localStorage.getItem('tenAm');
    document.getElementById('tenAm').value = displayTen;
    var elevenAm = document.getElementById('elevenAm').value;
    localStorage.setItem('elevenAm', elevenAm);
    var displayEleven = localStorage.getItem('elevenAm');
    document.getElementById('elevenAm').value = displayEleven;
    var noon = document.getElementById('noon').value;
    localStorage.setItem('noon', noon);
    var displayNoon = localStorage.getItem('noon');
    document.getElementById('noon').value = displayNoon;
    var onePm = document.getElementById('onePm').value;
    localStorage.setItem('onePm', onePm);
    var displayOne = localStorage.getItem('onePm');
    document.getElementById('onePm').value = displayOne;
    var twoPm = document.getElementById('twoPm').value;
    localStorage.setItem('twoPm', twoPm);
    var displayTwo = localStorage.getItem('twoPm');
    document.getElementById('twoPm').value = displayTwo
    var threePm = document.getElementById('threePm').value;
    localStorage.setItem('threePm', threePm);
    var displayThree = localStorage.getItem('threePm');
    document.getElementById('threePm').value = displayThree;
    var fourPm = document.getElementById('fourPm').value;
    localStorage.setItem('fourPm', fourPm);
    var displayFour = localStorage.get('fourPm');
    document.getElementById('fourPm').value = displayFour;
    var fivePm = document.getElementById('fivePm').value;
    localStorage.setItem('fivePm', fivePm);
    var displayFive = localStorage.getItem('fivePm');
    document.getElementById('fivePm').value = displayFive;

});

// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```