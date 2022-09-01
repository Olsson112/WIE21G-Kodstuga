import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express()
const httpServer = createServer(app);
const port = 4000;
const io = new Server(httpServer, {
    cors: {
      origin: '*',
    }
});

app.use("/", express.static("./client"))

io.on("connection", (socket) => {
    console.log("Socket has connected: " + socket.id)

    socket.on("join", (socketRoomData) => {
        socket.leave(socketRoomData.roomToLeave)
        socket.join(socketRoomData.roomToJoin)
        socket.nickname = socketRoomData.nickname
        io.in(socketRoomData.roomToJoin).emit("welcome", `Välkommen ${socket.nickname}`)
    })

    socket.on("getRooms", () => {
        const filteredRoomsArray = convertRoomMap()

        io.emit("rooms", filteredRoomsArray)
    })

    socket.on("msg", (msgObj) => {
        console.log(msgObj)
        io.in(msgObj.joinedRoom).emit("msg", {msg: msgObj.msg, nickname: socket.nickname})
    })
})

const convertRoomMap = () => {
    /* 

    // NOTE: Alla ? skall ersättas med korrekt kod

    // Gör om map till en array med arrayer
    const convertedArray = Array.from(io.sockets.adapter.rooms)

    // Filtrera bort samtliga sockets
    const filteredRooms = convertedArray.filter(room => ?.has(?))

    // Plocka ut rum med socketIDs
    const roomsWithSocketID = filteredRooms.map((roomArray) => {
        return {room: ?, sockets: Array.from(?)}
    })

    // Plocka ut rum med socketIDs och nicknames
    const roomsWithIdsAndNickname = roomsWithSocketID.map((roomObj) => {
        const nicknames = roomObj.sockets.map((socketId) => {
            return { id: socketId, nickname: io.sockets.sockets.get(?).? }
        })
        return {room: roomObj.room, sockets: nicknames}
    })

    return roomsWithIdsAndNickname

    */
}

httpServer.listen(port, () => {
    console.log("Server is running on port " + port);
})


/*  

socket.emit('message', "this is a test"); //sending to sender-client only

socket.broadcast.emit('message', "this is a test"); //sending to all clients except sender

socket.broadcast.to('game').emit('message', 'nice game'); //sending to all clients in 'game' room(channel) except sender

socket.to('game').emit('message', 'enjoy the game'); //sending to sender client, only if they are in 'game' room(channel)

socket.broadcast.to(socketid).emit('message', 'for your eyes only'); //sending to individual socketid

io.emit('message', "this is a test"); //sending to all clients, include sender

io.in('game').emit('message', 'cool game'); //sending to all clients in 'game' room(channel), include sender

io.of('myNamespace').emit('message', 'gg'); //sending to all clients in namespace 'myNamespace', include sender

socket.emit(); //send to all connected clients

socket.broadcast.emit(); //send to all connected clients except the one that sent the message

socket.on(); //event listener, can be called on client to execute on server

io.sockets.socket(); //for emiting to specific clients

io.sockets.emit(); //send to all connected clients (same as socket.emit)

io.sockets.on() ; //initial connection from a client.

*/