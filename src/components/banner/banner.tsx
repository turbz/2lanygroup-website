import React from "react"
import "./banner.css"
import { IoIosPlay } from "react-icons/io"

export default function Banner() {
  const service_links = [
    {
      title: "Warehousing Services",
      src_link:
        "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Forklift-Icon-48x48-1.png",
    },
    {
      title: "Air Freight Services",
      src_link:
        "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Airplane-Icon-48x48-1.png",
    },
    {
      title: "Ociean Freight Services",
      src_link:
        "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Ship-Icon-48x48-1.png",
    },
    {
      title: "Road Freight Services",
      src_link:
        "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Truck-Icon-48x48-1.png",
    },
  ]
  return (
    <section className="Optime-Banner">
      <div className="bg"></div>
      <div className="cta">
        <button>
          <span className="arrow left"></span>
        </button>
        <div>
          <h2>Fast, Certified & Flexible Solutions</h2>
          <p>
            Through integrated supply chain solutions, our drives sustainable
            competitive advantages to some of the largest companies all over the
            world.
          </p>
          <ul>
            <li>
              <a href="#services">Our Services</a>
            </li>
            <li>
              <a href="#services">About Us</a>
            </li>
          </ul>
        </div>
        <button>
          <span className="arrow right"></span>
        </button>
      </div>
      <div className="play">
        <ul className="services">
          {service_links.map((d, i) => (
            <li key={i}>
              <a href="#home">
                <img src={`${d.src_link}`} alt={`${d.title}`} />
                <span>{d.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="video">
          <button>
            <span>
              <IoIosPlay />
            </span>
          </button>
          <p>Watch Our Presentation!</p>
        </div>
      </div>
    </section>
  )
}
