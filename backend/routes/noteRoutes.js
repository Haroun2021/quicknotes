const express = require("express");
const router = express.Router();
const Note = require("../models/note");

// GET all notes
router.get("/", async (req, res) => {
  const notes = await Note.find().sort({ updatedAt: -1 });
  res.json(notes);
});

// GET one note
router.get("/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
});

// POST create
router.post("/", async (req, res) => {
  const newNote = await Note.create(req.body);
  res.json(newNote);
});

// PUT update
router.put("/:id", async (req, res) => {
  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedNote);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
});

module.exports = router;
