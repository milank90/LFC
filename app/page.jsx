import "./page.css";
import React from 'react';

export default function Home() {
  return (
    <main className="main">
    <figure className="cover-image position-relative w-100 vh-100 d-flex align-items-center justify-content-center mb-0">
      <figcaption className="cover-image__title position-relative text-center px-3 px-md-0">
        <h1 className="display-1 text-uppercase fw-semibold mb-4">
          Some Test<br />
          Text
        </h1>
        <p className="lead text-center mb-5">
          Bla bla bla <br />
          blabla bla<br />
          bla bla bla bla bla
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ut soluta culpa natus error totam.
        Doloribus fuga totam quis harum deleniti aspernatur, amet odio voluptatibus in reprehenderit ducimus nostrum ut!
      </p>
    </section>
  </main>
  )
}
