import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

function Rootlayout() {
  return (
    <div className="max-w-7xl mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Rootlayout;
