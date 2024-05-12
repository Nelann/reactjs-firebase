import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import db from "../lib/firebase/db";

export const getAllItems = async () => {
  try {
    const itemsRef = collection(db, "items");
    const querySnapshot = await getDocs(
      query(itemsRef, orderBy("name", "asc"))
    );
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
