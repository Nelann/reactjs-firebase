import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import auth from "@/lib/firebase/auth";

export const useUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return () => unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
};
