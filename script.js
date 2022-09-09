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