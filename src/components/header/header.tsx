import React from "react"
import "./header.css"
import {
  IoIosMenu,
  IoMdAdd,
  IoIosArrowRoundForward,
  IoIosClose,
} from "react-icons/io"
import { useState } from "react"
import { Link } from "gatsby"

export default function Header() {
  let pathname
  if (typeof window !== "undefined") {
    pathname = window.location.pathname
  } else {
    pathname = "/"
  }

  const [toggle, setToggle] = useState(false)
  return (
    <header
      className={
        pathname.length > 1 ? "Optime-Header Active-Header" : "Optime-Header"
      }
    >
      <h1>
        <Link to="/">
          <span></span>
        </Link>
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
              <Link to="/about">Company</Link>
              <button>
                <IoMdAdd />
              </button>
            </li>
            <li>
              <a href="/#services">Services</a>
              <button>
                <IoMdAdd />
              </button>
            </li>
            {/* <li>
              <a href="#home">News & Media</a>
              <button>
                <IoMdAdd />
              </button>
            </li> */}
            <li>
              <a href="/#features">Features</a>
              <button>
                <IoMdAdd />
              </button>
            </li>
            <li>
              <a href="/#contact">Contacts</a>
              <button>
                <IoMdAdd />
              </button>
            </li>
          </ul>
          <div>
            <a href="/#contact">
              <span>Request A Quote</span>
              <IoIosArrowRoundForward />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
