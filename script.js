
// THEN the current day is displayed at the top of the calendar

function currentDay() {
    var day = moment().format('dddd');
    var currentDay = $('#currentDay');
    currentDay.text(day);
};
currentDay();

$('.saveBtn').click(function(){
    // time - hour
    var time = $(this).siblings('textarea').attr('id')
    var val = $(this).siblings('textarea').val()
    localStorage.setItem(time, val);

    // get textarea
    // save it to localstorage
    // var nineAm = $('#nineAm').val();
    // localStorage.setItem('nineAm', nineAm);
    // var displayNine = localStorage.getItem('nineAm');
    // document.getElementById('nineAm').value = displayNine;
    // var tenAm = document.getElementById('tenAm').value;
    // localStorage.setItem('tenAm', tenAm);
    // var displayTen = localStorage.getItem('tenAm');
    // document.getElementById('tenAm').value = displayTen;
    // var elevenAm = document.getElementById('elevenAm').value;
    // localStorage.setItem('elevenAm', elevenAm);
    // var displayEleven = localStorage.getItem('elevenAm');
    // document.getElementById('elevenAm').value = displayEleven;
    // var noon = document.getElementById('noon').value;
    // localStorage.setItem('noon', noon);
    // var displayNoon = localStorage.getItem('noon');
    // document.getElementById('noon').value = displayNoon;
    // var onePm = document.getElementById('onePm').value;
    // localStorage.setItem('onePm', onePm);
    // var displayOne = localStorage.getItem('onePm');
    // document.getElementById('onePm').value = displayOne;
    // var twoPm = document.getElementById('twoPm').value;
    // localStorage.setItem('twoPm', twoPm);
    // var displayTwo = localStorage.getItem('twoPm');
    // document.getElementById('twoPm').value = displayTwo
    // var threePm = document.getElementById('threePm').value;
    // localStorage.setItem('threePm', threePm);
    // var displayThree = localStorage.getItem('threePm');
    // document.getElementById('threePm').value = displayThree;
    // var fourPm = document.getElementById('fourPm').value;
    // localStorage.setItem('fourPm', fourPm);
    // var displayFour = localStorage.get('fourPm');
    // document.getElementById('fourPm').value = displayFour;
    // var fivePm = document.getElementById('fivePm').value;
    // localStorage.setItem('fivePm', fivePm);
    // var displayFive = localStorage.getItem('fivePm');
    // document.getElementById('fivePm').value = displayFive;

});

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// loop
$( ".hour" ).each(function( index ) {
    // extract data-hour
   var hour = $(this).data("hour");
   // get current hour
   var currentHour = moment().hour();
    // compare
   if (currentHour < hour) {
    // future
    $(this).siblings('textarea').addClass('future')
   }else if(currentHour == hour) {
    // present
    $(this).siblings('textarea').addClass('present')
   }else {
    // past
    $(this).siblings('textarea').addClass('past')
   }
  });


// TODO on load we want to show values from localstorage
// WHEN I refresh the page
// THEN the saved events persist
// adding click event to save button ...function to save to local storage
// also displays user test after save button clicked"  