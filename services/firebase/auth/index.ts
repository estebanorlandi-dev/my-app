import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "../app";

const auth = app ? getAuth(app) : null;
export const googleProvider = new GoogleAuthProvider();

export default auth;
