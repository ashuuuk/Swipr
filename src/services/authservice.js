import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
import { auth } from "../firebase/config";



// -----------------------------
// SIGN UP
// -----------------------------
export async function signUp(email, password) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await sendEmailVerification(userCredential.user);

  return userCredential.user;
}
export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}
// -----------------------------
// LOGIN
// -----------------------------
export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
}

// -----------------------------
// LOGOUT
// -----------------------------
export async function logout() {
  await signOut(auth);
}

// -----------------------------
// RESET PASSWORD
// -----------------------------
export async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}