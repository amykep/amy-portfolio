import React, { useState } from "react";
import './App.css';
import './index.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App()
{
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <section>
      <div>
        <Header></Header>
      </div>

      <main className="content">

        <div className="left-side">
          <Nav
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
            portfolioSelected={portfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
          ></Nav>
        </div>

        <div className="right-side">

          {!aboutSelected && !contactSelected && !resumeSelected ?
            <Projects></Projects>

            : !aboutSelected && !portfolioSelected && !resumeSelected ?
              <ContactForm></ContactForm>

              : !aboutSelected && !portfolioSelected && !contactSelected ?
                <Resume></Resume>
                : <About></About>
          }


          {/* {!contactSelected && !portfolioSelected && !resumeSelected ? (
            <>
              <About></About>
            </>
          ) : (
            <Resume></Resume>
          )}

          {!aboutSelected && !portfolioSelected && !resumeSelected ? (
            <>
              <ContactForm></ContactForm>
            </>
          ) : (
            <Projects></Projects>
          )} */}
        </div>
      </main>
      <div className="footer"> <Footer></Footer></div>
    </section>
  )

}

export default App;
