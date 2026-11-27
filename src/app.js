import express from "express";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/notes", noteRoutes);

app.get("/health", (req, res) => {
    return res.status(200).json({
        status: "ok"
    });
});

export default app;