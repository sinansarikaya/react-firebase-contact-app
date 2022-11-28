import { firebase } from "./firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);

// Create a new user
export const createUser = async (name, surname, email, password, navigate) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: `${name} ${surname}`,
    });
    navigate("/");
    toastSuccessNotify("Registered successfully!");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

// Profile update
export const userProfileUpdate = (name, surname, email, password, navigate) => {
  const displayName = `${name} ${surname}`;
  updateProfile(auth.currentUser, {
    displayName: displayName,
    email: email,
    password: password,
  })
    .then(() => {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email, displayName })
      );
      navigate("/");
      toastSuccessNotify("Registered successfully!");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
    });
};

// Login Function
export const loginWithEmail = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
    toastSuccessNotify("Logged in successfully!");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

// Login With Google
export const loginWithGoogle = async (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      navigate("/");
      toastSuccessNotify("Logged in successfully!");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
    });
};

// Logout Function
export const logOut = (navigate) => {
  signOut(auth);
  toastSuccessNotify("Logged out successfully!");
  navigate("/login");
};

// Login Control Function
export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email, displayName, photoURL })
      );
    } else {
      localStorage.removeItem("currentUser");
      setCurrentUser(false);
    }
  });
};

// Reset Function
export const passwordReset = (navigate, email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      navigate("/login");
      toastWarnNotify("Please check your mail box!");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
    });
};
