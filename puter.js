import express from "express";
import { init } from "@heyputer/puter.js/src/init.cjs";

const app = express();

app.use(express.json());
app.use(express.static("."));

// YOUR Puter auth token
const puter = init("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InYyIn0.eyJ0IjoidCIsInYiOiIyIiwidG9rZW5fdWlkIjoiMThkZDQxMDMtYzMyNi00NjVjLTk5MDUtMDExMDIwOTJmY2VjIiwidXUiOiJiRnhCMS9wb1R5K0M3NUcrK3RzWENnPT0iLCJzdSI6Im11azlZWG9UUzlTRGwydnEzRTBJU1E9PSIsImFpIjoiYkZ4QjEvcG9UeStDNzVHKyt0c1hDZz09IiwiZnVsbF9hY2Nlc3MiOnRydWUsImlhdCI6MTc4NjQ5MTEyOX0.9Cxr-6R_2k5P6j51WwVbv2iy4a3CHbKH2czVD7MKcvI");

app.post("/ai", async (req, res) => {
    try {
        const response = await puter.ai.chat(
            req.body.message,
            {
                model: "claude-sonnet-4-6"
            }
        );

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Running at http://localhost:3000");
});