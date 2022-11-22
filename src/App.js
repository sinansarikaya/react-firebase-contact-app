import AppRouter from "./router/AppRouter";
import AuthContextProvider from "./context/AuthContextProvider";
import { ToastContainer } from "react-toastify";
import "./App.scss";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;
