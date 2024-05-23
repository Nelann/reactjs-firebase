import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import db from "@/lib/firebase/db";

export const getAllTodos = async () => {
  try {
    const todosRef = collection(db, "todos");
    const q = query(todosRef);

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    throw new Error(error);
  }
};

export const createTodo = async (text) => {
  try {
    const todosRef = collection(db, "todos");

    await addDoc(todosRef, {
      text,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodo = async ({ todoId, text }) => {
  try {
    const todoRef = doc(db, "todos", todoId);

    await updateDoc(todoRef, {
      text,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const toggleTodo = async ({ todoId, completed }) => {
  try {
    const todoRef = doc(db, "todos", todoId);

    await updateDoc(todoRef, {
      completed,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTodo = async (todoId) => {
  try {
    const todoRef = doc(db, "todos", todoId);
    await deleteDoc(todoRef);
  } catch (error) {
    throw new Error(error);
  }
};
