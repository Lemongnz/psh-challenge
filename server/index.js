import express from "express";
import bodyParser from "body-parser";
import AppService from "./app.service.js";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = parseInt(process.env.PORT || "3001");

// Middleware
const logMiddleware = ({ method, url, body }, res, next) => {
  console.log(
    `Request: ${method} - ${url} - ${
      method === "POST" ? JSON.stringify(body) : ""
    }`
  );
  next();
};

app.use(logMiddleware);

const appService = new AppService();

// Route
app.get("/api/hackathons", (req, res) => {
  res.json(appService.getHackathons());
});

app.get("/api/top-users", (req, res) => {
  const limit = parseInt(req.query.limit || "10");
  res.json(appService.getTopUsers(limit));
});

app.listen(PORT, () => {
  console.log(`The server is running, Port: ${PORT}`);
});
