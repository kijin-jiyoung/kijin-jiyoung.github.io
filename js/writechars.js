//CONTROL VALUES
var charWidth = 2.5;
var spaceWidth = 8;
var animSpeed = 20;
var fadeSec = 0.5;
var lineSpace = 25;

var text = "we're getting married!";
var moreText =
	"Lee kijin & Yoon jiyoung 23.06.24 Sat 11:30 Banpo Floating Island";

function writeChars(p, t, lim) {
	var zone = document.getElementById(p);
	var width = 0;
	var top = 0;
	console.log(zone);
	var chars = t.split("");
	for (var i = 0; i < chars.length; i++) {
		var s =
			"<span id ='" +
			p +
			"char" +
			i +
			"' class='writer' style='top:" +
			top +
			"px; left:" +
			width +
			"px;animation:charAnim " +
			fadeSec +
			"s linear " +
			i / animSpeed +
			"s forwards;'>" +
			chars[i] +
			"</span>";
		var node = document.createElement("div");
		node.innerHTML = s;
		zone.appendChild(node);
		var blah = document.getElementById(p + "char" + i);
		if (blah.offsetWidth == 0) {
			width += spaceWidth;
		} else {
			width += blah.offsetWidth + charWidth;
		}
		if (width >= lim && blah.offsetWidth == 0) {
			width = 0;
			top += lineSpace;
		}
		console.log(width);
	}
}

writeChars("para1", text, 200);
setTimeout(function () {
	writeChars("para2", moreText, 200);
}, 2000);
