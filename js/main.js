//moves progress bar
// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

$(function() {

	$('#addItem').mouseenter(function() {

		$('#addItem').animate({height: '50px', width: '50px', lineHeight: '45px'}, "fast");

	});

	$('#addItem').mouseleave(function() {

		$('#addItem').animate({height: '45px', width: '45px', lineHeight: '40px'}, "fast");

	});

});


//determining success
function success(){
  return document.getElementById('     ').id;
}
//progress bar
function progressBar(){
var score = 0;
var success = success();
var attempts = document.getElementById("addItem").id;


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
		var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText('');
    } else {
      bar.setText(value);
    }

    bar.text.style.color = state.color;
  }
});
bar.text.style.fontFamily = '"Raleway", Avenir, sans-serif';
bar.text.style.fontSize = '2rem';
percent = succes/attempts;
bar.animate(percent);  // Number from 0.0 to 1.0
}
