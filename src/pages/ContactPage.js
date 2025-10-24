import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"; // Import form component

function ContactPage() {
  return (
    <div id="wrapper">
      <header id="header">
        {/* header component */}
        <TopBar />
        <NavBar />
      </header>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">Contact Us</h1>
              {/* contact form component */}
              <ContactForm /> 
            </div>
          </div>
        </div>
      </div>

      {/* footer component */}  
      <Footer />
    </div>
  );
}

export default ContactPage;
