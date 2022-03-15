import { firebaseAuth, githubProvider, googleProvider } from "./firebase";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

class AuthService {
  async login(platform) {
    const authProvider = this.getProvider(platform);
    const response = await signInWithPopup(firebaseAuth, authProvider);
    return response;
  }

  async logout() {
    return signOut(firebaseAuth);
  }

  async stateChanged(fn) {
    return onAuthStateChanged(firebaseAuth, fn);
  }

  getProvider(platform) {
    switch (platform) {
      case "google":
        return googleProvider;
      case "github":
        return githubProvider;

      default:
        throw new Error(`unknown platform: ${platform}`);
    }
  }
}

export default AuthService;
