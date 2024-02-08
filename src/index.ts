import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import path from "path";
import { dbConnect } from "./config/db_options";
import { router } from "./routes/routes";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import { pass } from "./config/passport_config";
import http from "http";
import { Socket } from "socket.io";
import { Message } from "./models/Message";
import { UserController } from "./controllers/UserController";

dotenv.config({ path: require("find-config")(".env") });

const app = express();
const PORT = 3000;

// connect to database
dbConnect(process.env.DATABASE_URL)
  .then((resp) => console.log(resp))
  .catch((e) => console.log(e?.message));

// Middleware for static assets
app.use(express.static(path.join(__dirname + "/public")));

// aplication middlewares
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

// session
app.use(
  session({
    secret: process.env.SECRET_KEY || "",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

pass(passport, process.env.SECRET_KEY);

// App routes
app.use(router);

// initiaize socket.io
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// listen to socket connection
io.on("connection", (socket: Socket) => {
  socket.on("private message", ({ reciever, sender, message }) => {
    io.emit("private message-" + reciever, { message, sender });
    const newMessage = new Message({
      body: message,
      reciever,
      sender,
      time: Date.now(),
      group_index: sender + reciever.split("").reverse().join(""),
    });

    UserController.getUserById(
      sender,
      (err: any, user: { name: string; avatar: string }) => {
        newMessage.sender_name = user.name;
        newMessage.sender_avatar = user.avatar;
        newMessage.save();
      }
    );
  });
});

// start the server
server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
