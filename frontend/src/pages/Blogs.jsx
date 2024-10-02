import React, { useEffect, useState } from "react";
import axios from "axios";

const Blogs = ({ url }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${url}/api/blogs/list`);
      console.log('API Response:', response.data); 
  
      if (response.data.success) {
        setBlogs(response.data.data);
      } else {
        console.error('Error fetching blogs:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };
  

  useEffect(() => {
    fetchBlogs();
  }, []); 

  return (
    <div className="my-10 px-4">
      <div className="text-center py-5">
        <h2 className="text-3xl font-semibold">Our Blogs</h2>
        <p className="text-gray-500 mt-2">
          Stay updated with the latest insights from our team of experts.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            
            <img
              src={`${url}/images/${blog.image}`} 
              alt={blog.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
           
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            
            <p className="text-gray-600 mb-4">{blog.description}</p>
            
            <p className="text-sm text-gray-500 mb-4">{new Date(blog.date).toLocaleDateString()}</p>
            
            <a
              href={`/blogs/${blog.slug}`}
              className="text-black text-end hover:underline font-medium"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
