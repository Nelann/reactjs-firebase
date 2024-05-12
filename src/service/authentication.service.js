import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import auth from "@/lib/firebase/auth";

export const login = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    return user;
  } catch (error) {
    throw new Error(error);
  }
};

export const register = async ({ email, password }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return user;
  } catch (error) {
    throw new Error(error);
  }
};
