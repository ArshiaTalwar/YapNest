import { db } from "./src/components/Firebase.tsx";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

// Add user to Firestore
export const addUser = async (userId, email) => {
  try {
    await addDoc(collection(db, "users"), {
      userId,
      email,
      createdAt: new Date(),
    });
    console.log("User added to Firestore");
  } catch (error) {
    console.error("Error adding user:", error.message);
  }
};

// Fetch user from Firestore
export const getUser = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    return userDoc.exists() ? userDoc.data() : null;
  } catch (error) {
    console.error("Error fetching user:", error.message);
  }
};
