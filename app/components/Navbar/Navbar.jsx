'use client';

import "./navbar.css";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const menuButtonsL = [
  { title: "events", subMenu: ["Sub1", "Sub2"] },
  { title: "rankings", subMenu: ["Sub1", "Sub2"] },
  { title: "fighters", subMenu: [] },
  { title: "news", subMenu: ["Sub1", "Sub2"] }
];

const menuButtonsR = [
  { title: "bets", subMenu: ["Sub1", "Sub2"] },
  { title: "media", subMenu: [] },
  { title: "rules", subMenu: [] },
  { title: "connect", subMenu: [] }
];

export default function Navbar() {
  const router = usePathname();

  console.log(router);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <header className={`header fixed-top${scrolled ? " scrolled" : ""}`}>
      <nav className={`navbar navbar-expand-lg text-uppercase py-0${scrolled ? " scrolled" : ""}`}>
        <Link style={{ textDecoration: "none" }} href="/">
          <div className="navbar-brand d-lg-none py-0 ms-4 me-0">
            <span className={`fw-bold cfont ${router === "/" ? 'underline' : ''}`}>LFC</span>
          </div>
        </Link>

        <div
          className="offcanvas offcanvas-end vh-100"
          tabIndex="-1"
          id="navbarOffcanvasLg"
          aria-labelledby="navbarOffcanvasLgLabel"
        >
          <div className="container-lg">
            <div className="row flex-grow-1 p-4 p-lg-0">
              <div className="d-flex d-lg-block col-lg-2 order-1 order-lg-2 text-lg-center">
                <button
                  type="button"
                  className="d-lg-none border-0 bg-transparent p-0 ms-auto"
                  data-bs-dismiss="offcanvas"
                  aria-label="Cerrar"
                >
                  <i className="fa-solid fa-close"></i>
                </button>
                <Link style={{ textDecoration: "none" }} href="/">
                  <div className="navbar-brand d-none d-lg-block py-0 me-0">
                    <span className={`fw-bold cfont ${router === "/" ? 'underline' : ''}`}>LFC</span>
                  </div>
                </Link>
              </div>

              <div className="col-lg-5 order-2 order-lg-1 ms-auto ms-lg-0">
                <ul className="navbar-nav d-flex flex-column flex-lg-row">
                  {menuButtonsL.map((button) => (
                    <li className="nav-item" key={button.title}>
                      <Link className={`nav-link ${router === "/" + button.title ? 'underline' : ''}`} href={`/${button.title}`}>{button.title}</Link>
                      {button.subMenu.length > 0 && (
                        <div className="sub-menu">
                          {button.subMenu.map((item) => (
                            <Link key={item} className="navbar-dropdown-item" href={`/${button.title}/${item}`}>{item}</Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-lg-5 order-3">
                <ul className="navbar-nav d-flex flex-column flex-lg-row justify-content-lg-end">
                  {menuButtonsR.map((button) => (
                    <li className="nav-item" key={button.title}>
                      <Link className={`nav-link ${router === "/" + button.title ? 'underline' : ''}`} href={`/${button.title}`}>{button.title}</Link>
                      {button.subMenu.length > 0 && (
                        <div className="sub-menu">
                          {button.subMenu.map((item) => (
                            <Link key={item} className="navbar-dropdown-item" href={`/${button.title}/${item}`}>
                              {item}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarOffcanvasLg"
        aria-controls="navbarOffcanvasLg"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
}
