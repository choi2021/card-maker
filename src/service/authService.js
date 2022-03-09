import { firebaseApp } from "./firebase";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.app = firebaseApp;
    this.auth = getAuth(this.app);
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  async login(platform) {
    return signInWithPopup(this.auth, this[`${platform}Provider`]);
  }
}

export default AuthService;
