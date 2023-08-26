import asyncHandler from 'express-async-handler'
import Note from '../models/noteModel.js'

// @desc - create new note
// route POST /api/notes/new-note
// @access Private
const createNote = asyncHandler(async (req, res) => {
  const { userId, title, content, category } = req.body

  const note = await Note.create({
    userId,
    title,
    content,
    category,
  })

  if (note) {
    res.status(200).json(note)
  } else {
    res.status(400)
    throw new Error('Invalid note data')
  }
})

// @desc - Get all notes
// route GET /api/notes
// @access Private
const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find()

  if (notes) {
    res.status(200).json(notes)
  } else {
    res.status(400)
    throw new Error('Unable to get notes data')
  }
})

// @desc - Get single note
// route GET /api/notes/:id
// @access Private
const getSingleNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id)

  if (note) {
    res.status(200).json(note)
  } else {
    res.status(400)
    throw new Error('Unable to get note. Try again')
  }
})

// @desc - Update note
// route PUT /api/notes/update-note/:id
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id)
  if (note) {
    note.title = req.body.title || note.title
    note.content = req.body.content || note.content
    note.category = req.body.category || note.category

    const updatedNote = await note.save()
    res.status(200).json(updatedNote)
  } else {
    res.status(400)
    throw new Error('Unable to update note')
  }
})

// @desc - Delete note
// route DELETE /api/notes/delete-note/:id
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id)
  if (note) {
    res.status(200).json({ message: 'Note deleted successfully' })
  } else {
    res.status(400)
    throw new Error('Unable to delete Note. Try again')
  }
})

// @desc - Get note by category
// route GET /api/notes/notes-by-category
// @access Private
const getNoteByCategory = asyncHandler(async (req, res) => {
  const { category } = req.body
  const filteredNotes = await Note.find({ category: category })

  if (filteredNotes) {
    res.status(200).json(filteredNotes)
  } else {
    res.status(400)
    throw new Error('No notes found for selected category')
  }
})

// @desc - Get note by category
// route GET /api/notes/notes-by-category
// @access Private
const getNotesByUserId = asyncHandler(async (req, res) => {
  const { userId } = req.body
  const filteredNotes = await Note.find({ userId: userId })

  if (filteredNotes) {
    res.status(200).json(filteredNotes)
  } else {
    res.status(400)
    throw new Error('No notes found for selected category')
  }
})

export {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
  getNoteByCategory,
  getNotesByUserId,
}
