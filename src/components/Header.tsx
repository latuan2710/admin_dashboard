import { useState } from "react";
import { Link } from "react-router-dom";
import SettingModal from "./SettingModal";

export default function Header() {
  const [isSettingModalOpened, setIsSettingModalOpened] = useState(false);

  const handleSidebar = () => {
    let type = document.body.getAttribute("data-sidebartype");

    if (type === "full")
      document.body.setAttribute("data-sidebartype", "mini-sidebar");
    else document.body.setAttribute("data-sidebartype", "full");
  };

  return (
    <>
      <header className="topbar">
        <div className="with-vertical">
          <nav className="navbar navbar-expand-lg p-0">
            <ul className="navbar-nav">
              <li className="nav-item nav-icon-hover-bg rounded-circle ms-n2">
                <button
                  className="nav-link sidebartoggler"
                  id="headerCollapse"
                  onClick={handleSidebar}
                >
                  <i className="ti ti-menu-2"></i>
                </button>
              </li>
            </ul>
            <div className="d-block d-lg-none py-4">
              <Link to="/" className="text-nowrap logo-img">
                <img
                  src="../assets/images/logos/dark-logo.svg"
                  className="dark-logo"
                  alt="Logo-Dark"
                />
                <img
                  src="../assets/images/logos/light-logo.svg"
                  className="light-logo"
                  alt="Logo-light"
                  style={{ display: "none" }}
                />
              </Link>
            </div>
            <button
              className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="ti ti-dots fs-7"></i>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between">
                <button
                  className="nav-link nav-icon-hover-bg rounded-circle mx-0 ms-n1 d-flex d-lg-none align-items-center justify-content-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobilenavbar"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <i className="ti ti-align-justified fs-7"></i>
                </button>
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <button
                      className="nav-link moon dark-layout"
                      style={{ display: "flex" }}
                    >
                      <i
                        className="ti ti-moon moon"
                        style={{ display: "flex" }}
                      ></i>
                    </button>
                    <button
                      className="nav-link sun light-layout"
                      style={{ display: "none" }}
                    >
                      <i
                        className="ti ti-sun sun"
                        style={{ display: "none" }}
                      ></i>
                    </button>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <button
                      className="nav-link"
                      style={{ display: "flex" }}
                      onClick={() => setIsSettingModalOpened(true)}
                    >
                      <i
                        className="icon ti ti-settings fs-7"
                        style={{ display: "flex" }}
                      ></i>
                    </button>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link pe-0"
                      id="drop1"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center">
                        <div className="user-profile-img">
                          <img
                            src="../assets/images/profile/user-1.jpg"
                            className="rounded-circle"
                            width="35"
                            height="35"
                            alt="modernize-img"
                          />
                        </div>
                      </div>
                    </button>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1"
                    >
                      <div
                        className="profile-dropdown position-relative"
                        data-simplebar="init"
                      >
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: 0 }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer"></div>
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: 0, bottom: 0 }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                role="region"
                                aria-label="scrollable content"
                                style={{ height: "auto", overflow: "hidden" }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: 0 }}
                                >
                                  <div className="py-3 px-7 pb-0">
                                    <h5 className="mb-0 fs-5 fw-semibold">
                                      User Profile
                                    </h5>
                                  </div>
                                  <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                                    <img
                                      src="../assets/images/profile/user-1.jpg"
                                      className="rounded-circle"
                                      width="80"
                                      height="80"
                                      alt="modernize-img"
                                    />
                                    <div className="ms-3">
                                      <h5 className="mb-1 fs-3">
                                        Mathew Anderson
                                      </h5>
                                      <span className="mb-1 d-block">
                                        Designer
                                      </span>
                                      <p className="mb-0 d-flex align-items-center gap-2">
                                        <i className="ti ti-mail fs-4"></i>
                                        info@modernize.com
                                      </p>
                                    </div>
                                  </div>
                                  <div className="message-body">
                                    <a
                                      href="../main/page-user-profile.html"
                                      className="py-8 px-7 mt-8 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src="../assets/images/svgs/icon-account.svg"
                                          alt="modernize-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                          My Profile
                                        </h6>
                                        <span className="fs-2 d-block text-body-secondary">
                                          Account Settings
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="../main/app-email.html"
                                      className="py-8 px-7 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src="../assets/images/svgs/icon-inbox.svg"
                                          alt="modernize-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                          My Inbox
                                        </h6>
                                        <span className="fs-2 d-block text-body-secondary">
                                          Messages &amp; Emails
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="../main/app-notes.html"
                                      className="py-8 px-7 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src="../assets/images/svgs/icon-tasks.svg"
                                          alt="modernize-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                          My Task
                                        </h6>
                                        <span className="fs-2 d-block text-body-secondary">
                                          To-do and Daily Tasks
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="d-grid py-4 px-7 pt-8">
                                    <div className="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-4 p-4 mb-9">
                                      <div className="row">
                                        <div className="col-6">
                                          <h5 className="fs-4 mb-3 fw-semibold">
                                            Unlimited Access
                                          </h5>
                                          <button className="btn btn-primary">
                                            Upgrade
                                          </button>
                                        </div>
                                        <div className="col-6">
                                          <div className="m-n4 unlimited-img">
                                            <img
                                              src="../assets/images/backgrounds/unlimited-bg.png"
                                              alt="modernize-img"
                                              className="w-100"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a
                                      href="../main/authentication-login.html"
                                      className="btn btn-outline-primary"
                                    >
                                      Log Out
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: 0, height: 0 }}
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
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ height: 0, display: "none" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div
            className="offcanvas offcanvas-end"
            data-bs-scroll="true"
            id="mobilenavbar"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <nav className="sidebar-nav scroll-sidebar">
              <div className="offcanvas-header justify-content-between">
                <img
                  src="../assets/images/logos/favicon.ico"
                  alt="modernize-img"
                  className="img-fluid"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="offcanvas-body h-n80 simplebar-scrollable-y"
                data-simplebar="init"
              >
                <div className="simplebar-wrapper" style={{ margin: "-16px" }}>
                  <div className="simplebar-height-auto-observer-wrapper">
                    <div className="simplebar-height-auto-observer"></div>
                  </div>
                  <div className="simplebar-mask">
                    <div
                      className="simplebar-offset"
                      style={{ right: 0, bottom: 0 }}
                    >
                      <div
                        className="simplebar-content-wrapper"
                        role="region"
                        aria-label="scrollable content"
                        style={{ height: "100%", overflow: "hidden scroll" }}
                      >
                        <div
                          className="simplebar-content"
                          style={{ padding: "16px" }}
                        >
                          <ul id="sidebarnav">
                            <li className="sidebar-item">
                              <button
                                className="sidebar-link has-arrow"
                                aria-expanded="false"
                              >
                                <span>
                                  <i className="ti ti-apps"></i>
                                </span>
                                <span className="hide-menu">Apps</span>
                              </button>
                              <ul
                                aria-expanded="false"
                                className="collapse first-level my-3"
                              >
                                <li className="sidebar-item py-2">
                                  <a
                                    href="../main/app-chat.html"
                                    className="d-flex align-items-center"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-chat.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 bg-hover-primary">
                                        Chat Application
                                      </h6>
                                      <span className="fs-2 d-block text-muted">
                                        New messages arrived
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="sidebar-item py-2">
                                  <a
                                    href="../main/app-invoice.html"
                                    className="d-flex align-items-center"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-invoice.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 bg-hover-primary">
                                        Invoice App
                                      </h6>
                                      <span className="fs-2 d-block text-muted">
                                        Get latest invoice
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="sidebar-item py-2">
                                  <a
                                    href="../main/app-cotact.html"
                                    className="d-flex align-items-center"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-mobile.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 bg-hover-primary">
                                        Contact Application
                                      </h6>
                                      <span className="fs-2 d-block text-muted">
                                        2 Unsaved Contacts
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="sidebar-item py-2">
                                  <a
                                    href="../main/app-email.html"
                                    className="d-flex align-items-center"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-message-box.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 bg-hover-primary">
                                        Email App
                                      </h6>
                                      <span className="fs-2 d-block text-muted">
                                        Get new emails
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="sidebar-item py-2">
                                  <a
                                    href="../main/page-user-profile.html"
                                    className="d-flex align-items-center"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-cart.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 bg-hover-primary">
                                        User Profile
                                      </h6>
                                      <span className="fs-2 d-block text-muted">
                                        learn more information
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="sidebar-item py-2">
                                  <a
                                    href="../main/app-calendar.html"
                                    className="d-flex align-items-center"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-date.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 bg-hover-primary">
                                        Calendar App
                                      </h6>
                                      <span className="fs-2 d-block text-muted">
                                        Get dates
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="sidebar-item py-2">
                                  <a
                                    href="../main/app-contact2.html"
                                    className="d-flex align-items-center"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-lifebuoy.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 bg-hover-primary">
                                        Contact List Table
                                      </h6>
                                      <span className="fs-2 d-block text-muted">
                                        Add new contact
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <li className="sidebar-item py-2">
                                  <a
                                    href="../main/app-notes.html"
                                    className="d-flex align-items-center"
                                  >
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="../assets/images/svgs/icon-dd-application.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width="24"
                                        height="24"
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 bg-hover-primary">
                                        Notes Application
                                      </h6>
                                      <span className="fs-2 d-block text-muted">
                                        To-do and Daily tasks
                                      </span>
                                    </div>
                                  </a>
                                </li>
                                <ul className="px-8 mt-7 mb-4">
                                  <li className="sidebar-item mb-3">
                                    <h5 className="fs-5 fw-semibold">
                                      Quick Links
                                    </h5>
                                  </li>
                                  <li className="sidebar-item py-2">
                                    <a
                                      className="fw-semibold text-dark"
                                      href="../main/page-pricing.html"
                                    >
                                      Pricing Page
                                    </a>
                                  </li>
                                  <li className="sidebar-item py-2">
                                    <a
                                      className="fw-semibold text-dark"
                                      href="../main/authentication-login.html"
                                    >
                                      Authentication Design
                                    </a>
                                  </li>
                                  <li className="sidebar-item py-2">
                                    <a
                                      className="fw-semibold text-dark"
                                      href="../main/authentication-register.html"
                                    >
                                      Register Now
                                    </a>
                                  </li>
                                  <li className="sidebar-item py-2">
                                    <a
                                      className="fw-semibold text-dark"
                                      href="../main/authentication-error.html"
                                    >
                                      404 Error Page
                                    </a>
                                  </li>
                                  <li className="sidebar-item py-2">
                                    <a
                                      className="fw-semibold text-dark"
                                      href="../main/app-notes.html"
                                    >
                                      Notes App
                                    </a>
                                  </li>
                                  <li className="sidebar-item py-2">
                                    <a
                                      className="fw-semibold text-dark"
                                      href="../main/page-user-profile.html"
                                    >
                                      User Application
                                    </a>
                                  </li>
                                  <li className="sidebar-item py-2">
                                    <a
                                      className="fw-semibold text-dark"
                                      href="../main/page-account-settings.html"
                                    >
                                      Account Settings
                                    </a>
                                  </li>
                                </ul>
                              </ul>
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
                                href="../main/app-email.html"
                                aria-expanded="false"
                              >
                                <span>
                                  <i className="ti ti-mail"></i>
                                </span>
                                <span className="hide-menu">Email</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="simplebar-placeholder"
                    style={{ width: "330px", height: "234px" }}
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
                      height: "154px",
                      display: "block",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  ></div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="app-header with-horizontal">
          <nav className="navbar navbar-expand-xl container-fluid p-0">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item nav-icon-hover-bg rounded-circle d-flex d-xl-none ms-n2">
                <button
                  className="nav-link sidebartoggler"
                  id="sidebarCollapse"
                >
                  <i className="ti ti-menu-2"></i>
                </button>
              </li>
              <li className="nav-item d-none d-xl-block">
                <Link to="/" className="text-nowrap nav-link">
                  <img
                    src="../assets/images/logos/dark-logo.svg"
                    className="dark-logo"
                    width="180"
                    alt="modernize-img"
                  />
                  <img
                    src="../assets/images/logos/light-logo.svg"
                    className="light-logo"
                    width="180"
                    alt="modernize-img"
                    style={{ display: "none" }}
                  />
                </Link>
              </li>
            </ul>
            <div className="d-block d-xl-none">
              <Link to="/" className="text-nowrap nav-link">
                <img
                  src="../assets/images/logos/dark-logo.svg"
                  width="180"
                  alt="modernize-img"
                />
              </Link>
            </div>
            <button
              className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="p-2">
                <i className="ti ti-dots fs-7"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between px-0 px-xl-8">
                <button
                  className="nav-link round-40 p-1 ps-0 d-flex d-xl-none align-items-center justify-content-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobilenavbar"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <i className="ti ti-align-justified fs-7"></i>
                </button>
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <button
                      className="nav-link moon dark-layout"
                      style={{ display: "flex" }}
                    >
                      <i
                        className="ti ti-moon moon"
                        style={{ display: "flex" }}
                      ></i>
                    </button>
                    <button
                      className="nav-link sun light-layout"
                      style={{ display: "none" }}
                    >
                      <i
                        className="ti ti-sun sun"
                        style={{ display: "none" }}
                      ></i>
                    </button>
                  </li>
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <button
                      className="nav-link"
                      style={{ display: "flex" }}
                      onClick={() => setIsSettingModalOpened(true)}
                    >
                      <i
                        className="icon ti ti-settings fs-7"
                        style={{ display: "flex" }}
                      ></i>
                    </button>
                  </li>

                  <li className="nav-item dropdown">
                    <button
                      className="nav-link pe-0"
                      id="drop1"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center">
                        <div className="user-profile-img">
                          <img
                            src="../assets/images/profile/user-1.jpg"
                            className="rounded-circle"
                            width="35"
                            height="35"
                            alt="modernize-img"
                          />
                        </div>
                      </div>
                    </button>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1"
                    >
                      <div
                        className="profile-dropdown position-relative"
                        data-simplebar="init"
                      >
                        <div
                          className="simplebar-wrapper"
                          style={{ margin: 0 }}
                        >
                          <div className="simplebar-height-auto-observer-wrapper">
                            <div className="simplebar-height-auto-observer"></div>
                          </div>
                          <div className="simplebar-mask">
                            <div
                              className="simplebar-offset"
                              style={{ right: 0, bottom: 0 }}
                            >
                              <div
                                className="simplebar-content-wrapper"
                                role="region"
                                aria-label="scrollable content"
                                style={{ height: "auto", overflow: "hidden" }}
                              >
                                <div
                                  className="simplebar-content"
                                  style={{ padding: 0 }}
                                >
                                  <div className="py-3 px-7 pb-0">
                                    <h5 className="mb-0 fs-5 fw-semibold">
                                      User Profile
                                    </h5>
                                  </div>
                                  <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                                    <img
                                      src="../assets/images/profile/user-1.jpg"
                                      className="rounded-circle"
                                      width="80"
                                      height="80"
                                      alt="modernize-img"
                                    />
                                    <div className="ms-3">
                                      <h5 className="mb-1 fs-3">
                                        Mathew Anderson
                                      </h5>
                                      <span className="mb-1 d-block">
                                        Designer
                                      </span>
                                      <p className="mb-0 d-flex align-items-center gap-2">
                                        <i className="ti ti-mail fs-4"></i>
                                        info@modernize.com
                                      </p>
                                    </div>
                                  </div>
                                  <div className="message-body">
                                    <a
                                      href="../main/page-user-profile.html"
                                      className="py-8 px-7 mt-8 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src="../assets/images/svgs/icon-account.svg"
                                          alt="modernize-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                          My Profile
                                        </h6>
                                        <span className="fs-2 d-block text-body-secondary">
                                          Account Settings
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="../main/app-email.html"
                                      className="py-8 px-7 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src="../assets/images/svgs/icon-inbox.svg"
                                          alt="modernize-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                          My Inbox
                                        </h6>
                                        <span className="fs-2 d-block text-body-secondary">
                                          Messages &amp; Emails
                                        </span>
                                      </div>
                                    </a>
                                    <a
                                      href="../main/app-notes.html"
                                      className="py-8 px-7 d-flex align-items-center"
                                    >
                                      <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                                        <img
                                          src="../assets/images/svgs/icon-tasks.svg"
                                          alt="modernize-img"
                                          width="24"
                                          height="24"
                                        />
                                      </span>
                                      <div className="w-100 ps-3">
                                        <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                          My Task
                                        </h6>
                                        <span className="fs-2 d-block text-body-secondary">
                                          To-do and Daily Tasks
                                        </span>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="d-grid py-4 px-7 pt-8">
                                    <div className="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-4 p-4 mb-9">
                                      <div className="row">
                                        <div className="col-6">
                                          <h5 className="fs-4 mb-3 fw-semibold">
                                            Unlimited Access
                                          </h5>
                                          <button className="btn btn-primary">
                                            Upgrade
                                          </button>
                                        </div>
                                        <div className="col-6">
                                          <div className="m-n4 unlimited-img">
                                            <img
                                              src="../assets/images/backgrounds/unlimited-bg.png"
                                              alt="modernize-img"
                                              className="w-100"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <a
                                      href="../main/authentication-login.html"
                                      className="btn btn-outline-primary"
                                    >
                                      Log Out
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="simplebar-placeholder"
                            style={{ width: 0, height: 0 }}
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
                          style={{ visibility: "hidden" }}
                        >
                          <div
                            className="simplebar-scrollbar"
                            style={{ height: 0, display: "none" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {isSettingModalOpened && (
        <SettingModal setIsSettingModalOpened={setIsSettingModalOpened} />
      )}
    </>
  );
}
