// useAuth.js
import { useState, useEffect, useContext, createContext } from "react";
import { app, db, auth, googleAuthProvider } from "../firebaseAuthClient";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// useAuth.js
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (response) => {
        setUser(response.user);
        console.log(user);
        return response.user;
      }
    );
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (response) => {
        setUser(response.user);
        return response.user;
      }
    );
  };

  const isLoggedIn = () => {
    return user != null;
  };

  const signout = () => {
    return signOut(auth).then(() => {
      setUser(null);
    });
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      // Redirect or perform additional actions after successful login
    } catch (error) {
      console.error(error);
      throw error; // Propagate the error to the caller
    }
  };

  const createUserRecord = async (user) => {
    const userRef = doc(db, "users", user.uid);
    try {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        createdAt: new Date().toISOString(),
        // ... any other default fields
      });
      console.log("User document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  const fetchUserRecord = async (uid) => {
    const userRef = doc(db, "users", uid);
    try {
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        console.log("Document data:", userSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        createUserRecord(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  // ... other auth functions

  return {
    user,
    signInWithGoogle,
    isLoggedIn,
    signin,
    signup,
    signout,
    createUserRecord,
    fetchUserRecord,
  };
}
