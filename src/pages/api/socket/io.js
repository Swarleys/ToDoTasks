const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", async (socket) => {
  console.log(`user connected: ${socket.id}`);

  socket.on("addTodo", (todo) => {
    socket.broadcast.emit("addTodo", todo);
  });

  socket.on("updateTodo", (todo) => {
    socket.broadcast.emit("updateTodo", todo);
  }
  );

  socket.on("toggleTodo", (id, completed) => {
    socket.broadcast.emit("toggleTodo", id, completed);
  });

  socket.on("removeTodo", (id) => {
    console.log("removeTodo", id);
    socket.broadcast.emit("removeTodo", id);
  } );

  socket.on("disconnect", () => {
    console.log("user disconnected " + socket.id);
  });
});

httpServer.listen(3001, () => {
  console.log("listening on *:3001");
});
