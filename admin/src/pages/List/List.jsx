import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ListBlogs = ({ url }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get(`${url}/api/blogs/list`);
    if (response.data.success) {
      setBlogs(response.data.data);
    } else {
      toast.error('Error fetching blogs');
    }
  };

  const removeBlog = async (blogId) => {
    const response = await axios.post(`${url}/api/blogs/remove`, { id: blogId });
    await fetchBlogs();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error('Error removing blog');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="list-blogs flex flex-col">
      <p className="text-lg mb-4">All Blog Posts</p>
      <div className="list-table">
        <div className="list-table-format bg-gray-100 font-bold hidden md:grid grid-cols-[0.5fr_2fr_2fr_1fr_0.5fr] items-center gap-2 p-3 text-sm border">
          <b>Image</b>
          <b>Title</b>
          <b>Description</b>
          <b>Date</b>
          <b>Action</b>
        </div>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="list-table-format grid grid-cols-[1fr_3fr_2fr] md:grid-cols-[0.5fr_2fr_2fr_1fr_0.5fr] items-center gap-4 p-3 border text-sm"
          >
            <img
              src={`${url}/images/` + blog.image}
              alt=""
              className="w-12"
            />
            <p>{blog.title}</p>
            <p className="hidden md:block">{blog.description}</p>
            <p>{new Date(blog.date).toLocaleDateString()}</p>
            <p
              onClick={() => removeBlog(blog._id)}
              className="cursor-pointer text-red-600"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBlogs;
