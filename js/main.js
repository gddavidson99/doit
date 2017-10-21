var entries = [];
var fails = 0;
var success = 0;
localStorage.setItem('entries', entries);
// CHANGE THE SIZE OF THE BUTTON ON HOVER
$(function()
{
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

	// Transer values to variables
	var Description = $('#description').val();
	var Day = $('#date').val();
	var Time = $('#time').val();
	entries[entries.length]={desc:Description, monthday:Day, clock:Time};
	// Add values to table
    $('#itemsTable tbody').prepend("<tr class='animated fadeInLeft'><td>" + Description + "</td><td>"+ Day + "</td><td>" + Time + "</td><td>" + "<button type='button' class='btn btn-success pull-right'>Complete</button>" + "</td><tr>");

	// Reset form
	$('#form')[0].reset();
	localStorage.setItem('entries', entries);

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
	for(var i= 0; i<entries.length;i++)
	{
		if(parseInt(entries(i).monthday.slice(0,indexOf("/"))<curmonth))
		{
			remove(entries,i);
			fails++;
		}
		else if (parseInt(entries(i).monthday.slice(0,indexOf("/"))==curmonth) {
			if(parseInt(entries(i).monthday.slice(indexOf("/")+1)<curday)
			{
				remove(entries,i);
				fails++;
			}
			else if (parseInt(entries(i).monthday.slice(indexOf("/")+1)==curday) {
				if(parseInt(entries(i).clock.slice(0,indexOf(":"))<hours))
				{
						remove(entries,i);
						fails++;
				}
				else if (parseInt(entries(i).clock.slice(0,indexOf(":"))==hours) {

					else if (parseInt(entries(i).clock.slice(indexOf(":")+1)<=minutes) {
							remove(entries,i);
							fails++;
					}
				}
			}

		}
	}
	for(var i= 0; i<entries.length;i++)
	{
	$('#itemsTable tbody').prepend("<tr><td>" + Description + "</td><td>"+ Day + "</td><td>" + Time + "</td><tr>");
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







// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
//Progress Bar function
!function ($) {


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
