import express from 'express';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import fs from 'fs'; // Import fs to handle file system operations
import connectDB from './config/db.js';
import blogRoutes from './routes/blogRoutes.js';

// Ensure the uploads directory exists
const uploadsDir = 'uploads';
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true }); // Create the uploads directory if it doesn't exist
}

// Create __dirname equivalent in ES modules
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 4000;

// Connect to the database
connectDB();

// Middleware
const allowedOrigins = ['https://blog-frontend-eight-plum.vercel.app/']; // Replace with your actual frontend URL
app.use(cors({
    origin: allowedOrigins,
    credentials: true, // If your frontend needs to send cookies or other credentials
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the uploads directory
app.use('/images', express.static(path.join(__dirname, 'uploads')));

// API endpoints
app.get('/', (req, res) => {
    res.send("API WORKING");
});

// Use blog routes
app.use('/api/blogs', blogRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
