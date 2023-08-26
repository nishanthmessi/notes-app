import express from 'express'
const router = express.Router()
import {
  createNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
  getNoteByCategory,
} from '../controllers/noteController.js'

router.get('/all-notes', getAllNotes)
router.get('/note/:id', getSingleNote)
router.post('/new-note', createNote)
router.put('/update-note/:id', updateNote)
router.delete('/delete-note/:id', deleteNote)
router.get('/notes-by-category', getNoteByCategory)

export default router
