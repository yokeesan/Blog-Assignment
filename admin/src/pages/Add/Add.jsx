// AddBlog.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Add = ({ url }) => {
  const [image, setImage] = useState(null); // Initialize as null
  const [data, setData] = useState({
    title: "",
    description: "",
    content: "",
    date: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("content", data.content);
    formData.append("date", data.date);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/blogs/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setData({
          title: "",
          description: "",
          content: "",
          date: "",
        });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the blog");
    }
  };

  return (
    <div className="w-[70%] ml-[max(5vw,25px)] mt-[50px] text-[#6d6d6d] text-[16px]">
      <form className="flex flex-col gap-5" onSubmit={onSubmitHandler}>
        <div className="flex flex-col items-start">
          <p>Upload Blog Image</p>
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload area"
              className="w-[120px]"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="flex flex-col w-[max(40%,280px)]">
          <p>Blog Title</p>
          <input
            onChange={onChangeHandler}
            value={data.title}
            type="text"
            name="title"
            placeholder="Enter blog title"
            className="p-2 border"
            required
          />
        </div>
        <div className="flex flex-col w-[max(40%,280px)]">
          <p>Short Description</p>
          <input
            onChange={onChangeHandler}
            value={data.description}
            type="text"
            name="description"
            placeholder="Enter a short description"
            className="p-2 border"
            required
          />
        </div>
        <div className="flex flex-col w-[max(40%,280px)]">
          <p>Blog Content</p>
          <textarea
            onChange={onChangeHandler}
            value={data.content}
            name="content"
            rows="6"
            placeholder="Write blog content here"
            required
            className="p-2 border"
          />
        </div>
        <div className="flex flex-col w-[max(40%,280px)]">
          <p>Publication Date</p>
          <input
            onChange={onChangeHandler}
            value={data.date}
            type="date"
            name="date"
            className="p-2 border"
            required
          />
        </div>
        <button
          type="submit"
          className="max-w-[120px] border-none p-2 bg-black text-white cursor-pointer"
        >
          ADD BLOG
        </button>
      </form>
    </div>
  );
};

export default Add;
