import React from "react"
import { IoMdArrowForward } from "react-icons/io"
import "./feature.css"

export default function Feature() {
  const service_links = [
    {
      title: " Fast & Efficient Delivery",
      src_link:
        "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Airplane-Icon-1.png",
      description: "We enhance our operations by relieving you of the worries.",
      url_link: "",
    },
    {
      title: "Transparent Pricing",
      src_link:
        "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Truck-Icon-1.png",
      description:
        "International supply chains involves challenging regulations.",
      url_link: "",
    },
    {
      title: "Real-Time Tracking",
      src_link:
        "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Ship-Icon-1.png",
      description:
        "Ensure customers’ supply chains are fully compliant by practices.",
      url_link: "",
    },
    {
      title: "Warehouse Storage",
      src_link:
        "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Ship-Icon-1.png",
      description:
        "Depending on your product, we provide warehouse activities.",
      url_link: "",
    },
  ]
  return (
    <section className="Optime-Feature">
      <div className="features">
        <div>
          <hgroup>
            <h4>Our Features</h4>
            <h2>Why Choose Us!</h2>
          </hgroup>
          <p>
            We continue to pursue that same vision in today's complex, uncertain
            world, working every day to earn our customers’ trust!
          </p>
        </div>
        <div className="cards">
          {service_links.map((d, i) => (
            <div className="card" key={i}>
              <img src={`${d.src_link}`} alt={`${d.title}`} />
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
          ))}
        </div>

        <div className="find">
          Working every day to earn our customers’ trust.
          <a href="#home">Get Started!</a>
        </div>
      </div>
      <div className="quote">
        <form className="form">
          <div className="personal-data">
            <h4>Personal Data</h4>
            <input type="text" placeholder="Name*" />
            <input type="email" placeholder="eMail*" />
            <input type="tel" placeholder="Phone*" />
          </div>
          <div className="shipment-data">
            <h4>Shipment Data</h4>
            <select>
              <option>Freight Type</option>
              <option>Freight Type 1</option>
              <option>Freight Type 2</option>
            </select>
            <input type="text" placeholder="City of Departure" />
            <input type="text" placeholder="Delivery City" />
            <select>
              <option>Incoterms</option>
              <option>Incoterms 1</option>
              <option>Incoterms 2</option>
            </select>
            <div>
              <input type="text" placeholder="Weight" />
              <input type="text" placeholder="height" />
              <input type="text" placeholder="Width" />
              <input type="text" placeholder="Length" />
            </div>
            <div>
              <label>
                <input type="radio" />
                <span>Fragile</span>
              </label>
              <label>
                <input type="radio" />
                <span>Express Delivery</span>
              </label>
              <label>
                <input type="radio" />
                <span>Insurance</span>
              </label>
              <label>
                <input type="radio" />
                <span>Packaging</span>
              </label>
            </div>
          </div>
          <input type="submit" value="Request A Quote" />
        </form>
        <div className="brochure">
          <h2>Industry Solutions!</h2>
          <p>
            Our worldwide presence ensures the timeliness, cost efficiency and
            compliance adherence required to ensure your production timelines
            are met.
          </p>
          <button>
            <span>Download 2022 Brochure</span>
            <IoMdArrowForward />
          </button>
        </div>
      </div>
    </section>
  )
}
