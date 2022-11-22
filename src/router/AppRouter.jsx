import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import AddContact from "../components/contactCard/addContact/AddContact";
import ContactList from "../components/contactCard/contactList/ContactList";
import Navbar from "../components/nav/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/form/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/form/Register";
import PasswordReset from "../pages/form/PasswordReset";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import Profile from "../pages/form/Profile";

const AppRouter = () => {
  const LoginRouter = () => {
    const { currentUser } = useContext(AuthContext);

    return !currentUser ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<ContactList />} />
          <Route path="/contact-list" element={<ContactList />} />
          <Route path="/add-contact" element={<AddContact />} />
        </Route>

        <Route path="/login" element={<LoginRouter />}>
          <Route path="" element={<Login />} />
        </Route>

        <Route path="/register" element={<LoginRouter />}>
          <Route path="" element={<Register />} />
        </Route>

        <Route path="/password-reset" element={<LoginRouter />}>
          <Route path="" element={<PasswordReset />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
