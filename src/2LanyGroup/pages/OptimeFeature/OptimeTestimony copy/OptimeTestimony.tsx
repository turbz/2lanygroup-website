import "./OptimeTestimony.css";

export default function OptimeTestimony() {
  return (
    <section className="Optime-Testimony">
      <div>
        <hgroup>
          <h4>What People Say!</h4>
          <h2>Testimonials</h2>
        </hgroup>
      </div>
      <div className="cards">
        <button>
          <span className="arrow left"></span>
        </button>
        <div className="card">
          <figure></figure>
          <p>
            They are the best of the best, and expertly trained team members who
            take the extra step and go the extra mile, all to fulfill our
            dedicated promise to deliver innovative and dynamic solutions to our
            customers to fit the needs of a rapidly changing global environment.
          </p>
          <hgroup>
            <h3>James Segooa</h3>
            <h4>Taevo (Pty) Ltd</h4>
          </hgroup>
        </div>
        <button>
          <span className="arrow right"></span>
        </button>
      </div>
      <div className="nav">
        <ul>
          <li>
            <span></span>
            <span></span>
          </li>
          <li>
            <span></span>
            <span></span>
          </li>
        </ul>
      </div>
    </section>
  );
}
