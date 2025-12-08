import serverless from "serverless-http";
import express from "express";
import cors from "cors";
import { handleDemo } from "../server/routes/demo";
import { handleChat } from "../server/routes/chat";
import { handleContact } from "../server/routes/contact";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get("/api/ping", (_req, res) => {
  const ping = process.env.PING_MESSAGE ?? "ping";
  res.json({ message: ping });
});

app.get("/api/demo", handleDemo);
app.post("/api/chat", handleChat);
app.post("/api/send-contact", handleContact);

export default serverless(app);
