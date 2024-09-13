/* eslint-disable jsx-a11y/role-supports-aria-props */
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    path: "/",
    title: "Modern",
    icon: <i className="ti ti-aperture"></i>,
  },
  {
    path: "/test",
    title: "eCommerce",
    icon: <i className="ti ti-shopping-cart"></i>,
  },
  {
    path: "/nft",
    title: "NFT",
    icon: <i className="ti ti-currency-dollar"></i>,
  },
  {
    path: "/crypto",
    title: "Crypto",
    icon: <i className="ti ti-cpu"></i>,
  },
  {
    path: "/general",
    title: "General",
    icon: <i className="ti ti-activity-heartbeat"></i>,
  },
  {
    path: "/music",
    title: "Music",
    icon: <i className="ti ti-playlist"></i>,
  },
];
export default function AsideBar() {
  const [navIndex, setNavIndex] = useState(0);
  return (
    <aside className="left-sidebar with-vertical">
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link to="/" className="text-nowrap logo-img">
            <img
              src="./assets/images/logos/dark-logo.svg"
              className="dark-logo"
              alt="Logo-Dark"
            />
            <img
              src="./assets/images/logos/light-logo.svg"
              className="light-logo"
              alt="Logo-light"
            />
          </Link>
          <button className="sidebartoggler ms-auto text-decoration-none fs-5 d-block d-xl-none">
            <i className="ti ti-x"></i>
          </button>
        </div>
        <nav
          className="sidebar-nav scroll-sidebar simplebar-scrollable-y"
          data-simplebar="init"
        >
          <div className="simplebar-wrapper" style={{ margin: "0px -24px" }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                <div
                  className="simplebar-content-wrapper"
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "100%", overflow: "hidden scroll" }}
                >
                  <div
                    className="simplebar-content"
                    style={{ padding: "0px 24px" }}
                  >
                    <ul id="sidebarnav">
                      <li className="nav-small-cap">
                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                        <span className="hide-menu"></span>
                      </li>
                      {navItems.map((item, index) => (
                        <li key={index} className="sidebar-item">
                          <Link
                            onClick={() => setNavIndex(index)}
                            className={`sidebar-link ${
                              index === navIndex ? "active" : ""
                            }`}
                            to={item.path}
                            id="get-url"
                            aria-expanded="false"
                          >
                            <span>{item.icon}</span>
                            <span className="hide-menu">{item.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "269px", height: "3498px" }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{ width: 0, display: "none" }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "visible" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                height: "25px",
                transform: "translate3d(0px, 0px, 0px)",
                display: "block",
              }}
            ></div>
          </div>
        </nav>
        <div className="fixed-profile p-3 mx-4 mb-2 bg-secondary-subtle rounded mt-3">
          <div className="hstack gap-3">
            <div className="john-img">
              <img
                src="./assets/images/profile/user-1.jpg"
                className="rounded-circle"
                width="40"
                height="40"
                alt="modernize-img"
              />
            </div>
            <div className="john-title">
              <h6 className="mb-0 fs-4 fw-semibold">Mathew</h6>
              <span className="fs-2">Designer</span>
            </div>
            <button
              className="border-0 bg-transparent text-primary ms-auto"
              type="button"
              aria-label="logout"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="logout"
            >
              <i className="ti ti-power fs-6"></i>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
