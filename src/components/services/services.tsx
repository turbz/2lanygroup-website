import React from "react"
import "./services.css"
import { IoIosArrowRoundForward } from "react-icons/io"
import { FaPallet, FaShieldAlt, FaShippingFast } from "react-icons/fa"

export default function Services() {
  const service_links = [
    // {
    //   title: "Warehousing Services",
    //   src_link:
    //     "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Forklift-Icon-48x48-1.png",
    //   description: "",
    //   url_link: "",
    // },
    {
      title: "Your cargo our concern",
      src_link: <FaPallet />,
      description:
        "We offer a diverse range of transportation services from project cargo to domestic retail distribution and delivery.",
      url_link: "",
    },
    {
      title: "100% Safe Delivery",
      src_link: <FaShieldAlt />,
      description:
        "Our capacities give us the freedom of executing project of various sizes. From small personal projects to building mega build of grand scale.",
      url_link: "",
    },
    {
      title: "Modern Vehicle Fleet",
      src_link: <FaShippingFast />,
      description:
        "Our modern equipped vehicles are operating in countries worldwide under our own banner or our clients’ livery. Our fleet counts over 30 vehicles.",
      url_link: "",
    },
  ]

  return (
    <section id="services" className="Optime-Services">
      <div>
        <hgroup>
          <h4>Real Solutions, Real Fast!</h4>
          <h2>Delivering the Best Local Transport Solutions.</h2>
        </hgroup>
        <p>
          Our local transport expertise & customized transport solutions ensures
          you the best quality services, safe and on time delivery of your goods
          and very careful handling of valualable goods.
        </p>
      </div>
      <div className="cards">
        {service_links.map((d, i) => (
          <div className="card" key={i}>
            {d.src_link}
            <h3>{d.title}</h3>
            <p>{d.description}</p>
            <a>
              Learn More <IoIosArrowRoundForward />
            </a>
          </div>
        ))}
      </div>
      <div className="find">
        logistic & Transport Solutions Saves Your Time.{" "}
        <a href="#home"> Find your solution</a>
      </div>
    </section>
  )
}
