import React from "react"
import Layout from "../components/layout"
import { FaCheckSquare } from "react-icons/fa"

import "./about.css"

export default function AboutPage() {
  return (
    <Layout>
      <main className="About-Page">
        <div className="container">
          <div className="executive-summary">
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum
                labore et dolore magna aliqua ad minim veniam, nostrud quis cing
                eiusmod tempor elementum ut labore.
              </p>
            </div>
            <div className="card">
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum
                labore et dolore magna aliqua ad minim veniam, nostrud quis cing
                eiusmod tempor elementum ut labore.
              </p>
            </div>
            <div className="about-features">
              <h4>Professional Services</h4>
              <h2>24 Hours Support</h2>
              <ul>
                <li>
                  <FaCheckSquare />
                  <span>Fast & Efficient Delivery</span>
                </li>
                <li>
                  <FaCheckSquare />
                  <span>Transparent Pricing</span>
                </li>
                <li>
                  <FaCheckSquare />
                  <span>Real-Time Tracking</span>
                </li>
                <li>
                  <FaCheckSquare />
                  <span>Warehouse Storage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
