import React, { useState } from "react";
import { db } from "./Firebase"; // Ensure the db is properly initialized and imported
import { collection, addDoc } from "firebase/firestore";
import BlogList from "./BlogList";

const Blogs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveBlog = async () => {
    try {
      // Ensure the collection reference is valid
      const blogsCollection = collection(db, "blogs");
      
      // Add blog document
      const docRef = await addDoc(blogsCollection, {
        title,
        content,
        createdAt: new Date(),
      });
      console.log("Blog saved with ID:", docRef.id);
    } catch (error: any) {
      console.error("Error saving blog:", error.message);
    }
  };

  return (
    <div  className="blogs" style={{backgroundImage:"url('')", width: "100%", 
      objectFit: "cover",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
       backgroundPosition: 'center',
       height: '100%',
       backgroundColor:"#F4C2C2",
       marginBottom:"0px"
      }}>
      <h1>Yappers Zone</h1>
     
 
      <h5>Title:<input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
      /></h5>

      <h5> Yapp here:<textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}   // Set the number of visible rows (height)
  cols={90}
      /></h5>
      <button onClick={saveBlog}>Save Blog</button>
      <BlogList/>
    </div>
  );
};

export default Blogs;
