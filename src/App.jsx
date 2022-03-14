import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styles from "./App.module.css";
import Login from "./pages/login/login";
import Main from "./pages/main/main";

function App({ auth, ImgFileInput }) {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const handleLogin = (value) => {
    setUser(value);
    navigate("/main");
  };

  const handleLogout = () => {
    setUser(null);
    auth.logout();
  };

  useEffect(() => {
    auth.stateChanged((User) => {
      if (User) {
        handleLogin(User.uid);
      } else {
        navigate("/");
      }
    });
  }, [auth]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles.login}>
            <Login
              auth={auth}
              login={handleLogin}
              logout={user && handleLogout}
            />
          </div>
        }
      ></Route>
      <Route
        path="/main"
        element={
          <div className={styles.main}>
            <Main logout={user && handleLogout} ImgFileInput={ImgFileInput} />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
