import React from "react";
import ContactCard from "../../components/contactCard/ContactCard";
import "./Home.scss";

//56px

const Home = () => {
  return (
    <div className="HomeContainer d-flex justify-content-center align-items-center">
      <ContactCard />
    </div>
  );
};

export default Home;
