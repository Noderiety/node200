var Hapi = require('hapi')
	, argv = require('yargs').argv
	, port = argv.port || 8000
	, host = 'localhost'
	// Create a server with a host and port
	, server = new Hapi.Server(host, port);

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply('hello world');
    }
});

// Start the server
server.start();