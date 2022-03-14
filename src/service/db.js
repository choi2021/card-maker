import {
  child,
  get,
  getDatabase,
  off,
  onValue,
  ref,
  remove,
  set,
} from "firebase/database";
import { firebaseApp } from "./firebase";

class Database {
  constructor() {
    this.app = firebaseApp;
    this.database = getDatabase(this.app);
  }

  writeData(userId, card) {
    set(ref(this.database, "users/" + userId + "/cards/" + card.id), card);
  }

  readData(userId, onUpdate) {
    const dbRef = ref(this.database, "users/" + userId + "/cards");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => off(dbRef);
  }

  removeData(userId, card) {
    return remove(ref(this.database, "users/" + userId + "/cards/" + card.id));
  }
}

export default Database;
