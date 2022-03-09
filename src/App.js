import "./App.css";
import Login from "./pages/login/login";

function App({ auth }) {
  return (
    <>
      <Login auth={auth}></Login>
    </>
  );
}

export default App;
