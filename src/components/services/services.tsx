import React from "react"
import "./services.css"
import { IoIosArrowRoundForward } from "react-icons/io"

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
      title: "Air Freight Services",
      src_link:
        "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Airplane-Icon-1.png",
      description:
        "We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air.",
      url_link: "",
    },
    {
      title: "Ocean Freight Services",
      src_link:
        "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Ship-Icon-1.png",
      description:
        "We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.",
      url_link: "",
    },
    {
      title: "Road Freight Services",
      src_link:
        "https://www.lanygroup.taevo.co.za/wp-content/uploads/2022/10/Truck-Icon-1.png",
      description:
        "We provides a wide range of transportation services including quality international road transportation of cargoes & goods arriving from the ports all over the world.",
      url_link: "",
    },
  ]

  return (
    <section className="Optime-Services">
      <div>
        <hgroup>
          <h4>Real Solutions, Real Fast!</h4>
          <h2>Delivering the Best Global Logistics Solutions.</h2>
        </hgroup>
        <p>
          Our global logistics expertise, advanced supply chain technology &
          customized logistics solutions will help you analyze, develop and
          implement successful supply chain management strategies from
          end-to-end.
        </p>
      </div>
      <div className="cards">
        {service_links.map((d, i) => (
          <div className="card" key={i}>
            <img src={`${d.src_link}`} alt={`${d.title}`} />
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
