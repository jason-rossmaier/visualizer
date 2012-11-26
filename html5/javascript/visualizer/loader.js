// Loader
// Loads gameslogs from any and every source

var Loader = function() {};

var Gamelog = null;

Loader.getGamelog = function(file, successCallback) {
	$.ajax({
		url: 'http://sig-game-dev.jacobfischer.me/gamelogs/' + file,
		dataType: "json",
		success: function(data) {
			Gamelog = data;
			Log("success getting gamelog: " + file);
			successCallback();
		},
		error: function() {
			Log("Error getting gamelog: " + file);
		}
	});
}