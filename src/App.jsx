import styles from "./App.module.css";
import Login from "./pages/login/login";

function App({ auth }) {
  return (
    <>
      <div className={styles.login}>
        <Login auth={auth}></Login>
      </div>
    </>
  );
}

export default App;
