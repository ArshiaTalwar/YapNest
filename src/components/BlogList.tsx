import React, { useEffect, useState } from "react";
import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Blogs:", blogsData); // Debugging line
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error.message);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h2><i>Blog Preview!!</i></h2>
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default BlogList;
