var socket = io();
        //listen 
        socket.on('connect', function() {
            console.log('Connected to the server');
        });

        socket.on('disconnect', function() {
            console.log('Connection cut');
        });


        //Send Info
        socket.emit('sendMessage', {
            user: 'Mike',
            message: 'Hello world'
        }, function(response) {
            console.log('respuestaServer', response);
        });

        //Listen info
        socket.on('sendServerMessage', function(message) {
            console.log('Message from server', message);
        });