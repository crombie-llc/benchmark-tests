a/src/network/Connection.cpp
b/src/network/Connection.cpp
-20,9 +20,9 @@ bool Connection::send(const Packet& packet) {
     Socket* socket = getSocket();
   if (!socket) {
       return false;
   }
   
     return socket->write(packet.data(), packet.size());
 }