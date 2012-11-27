// Loader
// Loads gameslogs from any and every source

var Loader = function() {};

var Gamelog = null;

$(document).ready(function() {

	/*$("element(s)").fileReader( {
		id: "visualizer-loader",
		filereader: "./javascript/libraries/filereader.swf",
		expressInstall: "./javascript/libraries/expressInstall.swf",
		debugMode: false,
		callback: function() {
			alert("Filereader callback");
		}
	});*/

	if (window.File && window.FileReader && window.FileList && window.Blob) {
  		document.getElementById('visualizer-loader-files').addEventListener('change', handleFileSelect, false);
	} else {
		Log('The File APIs are not fully supported in this browser.');
	}
});

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

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                  '</li>');
    }
    document.getElementById('visualizer-loader-list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  

