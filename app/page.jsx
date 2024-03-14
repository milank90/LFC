import "./page.css";
import React from 'react';

export default function Home() {
  return (
    <main className="main">
    <figure className="cover-image position-relative w-100 vh-100 d-flex align-items-center justify-content-center mb-0">
      <figcaption className="cover-image__title position-relative text-center px-3 px-md-0">
        <h1 className="display-1 text-uppercase mb-4">
          Lalafell Fight Club
        </h1>
        <p className="lead text-center mb-5">
        Welcome to the ultimate battleground for Lalafell warriors!
        </p>
      </figcaption>
      <div className="mouse position-absolute">
        <div className="mouse-scroll position-relative bg-white"></div>
      </div>
    </figure>
    <section className="container py-5">
      <h2 className="text-uppercase mb-4">
        Lorem ipsum <strong>dolor sit amet</strong>
        <small className="d-block text-muted">Doloribus fuga totam quis</small>
      </h2>
      <p>
        Harness your inner fury and unleash a torrent of unbridled aggression upon your foe, 
        leaving nothing but shattered dreams and broken bodies in your wake! 
      </p>
    </section>
  </main>
  )
}
