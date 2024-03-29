import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  const [modalState, setModal] = useState(false);

  function handleClick() {
    setModal(!modalState);
    console.log(modalState);
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Denver Critical Mass</title>
        <meta
          name="Homepage for information about denver colorado critical mass"
          content="Generated by create next app"
        />
        <link rel="bike icon" href="/favicon.ico" />
      </Head>

      <div className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <Image
              src="/logo.png"
              alt="Denver Critical Mass Logo"
              width="200"
              height="200"
            />
            <h1 className="title">Every last Friday of every month.</h1>

            <h2 className="subtitle">
              Meet up at 7:00PM at{" "}
              <a
                href="https://goo.gl/maps/cVHetdaYH31WRxTk7"
                target="_blank"
                rel="noreferrer"
              >
                Thatcher Fountain
              </a>
              . Ride at 7:20PM.
            </h2>
            <h2 className="subtitle">
              Upcoming dates: 3/31/23, 4/28/23, 5/26/23
            </h2>
            <hr />
            <button className="button is-info" onClick={handleClick}>
              Details
            </button>
            <h2 className="subtitle">
              What is{" "}
              <a
                href="https://www.times-up.org/critical-mass/what-critical-mass"
                target="_blank"
                rel="noreferrer"
              >
                Critical Mass
              </a>
              ?
            </h2>
            {modalState && (
              <div className="modal is-active">
                <div className="modal-background" onClick={handleClick}></div>
                <div className="modal-card">
                  <header className="modal-card-head">
                    <p className="modal-card-title">Ride details:</p>
                    <button
                      className="delete"
                      onClick={handleClick}
                      aria-label="close"
                    ></button>
                  </header>
                  <section className="modal-card-body">
                    <div className="box">
                      <h1 className="title">The Ride:</h1>
                      <h2 className="subtitle">
                        Denver Critical Mass has no leader. The route will be
                        determined on the ride. Typically the route will go
                        through Denver metro area, be about one hour long and
                        end where it started. We ride rain or shine.
                      </h2>
                    </div>
                    <div className="box">
                      <h1 className="title">Pace:</h1>
                      <h2 className="subtitle">
                        Conversational. The pack stays together and waits for
                        the back.
                      </h2>
                    </div>
                    <div className="box">
                      <h1 className="title">Safety:</h1>
                      <h2 className="subtitle">
                        Wear a helmet and bring lights. Stop at red lights so
                        the ride can mass up behind you. Fill gaps - critical
                        mass depends on bicycle density.
                      </h2>
                    </div>
                  </section>
                  <footer className="modal-card-foot">
                    <h2 className="subtitle is-6">
                      Additional information at{" "}
                      <a
                        href="https://www.times-up.org/critical-mass/what-critical-mass"
                        target="_blank"
                        rel="noreferrer"
                      >
                        New York Critical Mass
                      </a>{" "}
                      &{" "}
                      <a
                        href="https://www.sfcriticalmass.org/faq/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        San Francisco Critical Mass
                      </a>
                    </h2>
                  </footer>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
