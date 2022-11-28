import React from "react"
import "./header.css"
import {
  IoIosMenu,
  IoMdAdd,
  IoIosArrowRoundForward,
  IoIosClose,
} from "react-icons/io"
import { useState } from "react"

export default function Header() {
  const [toggle, setToggle] = useState(false)
  return (
    <header className="Optime-Header">
      <h1>
        <span></span>
      </h1>
      <nav>
        <button onClick={() => setToggle(!toggle)}>
          {!toggle ? <IoIosMenu /> : <IoIosClose />}
        </button>

        <div
          style={{
            display: !toggle ? "none" : "block",
          }}
        >
          <ul>
            <li>
              <a href="#home">Home</a>
              <button>
                <IoMdAdd />
              </button>
            </li>
            <li>
              <a href="#home">Company</a>
              <button>
                <IoMdAdd />
              </button>
            </li>
            <li>
              <a href="#home">Services</a>
              <button>
                <IoMdAdd />
              </button>
            </li>
            <li>
              <a href="#home">News & Media</a>
              <button>
                <IoMdAdd />
              </button>
            </li>
            <li>
              <a href="#home">Features</a>
              <button>
                <IoMdAdd />
              </button>
            </li>
            <li>
              <a href="#home">Contacts</a>
              <button>
                <IoMdAdd />
              </button>
            </li>
          </ul>
          <div>
            <button>
              <span>Request A Quote</span>
              <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
