import { getFirestore } from "firebase/firestore";
import app from "../app";

const store = app ? getFirestore(app) : null;

export default store;
