var agent = require('webkit-devtools-agent');

setInterval(function() {
	for(var i=0;i<10000000;i++) {
		Date.now();
	}
},100);
