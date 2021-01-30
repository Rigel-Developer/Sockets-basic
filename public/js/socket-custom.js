var socket = io()

//los metodos ON son para escuchar
socket.on('connect', function() {
    console.log("Conectado al servidor")
})
socket.on('disconnect', function() {
    console.log("Perdimos conexion con el servidor")
})

//los metodos emit son para enviar informacion  al backend


socket.emit('enviarMensaje', {
    usuario: 'Jhonny',
    mensaje: 'HOla backend'
}, function(resp) {
    console.log("Respuesta del servidor: ", resp)
})

//escuchar infomracion

socket.on('enviarMensaje', function(mensaje) {
    console.log("Servidor ", mensaje)
})