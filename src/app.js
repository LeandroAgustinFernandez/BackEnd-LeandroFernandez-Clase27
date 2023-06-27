// ? Utils config
import { __dirname, PORT } from "./utils.js";
import MongoDbConnection from './dao/MongoDbConnection.js';
// ? Archivos de rutas.
import CartRouterClass from "./routes/CartRouter.class.js";
import ProductsRouterClass from "./routes/ProductRouter.class.js";
import ViewsRouterClass from "./routes/ViewRouter.class.js";
import SessionRouterClass from "./routes/SessionRouter.class.js";
// ? Handlebars 
import handlebars from "express-handlebars";
// ? Express
import express from "express";
// ? CORS
import cors from "cors";
// ? SocketIO
import { Server } from "socket.io";
// ? Cookies
import cookieParser from "cookie-parser";
// ? Passport
import passport from "passport";
import initializePassport from "./config/passport.config.js";

MongoDbConnection.getConnection();

const app = express();

const viewsRouter = new ViewsRouterClass();
const cartRouter = new CartRouterClass();
const sessionRouter = new SessionRouterClass();
const productRouter = new ProductsRouterClass();

initializePassport();
app.use(passport.initialize());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.use("/", viewsRouter.getRouter());
app.use("/api/session", sessionRouter.getRouter());
app.use("/api/products", productRouter.getRouter());
app.use("/api/carts", cartRouter.getRouter());

const socketio = app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

const io = new Server(socketio);
app.set("socketio", io);
