import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./styles/main.module.scss"

const Main = () => {
  return (
    <div className={'main-wrapper'}>
      <Header />
      <Footer />
    </div>
  );
}

export default Main;