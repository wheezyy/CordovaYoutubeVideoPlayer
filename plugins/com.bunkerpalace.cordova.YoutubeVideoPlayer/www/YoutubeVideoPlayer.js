var exec = require('cordova/exec');

function YoutubeVideoPlayer() {}

YoutubeVideoPlayer.prototype.openVideo = function(YTid, callback) {
	exec(function(result) {
		console.log(result);
		if(callback){
			callback(result);
		}
	},
	function(error) {
		console.log(error);
		if(callback){
			callback(error);
		}
	},
	"YoutubeVideoPlayer",
	"openVideo",
	[YTid]
	);
}

var YoutubeVideoPlayer = new YoutubeVideoPlayer();
module.exports = YoutubeVideoPlayer
