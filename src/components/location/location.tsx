import React from "react"
import { IoMdAdd } from "react-icons/io"

import "./location.css"

export default function Location() {
  return (
    <section className="Optime-Location">
      <div className="map">
        <div className="offices">
          <h3>Global Logistics</h3>
          <div className="card">
            <h3>
              <span></span>
              <span>Gauteng Office</span>
            </h3>
            <ul>
              <li>Phone: 27612457410</li>
              <li>Email: info@2lanygroup.co.za</li>
              <li>Address: 2307 Themba Rd, Kagiso, GP</li>
              <li>Hours: Mon-Fri 8am - 7pm</li>
            </ul>
          </div>
          <div className="card">
            <h3>
              <span>
                <IoMdAdd />
              </span>
              <span>Mpumalanga Office</span>
            </h3>
          </div>
          <div className="card">
            <h3>
              <span>
                <IoMdAdd />
              </span>
              <span>Limpopo Office</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
