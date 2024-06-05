import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import db from "@/lib/firebase/db";
import auth from "@/lib/firebase/auth";

export const getTodos = async () => {
  try {
    const currentUserId = auth.currentUser.uid;

    const todosRef = collection(db, "todos");

    const q = query(todosRef, where("ownerId", "==", currentUserId));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    throw new Error(error);
  }
};

export const getTodo = async (todoId) => {
  try {
    const todoRef = doc(db, "todos", todoId);

    const todoSnapshot = await getDoc(todoRef);

    if (!todoSnapshot.exists()) {
      throw new Error("Todo not found");
    }

    return todoSnapshot.data();
  } catch (error) {
    throw new Error(error);
  }
};

export const createTodo = async ({ text, ownerId }) => {
  try {
    const todosRef = collection(db, "todos");
    const createdAt = new Date().toISOString();

    await addDoc(todosRef, {
      text,
      ownerId,
      createdAt,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateTodo = async ({ todoId, text }) => {
  try {
    const todoRef = doc(db, "todos", todoId);
    const createdAt = new Date().toISOString();

    await updateDoc(todoRef, {
      text,
      createdAt,
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
