const { io } = require('../server')

io.on('connection', (client) => {
    console.log("Usuario conectado")

    client.on('disconnect', () => {
        console.log('Usuario desconetado')
    })

    // escuchar al cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data)

        client.broadcast.emit('enviarMensaje', data)
            // if (mensaje.usuario) {
            //     callback({
            //         resp: "todo salio BIEN"
            //     })
            // } else {
            //     callback({
            //         resp: "todo salio MAL"
            //     })
            // }
    })

    //enviar mensaje al cliente

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Welcome al Sistema'
    })

})