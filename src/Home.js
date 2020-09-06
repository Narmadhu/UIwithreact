import React from "react";
import "./Home.css";
import {
  FaCog,
  FaFacebookMessenger,
  FaSearch,
  FaCertificate,
  FaBatteryFull,
  FaThLarge,
  FaEllipsisH,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home grid">
      <div className="grid1">
        <h2>e</h2>
        <h2>
          Edu<span className="title">kated</span>
        </h2>
        <nav className="nav-bar block">
          <ul className="nav-links">
            <li>
              <a href="#">
                <FaThLarge className="icon" /> <span> Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaSearch /> <span> Discover</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookMessenger /> <span>Messages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FaCog /> <span> Settings</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="block">
          <img src="/images/bulb.jpg" alt="" />
          <ul>
            <li>
              <span>Updated Courses</span>{" "}
            </li>
            <li>
              <span>by Narmadhu</span>
            </li>
          </ul>
        </div>
        <div className="grid-2 points">
          <div className="block">
            <FaCertificate color="green" style={{ marginLeft: "50px" }} />
            <ul>
              <li>
                <span>1800</span>
              </li>
              <li>
                <span>points</span>
              </li>
            </ul>
          </div>
          <div className="block">
            <FaBatteryFull color="purple" style={{ marginLeft: "50px" }} />
            <ul>
              <li>
                <span> 45.3%</span>
              </li>
              <li>
                <span>Completed</span>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="block">
          <img src="/images/alex.jpg" alt="" />
          <ul>
            <li>
              <span>Alex Dixon</span>
            </li>
            <li>
              <span>alex</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid2">
        <div className="content">
          <div className="streaming">
            <ul className="heading">
              <li>
                Streaming <span> Now</span>
              </li>
              <li>
                <FaEllipsisH fontSize="30px" color="#e0dfdf" />
              </li>
            </ul>
            <img src="/images/alex.jpg" alt="" />
            <img src="/images/pic.jpg" alt="" />
            <img src="/images/pic1.jpg" alt="" />
            <img src="/images/pic2.jpg" alt="" />
            <img src="/images/pic3.jpg" alt="" />
            <img src="/images/pic4.jpg" alt="" />
            <img src="/images/pic5.jpg" alt="" />
          </div>
          <div className="search">
            <ul className="heading">
              <li>
                Advanced<span> Search</span>
              </li>
              <li>
                <FaEllipsisH fontSize="30px" color="#e0dfdf" />
              </li>
            </ul>
            <div className="search-bar">
              <input type="text" placeholder="start writing something" />
              <button>Find</button>
            </div>
          </div>
        </div>
        <div className="popular">
          <ul className="heading">
            <li>
              Popular <span>This Week</span>
            </li>
            <li>
              <FaEllipsisH fontSize="30px" color="#e0dfdf" />
            </li>
          </ul>

          <div className="popular-grid content">
            <div className="popular-each-grid1">
              <div className="popular-each first back-img">
                <img src="/images/alex.jpg" alt="" />
                <ul>
                  <li>
                    <span>Narmadhu</span>
                  </li>
                  <li>
                    <span>lana </span>
                  </li>
                </ul>
                <button>54 min</button>

                <p className="description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="popular-each second back-img">
                <img src="/images/alex.jpg" alt="" />
                <ul>
                  <li>
                    <span>Naveen</span>
                  </li>
                  <li>
                    <span>lana </span>
                  </li>
                </ul>
                <button>54 min</button>

                <p className="description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="popular-each-grid2">
              <div className="popular-each-third third back-img ">
                <img src="/images/alex.jpg" alt="" />
                <ul>
                  <li>
                    <span>Venkat</span>
                  </li>
                  <li>
                    <span>lana </span>
                  </li>
                </ul>
                <button>54 min</button>

                <p className="description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="grid-2  ">
                <div className="popular-each-other fourth back-img ">
                  <img src="/images/alex.jpg" alt="" />
                  <ul>
                    <li>
                      <span>Lana </span>
                    </li>
                    <li>
                      <span>lana </span>
                    </li>
                  </ul>
                  <button>54 min</button>

                  <p className="description">Lorem, ipsum dolor sit.</p>
                </div>
                <div className="popular-each-other fiveth back-img">
                  <img src="/images/alex.jpg" alt="" />
                  <ul>
                    <li>
                      <span>Lana</span>
                    </li>
                    <li>
                      <span>lana </span>
                    </li>
                  </ul>
                  <button>54 min</button>

                  <p className="description">Lorem, ipsum dolor sit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" content ">
          <div className="tutor">
            <ul className="heading">
              <li>
                Top <span>Tutors </span>
              </li>
              <li>
                <FaEllipsisH fontSize="30px" color="#e0dfdf" />
              </li>
            </ul>
            <div className="grid-2 ">
              <div>
                <div className="tutor-each block ">
                  <img src="/images/alex.jpg" alt="" />
                  <ul>
                    <li>
                      <span>Melina</span>
                    </li>
                    <li>
                      <span> by Melina</span>
                    </li>
                  </ul>
                  <button>+</button>
                </div>
                <div className="tutor-each block">
                  <img src="/images/alex.jpg" alt="" />
                  <ul className="name">
                    <li>
                      <span>Melina</span>
                    </li>
                    <li>
                      <span> by Melina</span>
                    </li>
                  </ul>
                  <button>+</button>
                </div>
              </div>
              <div>
                <div className="tutor-each block">
                  <img src="/images/alex.jpg" alt="" />
                  <ul className="name">
                    <li>
                      <span>Melina</span>
                    </li>
                    <li>
                      <span> by Melina</span>
                    </li>
                  </ul>
                  <button>+</button>
                </div>
                <div className="tutor-each block ">
                  <img src="/images/alex.jpg" alt="" />
                  <ul>
                    <li>
                      <span>Melina</span>
                    </li>
                    <li>
                      <span> by Melina</span>
                    </li>
                    <li>
                      <button>+</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="offer">
            <ul className="heading">
              <li>
                <span>Special Offers</span>
              </li>
              <li>
                <FaEllipsisH fontSize="30px" color="#e0dfdf" />
              </li>
            </ul>

            <div className="offer-img ">
              <ul>
                <li>
                  <span>50 Days of Premium!</span>
                </li>
                <li>
                  <span>Get it before 01.01.2020 </span>
                </li>
              </ul>
              <button>Learn more</button>
            </div>
          </div>
        </div>
        {/* //tutorgrid */}
      </div>
    </div>
  );
}

export default Home;
