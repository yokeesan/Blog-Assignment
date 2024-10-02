import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddBlog from "./pages/Add/Add";
import ListBlogs from "./pages/List/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="min-h-screen bg-gray-100">
      <ToastContainer />
      <Navbar />
      <hr className="border-none h-px bg-gray-400" />
      <div className="flex">
        <Sidebar className="w-[240px] bg-gray-100 border-r border-gray-300" />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/add" element={<AddBlog url={url} />} />
            <Route path="/list" element={<ListBlogs url={url} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
