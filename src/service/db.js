import { off, onValue, ref, remove, set } from "firebase/database";
import { firebaseDB } from "./firebase";

class Database {
  constructor() {
    this.database = firebaseDB;
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
