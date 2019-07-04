const { io } = require('../server');

io.on('connection', (client)=>{

    console.log('User connected');

    client.emit('sendServerMessage',{
        user: 'Server Admin',
        message: 'Welcome to the Jungle'
    });

    client.on('disconnect',()=>{
        console.log('User Disconnected');
    });

    client.on('sendMessage', (data, callback)=>{
         //console.log(data);
        client.broadcast.emit('sendServerMessage',data);

        // if (message.user){
        //     callback({
        //         resp:'Everything goes well'
        //     });
        // } else {
        //     callback({
        //         resp:'Maaaallll'
        //     })
        // }

    });

});
