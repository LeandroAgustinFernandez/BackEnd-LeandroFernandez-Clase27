import dotenv from "dotenv";
dotenv.config();

const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@coderhousecluster.phsl88g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

export default { 
    mongoUrl: URL,
    jwtPrivate: process.env.JWT_PRIVATE_KEY
}

