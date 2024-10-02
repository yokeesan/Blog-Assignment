// routes/blogRoutes.js
import express from 'express';
import { addBlog, getBlogs, deleteBlog } from '../controllers/blogController.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
    },
});

const upload = multer({ storage: storage });

// Define routes
router.post('/add', upload.single('image'), addBlog);
router.get('/list', getBlogs);
router.post('/remove', deleteBlog);

export default router;
