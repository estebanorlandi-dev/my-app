import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { User as FirebaseUser } from "firebase/auth";
import { UserModel } from "utils/types/models";
import { auth } from "services/firebase";

interface User {
  isLoading: boolean;
  user: FirebaseUser | null;
  data: UserModel | null;
}
interface FirebaseContext {
  auth: User;
}
const init: FirebaseContext = {
  auth: { isLoading: true, user: null, data: null },
};
const ctx = createContext<FirebaseContext>(init);

interface Props {
  children?: ReactNode | ReactNode[];
}
function FirebaseProvider({ children }: Props) {
  const [_auth, setAuth] = useState<User>(init.auth);
  useEffect(() => {
    const unsuscribe = auth?.onAuthStateChanged((user) => {});
  }, []);
  return <ctx.Provider value={{ auth: _auth }}>{children}</ctx.Provider>;
}

export default FirebaseProvider;

export function useFirebase() {
  return useContext(ctx);
}

export function useAuth() {
  return useContext(ctx).auth;
}
