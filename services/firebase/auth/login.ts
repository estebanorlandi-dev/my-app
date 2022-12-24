import { signInWithPopup, UserCredential } from "firebase/auth";
import { auth, googleProvider } from "services/firebase";

interface Response {
  error: {
    code: string;
    msg: string;
  } | null;
  user: UserCredential | null;
}
async function login(): Promise<Response> {
  if (!auth) return { error: null, user: null };

  try {
    const credentials = await signInWithPopup(auth, googleProvider);
    return { error: null, user: credentials };
  } catch (e: any) {
    return {
      error: { code: e.code, msg: e.message },
      user: null,
    };
  }
}

export default login;
