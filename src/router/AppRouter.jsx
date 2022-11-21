import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "../components/contactCard/addContact/AddContact";
import ContactList from "../components/contactCard/contactList/ContactList";
import Navbar from "../components/nav/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/form/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/form/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<ContactList />} />
          <Route path="/contact-list" element={<ContactList />} />
          <Route path="/add-contact" element={<AddContact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
