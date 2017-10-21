var fails = 0;
var success = 0;

// CHANGE THE SIZE OF THE BUTTON ON HOVER
$(function()
{

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

	var entry = new Object();

	entry.desc = Description;
	entry.monthday = Day;
	entry.clock = Time;

	items1.push(entry);

	// Add values to table
    $('#itemsTable tbody').prepend("<tr class='animated fadeInLeft'><td>" + Description + "</td><td>"+ Day + "</td><td>" + Time + "</td><td>" + "<button type='button' class='btn btn-success pull-right' id='clear'>Clear</button><button type='button' class='btn btn-success pull-right' id='complete'>Complete</button>" + "</td><tr>");

	// Reset form
	$('#form')[0].reset();
	localStorage.setItem('entries', JSON.stringify(items1));

});

function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

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

	for (var i = 0; i < entries.length; i++) {

		console.log(entries[i]);

	}

	/*
	//loop through each entry
	for(var i= 0; i<entries.length;i++)
	{
		//get the string of the entered month until the slash and compare that to the current month. If it is lower the entry is removed
		if(parseInt(entries(i).monthday.slice(0,indexOf("/"))<curmonth))
		{
			remove(entries,i);
			fails++;
		}

		//if the month is equal the day needs to be checked
		else if (parseInt(entries(i).monthday.slice(0,indexOf("/"))==curmonth)) {
			//get the day by substringing the entered date after the /. compare to current day and if the entered is lower delete the entry

			if(parseInt(entries(i).monthday.slice(indexOf("/")+1)<curday))
			{
				remove(entries,i);
				fails++;
			}

			//if the days are equal time needs to be checked
			else if (parseInt(entries(i).monthday.slice(indexOf("/")+1)==curday)) {
				//hours is gotten by substringing the time until the :. Then compared to current time and if lower removed. if equal do for minutes

				if(parseInt(entries(i).clock.slice(0,indexOf(":"))<hours))
				{
						remove(entries,i);
						fails++;
				}
				else if (parseInt(entries(i).clock.slice(0,indexOf(":"))==hours)) {

					if (parseInt(entries(i).clock.slice(indexOf(":")+1)<=minutes)) {

							remove(entries,i);
							fails++;
					}
				}
			}

		}
	}

	//reprint the table
	for(var i= 0; i<entries.length;i++)
	{
		$('#itemsTable tbody').prepend("<tr class='animated fadeInLeft'><td>" + Description + "</td><td>"+ Day + "</td><td>" + Time + "</td><td>" + "<button type='button' class='btn btn-success pull-right' id='clear'>Clear</button><button type='button' class='btn btn-success pull-right' id='complete'>Complete</button>" + "</td><tr>");
	}

	*/
}
