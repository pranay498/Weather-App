import cors from "cors";
import express from "express";
import weatherRoutes from "./routes/weather.routes";
import { errorHandler } from "./utils/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ success: true, data: { status: "OK" } });
});

app.use("/api/v1/weather", weatherRoutes);
app.use(errorHandler);

export default app;
