// controllers/blogController.js
import Blog from '../models/blog.js';

// Add a new blog
export const addBlog = async (req, res) => {
    try {
        const { title, description, content, date } = req.body;
        const image = req.file ? req.file.filename : null; // Handle image upload

        if (!image) {
            return res.status(400).json({ success: false, message: "Image is required" });
        }

        const newBlog = new Blog({
            title,
            description,
            content,
            date,
            image,
        });

        await newBlog.save();
        res.status(201).json({ success: true, message: "Blog added successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all blogs
export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ success: true, data: blogs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a blog
export const deleteBlog = async (req, res) => {
    const { id } = req.body; // Assuming ID is sent in the request body
    try {
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }
        res.status(200).json({ success: true, message: "Blog deleted successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
