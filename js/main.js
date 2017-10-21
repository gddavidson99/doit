var fails = 0;
var success = 0;

// CHANGE THE SIZE OF THE BUTTON ON HOVER
$(function() {

	loadin();

	$('#addItem').mouseenter(function()
	{
		$('#addItem').animate({height: '50px', width: '50px', lineHeight: '45px'}, "fast");
	});

	$('#addItem').mouseleave(function()
	{
		$('#addItem').animate({height: '45px', width: '45px', lineHeight: '40px'}, "fast");
	});

});

// New Item is clicked
$('#newItem').click(function() {

	var items1 = new Array();
	items1 = JSON.parse(localStorage.getItem('entries'));

	// Transer values to variables
	var Description = $('#description').val();
	var Day = $('#date').val();
	var Time = $('#time').val();

	entries[entries.length]={desc:Description, monthday:Day, clock:Time};


	var entry = new Object();

	entry.desc = Description;
	entry.monthday = Day;
	entry.clock = Time;

	items1.push(entry);

	var entry = new Object();
	entry.desc = Description;
	entry.monthday = Day;
	entry.clock = Time;

	for(var i = 0; i<items1.length;i++)
	{
		console.log(items1[i]);
	}

	// Add values to table
    $('#itemsTable tbody').prepend("<tr class='animated fadeInLeft'><td>" + Description + "</td><td>"+ Day + "</td><td>" + Time + "</td><td>" + "<button type='button' class='btn btn-success pull-right'>Complete</button>" + "</td><tr>");

	// Reset form
	$('#form')[0].reset();
	localStorage.setItem('entries', JSON.stringify(items1));
	localStorage.setItem('itemsTable', itemsTable);

});

function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

function loadin()
{
	var curday = getDate();
	var curmonth = getMonth();
	var hours = getHours();
	var minutes = getMinutes();
	entries = localStorage.getItem('entries');

function loadin()
{

	var entries = new Array();

	//Get current time
	var curday = new Date().getDate();
	var curmonth = new Date().getMonth();
	var hours = new Date().getHours();
	var minutes = new Date().getMinutes();

	//get stored variable

	entries = JSON.parse(localStorage.getItem('entries'));
	localStorage.setItem('entries', JSON.stringify(entries));

	/*

	if(localStorage.)
	entries = localStorage.getItem('entries');
	console.log(entries);

	//loop through each entry
>>>>>>> 9ea687c4ff0e425125315994e0d9ca18c6fcf1a0
	for(var i= 0; i<entries.length;i++)
	{
		if(parseInt(entries(i).monthday.slice(0,indexOf("/"))<curmonth))
		{
			remove(entries,i);
			fails++;
<<<<<<< HEAD
		}
		else if (parseInt(entries(i).monthday.slice(0,indexOf("/"))==curmonth) {
			if(parseInt(entries(i).monthday.slice(indexOf("/")+1)<curday)
			{
				remove(entries,i);
				fails++;
			}
			else if (parseInt(entries(i).monthday.slice(indexOf("/")+1)==curday) {
=======

		}

		//if the month is equal the day needs to be checked

			//get the day by substringing the entered date after the /. compare to current day and if the entered is lower delete the entry

			if(parseInt(entries(i).monthday.slice(indexOf("/")+1)<curday))
			{
				remove(entries,i);
				fails++;

			}

			//if the days are equal time needs to be checked

				//hours is gotten by substringing the time until the :. Then compared to current time and if lower removed. if equal do for minutes

>>>>>>> 9ea687c4ff0e425125315994e0d9ca18c6fcf1a0
				if(parseInt(entries(i).clock.slice(0,indexOf(":"))<hours))
				{
						remove(entries,i);
						fails++;

				}
<<<<<<< HEAD
				else if (parseInt(entries(i).clock.slice(0,indexOf(":"))==hours) {

					else if (parseInt(entries(i).clock.slice(indexOf(":")+1)<=minutes) {
=======
				else if (parseInt(entries(i).clock.slice(0,indexOf(":"))==hours)) {


					if (parseInt(entries(i).clock.slice(indexOf(":")+1)<=minutes)) {




					if (parseInt(entries(i).clock.slice(indexOf(":")+1,indexOf(":")+3)<=minutes)) {


>>>>>>> 9ea687c4ff0e425125315994e0d9ca18c6fcf1a0
							remove(entries,i);
							fails++;

					}
				}
			}

		}
	}
<<<<<<< HEAD
	for(var i= 0; i<entries.length;i++)
	{
	$('#itemsTable tbody').prepend("<tr><td>" + Description + "</td><td>"+ Day + "</td><td>" + Time + "</td><tr>");
}
}
=======

	*/

	//reprint the table
	for(var i = 0; i < entries.length; i++)
	{
		$('#itemsTable tbody').prepend("<tr class='animated fadeInLeft'><td>" + entries[i].desc + "</td><td>"+ entries[i].monthday + "</td><td>" + entries[i].clock + "</td><td>" + "<button type='button' class='btn btn-success pull-right' id='clear'>Clear</button><button type='button' class='btn btn-success pull-right' id='complete'>Complete</button>" + "</td><tr>");
	}


}

// //function move() {
//     var elem = document.getElementById("myBar");
//     var width = 10;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         } else {
//             width++;
//             elem.style.width = width + '%';
//             elem.innerHTML = width * 1 + '%';
//         }
//     }
// }





>>>>>>> 9ea687c4ff0e425125315994e0d9ca18c6fcf1a0

/*
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
//Progress Bar function

<<<<<<< HEAD
$('.progress .bar').progressbar();           // bootstrap 2
$('.progress .progress-bar').progressbar();
$(document).ready(function() {
$('.progress .progress-bar').progressbar({display_text: 'center', use_percentage: true, amount_format: function(p, t) {return success + ' of ' + (success+fails);}});
});
=======

    // PROGRESSBAR CLASS DEFINITION
    // ============================

    var Progressbar = function (element) {
        this.$element = $(element);
    }

    Progressbar.prototype.update = function (value) {
        var $div = this.$element.find('div');
        var $span = $div.find('span');
				var value = success/(success+fails);
        $div.attr('aria-valuenow', value);
        $div.css('width', value + '%');
        $span.text(value + '% Complete');

}(window.jQuery);
*/
>>>>>>> 9ea687c4ff0e425125315994e0d9ca18c6fcf1a0
