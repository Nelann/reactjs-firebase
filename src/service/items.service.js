import { collection, getDocs, addDoc } from "firebase/firestore";
import db from "../lib/firebase/db";

export const getAllItems = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "items"));
    return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    throw new Error(error);
  }
};

export const createItem = async (value) => {
  try {
    await addDoc(collection(db, "items"), {
      name: value,
    });
  } catch (error) {
    throw new Error(error);
  }
};
