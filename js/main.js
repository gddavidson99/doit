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

//function success(){
  //return document.getElementById('     ').id;
//}


// var bar = new ProgressBar.SemiCircle(container, {

//determining success


//progress bar

//html for progress bar

//type="text/css">
//<div id="container"></div>

/*
function progressBar(){
var score = 0;
var success = success();
var attempts = document.getElementById("#addItem").id;


var bar = new ProgressBar.SemiCircle(container, {
//background
=======
function progressBar(){
var score = 0;
var success = success();
var attempts = document.getElementById("addItem").id;


var bar = new ProgressBar.SemiCircle(container, {

>>>>>>> parent of ef57367... kinda works
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
<<<<<<< HEAD
	//changing colors
=======
>>>>>>> parent of ef57367... kinda works
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
<<<<<<< HEAD
//the only new part
var percent = succes/attempts;
bar.animate(percent);  // Number from 0.0 to 1.0
}
*/

$('#newItem').click(function() {

   var Description = $('#description').val();
   var Day = $('#date').val();
   var Time = $('#time').val();

   $('#itemsTable tbody').prepend("<tr><td>" + Description + "</td><td>"+ Day + "</td><td>" + Time + "</td><tr>");

   $('#form')[0].reset();
   localStorage.setItem('entries', entries);

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
