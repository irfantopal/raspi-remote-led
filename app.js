// http package for our website
var http = require('http').createServer(handler); 
var fs = require('fs');
// socket.io for making a listener
var io = require('socket.io')(http)
// we need sudo-js to execute our ubuntu command
var sudo = require('sudo-js');
// we need sudo privileges
sudo.setPassword('yoursudopassword');

// listen to the port 8080
http.listen(8080);

// create our website
function handler (req, res) { 
	fs.readFile(__dirname + '/public/index.html', function(err, data) {
		// send OK to the browser
		res.writeHead(200, {'Content-Type': 'text/html'}); 
		res.write(data);
		return res.end();
  });
}

io.sockets.on('connection', function (socket) {
	// close the USB port 2 when somone connects
    var command0 = ['uhubctl', '-a', '0', '-l', '1-1', '-p 2'];
	// execute our command
    sudo.exec(command0);
	// on data send get the data
    socket.on('led', function(data) {
		// close/open the USB port 2
        var command = ['uhubctl', '-a', data.toString(), '-l', '1-1', '-p 2'];
		// execute our command
        sudo.exec(command);    
    });
});