var entries = [];
$(function() {

	$('#addItem').mouseenter(function() {

		$('#addItem').animate({height: '50px', width: '50px', lineHeight: '45px'}, "fast");

	});

	$('#addItem').mouseleave(function() {

		$('#addItem').animate({height: '45px', width: '45px', lineHeight: '40px'}, "fast");

	});

});

$('#newItem').click(function() {

   var Description = $('#description').val();
   var Day = $('#date').val();
   var Time = $('#time').val();

   $('#itemsTable tbody').prepend("<tr><td>" + Description + "</td><td>"+ Day + "</td><td>" + Time + "</td><tr>");

   $('#form')[0].reset();
   localStorage.setItem('entries', entries);

});

function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}
