//moves progress bar
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
var entries = [];
$(function() {

	$('#addItem').mouseenter(function() {

		$('#addItem').animate({height: '50px', width: '50px', lineHeight: '45px'}, "fast");

	});

	$('#addItem').mouseleave(function() {

		$('#addItem').animate({height: '45px', width: '45px', lineHeight: '40px'}, "fast");

	});

});


// var bar = new ProgressBar.SemiCircle(container, {

//determining success
/*
function success(){
  return document.getElementById('     ').id;
}
*/
//progress bar

//html for progress bar

//type="text/css">
//<div id="container"></div>
/*
function progressBar(){
var score = 0;
var success = success();
var success = 1//success();
var attempts = 2//document.getElementById("add").id;


var bar = new ProgressBar.SemiCircle(container, {

  strokeWidth: 6,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#ff0505'},
  to: {color: '##ffffff'},
  // Set default step function for all animate calls
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    score = 100*(succes/attempts);
    if (score === 0) {
      bar.setText('');
    } else {
      bar.setText(score);
    }

    bar.text.style.color = state.color;
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';
percent = succes/attempts;
bar.animate(percent);  // Number from 0.0 to 1.0
}
*/

$('#addItem').click(function() {
   var Description = $('#description').val();
   var Day = $('#day').val();
   var Time = $('#time').val();
  if($("#description").val() == '') {
    $('#alert').html("<strong>Warning!</strong> You left the description empty");
    $('#alert').fadeIn().delay(1000).fadeOut();
    return false;
   }
   if($("#date").val() == '') {
     $('#alert').html("<strong>Warning!</strong> You left the date empty");
     $('#alert').fadeIn().delay(1000).fadeOut();
     return false;
    }
    if($("#time").val() == '') {
      $('#alert').html("<strong>Warning!</strong> You left the time empty");
      $('#alert').fadeIn().delay(1000).fadeOut();
      return false;
     }
     entries[entries.length]={desc:Description, monthday:Day, clock:Time};
   $('#itemsTable').prepend("<tr><input id='check' name='check' type='checkbox'/><td>" + Description + "</td><td>"+ Day + "</td><td>" + Time + "</td><tr>");
   $('#form')[0].reset();
   localStorage.setItem('entries', entries);
   return false;
});

if(localStorage.getItem('entries')) {
$('#entries').html(localStorage.getItem('entries'));
}
});
function loadin()
{

}
function remove(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
}
