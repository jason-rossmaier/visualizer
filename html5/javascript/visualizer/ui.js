// UI
// User Interface, basic HTML interfaces for things like player talk

var UI = function() {};

UI.elements = new Object();

$(document).ready(function(){
	
	UI.elements.canvases = $("#visualizer-canvases");

	UI.elements.timebar = $( "#visualizer-time-bar" ).slider({
		range: "min",
		value: 0,
		min: 0,
		max: 1,
		step: 0.001,
		slide: function( event, ui ) {
			Time.set(ui.value);
			$( "#visualizer-current-time" ).val( "Turn: " + ui.value );
		}
	});

	UI.elements.speedbar = $( "#visualizer-speed-bar" ).slider({
		range: "min",
		value: 9001,
		min: 1,
		max: 10000,
		step: 10,
		slide: function( event, ui ) {
			Time.msPerTurn = 10001-ui.value;
		}
	});

	UI.elements.playpauseButton = $('#visualizer-play-pause').click(function() {
		Time.invertPlaying();
	});

	UI.elements.nextturnButton = $('#visualizer-next-turn').click(function() {
		Time.nextTurn();
	});

	UI.elements.prevturnButton = $('#visualizer-prev-turn').click(function() {
		Time.prevTurn();
	});

	UI.elements.stopButton = $('#visualizer-stop').click(function() {
		Time.stop();
	});
});

UI.setTurns = function(turns) {
	UI.elements.timebar.slider('option', 'max', turns);
	UI.elements.timebar.slider('value', UI.elements.timebar.val());
}

UI.updateTime = function(time) {
	UI.elements.timebar.slider('value', time);
	$( "#visualizer-current-time" ).val( "Turn: " + time );
}