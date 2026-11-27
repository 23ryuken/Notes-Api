import Note from "../models/Note.js";

export async function createNote(req, res) {
    try {
        const { title, content, tags } = req.body;

        const note = await Note.create({
            title,
            content,
            tags
        });

        return res.status(201).json(note);
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({ error: error.message });
        }

        console.error("createNote failed:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}