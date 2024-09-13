/* eslint-disable jsx-a11y/role-supports-aria-props */
import { Link } from "react-router-dom";

export default function AsideBar() {
  return (
    <aside className="left-sidebar with-vertical">
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link to="/" className="text-nowrap logo-img">
            <img
              src="./assets/images/logos/dark-logo.svg"
              className="dark-logo"
              alt="Logo-Dark"
              style={{ display: "flex" }}
            />
            <img
              src="./assets/images/logos/light-logo.svg"
              className="light-logo"
              alt="Logo-light"
              style={{ display: "none" }}
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
                        <span className="hide-menu">Home</span>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          className="sidebar-link active"
                          to="/"
                          id="get-url"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-aperture"></i>
                          </span>
                          <span className="hide-menu">Modern</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <Link
                          className="sidebar-link"
                          to="/test"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-shopping-cart"></i>
                          </span>
                          <span className="hide-menu">eCommerce</span>
                        </Link>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/index3.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-currency-dollar"></i>
                          </span>
                          <span className="hide-menu">NFT</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/index4.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-cpu"></i>
                          </span>
                          <span className="hide-menu">Crypto</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/index5.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-activity-heartbeat"></i>
                          </span>
                          <span className="hide-menu">General</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/index6.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-playlist"></i>
                          </span>
                          <span className="hide-menu">Music</span>
                        </a>
                      </li>
                      <li className="nav-small-cap">
                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                        <span className="hide-menu">Apps</span>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/app-calendar.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-calendar"></i>
                          </span>
                          <span className="hide-menu">Calendar</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/app-kanban.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-layout-kanban"></i>
                          </span>
                          <span className="hide-menu">Kanban</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/app-chat.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-message-dots"></i>
                          </span>
                          <span className="hide-menu">Chat</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/app-email.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-mail"></i>
                          </span>
                          <span className="hide-menu">Email</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/app-notes.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-notes"></i>
                          </span>
                          <span className="hide-menu">Notes</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/app-contact.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-phone"></i>
                          </span>
                          <span className="hide-menu">Contact Table</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/app-contact2.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-list-details"></i>
                          </span>
                          <span className="hide-menu">Contact List</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/app-invoice.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-file-text"></i>
                          </span>
                          <span className="hide-menu">Invoice</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className="sidebar-link"
                          href="../main/page-user-profile.html"
                          aria-expanded="false"
                        >
                          <span>
                            <i className="ti ti-user-circle"></i>
                          </span>
                          <span className="hide-menu">User Profile</span>
                        </a>
                      </li>
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
