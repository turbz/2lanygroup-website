import React from "react"
import "./banner.css"
import { IoIosPlay } from "react-icons/io"
import {
  FaTruck,
  FaTruckLoading,
  FaTruckMoving,
  FaTruckPickup,
} from "react-icons/fa"

export default function Banner() {
  const service_links = [
    {
      title: "Short Trucks",
      src_link: <FaTruck />,
    },
    {
      title: "Main Truck",
      src_link: <FaTruckMoving />,
    },
    {
      title: "Trailers",
      src_link: <FaTruckLoading />,
    },
    {
      title: "Van Delivery",
      src_link: <FaTruckPickup />,
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
            Safe and on time delivery of your goods is our primary concern. with
            top notch staff highly modernised vehicles we are confident we can
            do it.
          </p>
          <ul>
            <li>
              <a href="#services">Our Resources</a>
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
                {d.src_link}
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
