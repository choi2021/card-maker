import { firebaseApp } from "./firebase";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.app = firebaseApp;
    this.auth = getAuth(this.app);
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  async login(platform) {
    const response = await signInWithPopup(
      this.auth,
      this[`${platform}Provider`]
    );
    return response;
  }

  async logout() {
    return signOut(this.auth);
  }

  async stateChanged(fn) {
    return onAuthStateChanged(this.auth, fn);
  }
}

export default AuthService;
