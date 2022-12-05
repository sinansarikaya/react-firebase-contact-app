import React from "react";
import ContactCard from "../../components/contactCard/ContactCard";
import Header from "../../components/header/Header";
import "./Home.scss";

//56px

const Home = () => {
  return (
    <>
      <Header />
      <div className="HomeContainer d-flex justify-content-center">
        <ContactCard />
      </div>
    </>
  );
};

export default Home;
