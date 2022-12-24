import { collection, CollectionReference } from "firebase/firestore";
import { store } from "services/firebase";
import { UserModel } from "utils/types/models";

function collectionFactory<T>(path: string) {
  if (!store) return null;
  return collection(store, path) as CollectionReference<T>;
}

const collections = {
  users: collectionFactory<UserModel>("users"),
};
export default collections;
