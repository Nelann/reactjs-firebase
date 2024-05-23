import {
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import auth from "@/lib/firebase/auth";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

githubProvider.setCustomParameters({
  prompt: "select_account",
});

export const login = async ({ email, password }) => {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data?.user;
  } catch (error) {
    throw new Error(error);
  }
};

export const register = async ({ email, password }) => {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data?.user;
  } catch (error) {
    throw new Error(error);
  }
};

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    const credential = GoogleAuthProvider.credentialFromResult(result);

    const token = credential.accessToken;
    const user = result.user;

    console.log(token);
    console.log(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const loginWithGithub = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);

    const credential = GithubAuthProvider.credentialFromResult(result);

    const token = credential.accessToken;
    const user = result.user;

    console.log(token);
    console.log(user);
  } catch (error) {
    throw new Error(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error);
  }
};
