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
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import Profile from "../pages/form/Profile";
import PrivateRouter from "./PrivateRouter";
import Footer from "../components/footer/Footer";

const AppRouter = () => {
  const [contacts, setContacts] = useState();

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
          <Route
            path="/contact-list"
            element={<ContactList contacts={contacts} />}
          />
          <Route path="/add-contact" element={<PrivateRouter />}>
            <Route
              path=""
              element={
                <AddContact contacts={contacts} setContacts={setContacts} />
              }
            />
          </Route>
          <Route path="/add-contact/:id" element={<PrivateRouter />}>
            <Route
              path=""
              element={
                <AddContact contacts={contacts} setContacts={setContacts} />
              }
            />
          </Route>
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
        <Route path="/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
