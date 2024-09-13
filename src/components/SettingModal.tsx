import { useEffect } from "react";

interface SettingModalProps {
  setIsSettingModalOpened: (theme: boolean) => void;
}

export default function SettingModal({
  setIsSettingModalOpened,
}: SettingModalProps) {
  useEffect(() => {
    const event = new Event("setting");
    document.dispatchEvent(event);
  }, []);

  function handleColorTheme(e: string) {
    document.documentElement.setAttribute("data-color-theme", e);
  }

  return (
    <>
      <div
        className="offcanvas customizer offcanvas-end show"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        aria-modal="true"
        role="dialog"
      >
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
          <h4
            className="offcanvas-title fw-semibold"
            id="offcanvasExampleLabel"
          >
            Settings
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setIsSettingModalOpened(false)}
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
              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
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
                    <h6 className="fw-semibold fs-4 mb-2">Theme</h6>

                    <div
                      className="d-flex flex-row gap-3 customizer-box"
                      role="group"
                    >
                      <input
                        type="radio"
                        className="btn-check light-layout"
                        name="theme-layout"
                        id="light-layout"
                      />
                      <label
                        className="btn p-9 btn-outline-primary rounded-2"
                        htmlFor="light-layout"
                      >
                        <i className="icon ti ti-brightness-up fs-7 me-2"></i>
                        Light
                      </label>

                      <input
                        type="radio"
                        className="btn-check dark-layout"
                        name="theme-layout"
                        id="dark-layout"
                      />
                      <label
                        className="btn p-9 btn-outline-primary rounded-2"
                        htmlFor="dark-layout"
                      >
                        <i className="icon ti ti-moon fs-7 me-2"></i>Dark
                      </label>
                    </div>

                    <h6 className="mt-5 fw-semibold fs-4 mb-2">
                      Theme Direction
                    </h6>
                    <div
                      className="d-flex flex-row gap-3 customizer-box"
                      role="group"
                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="direction-l"
                        id="ltr-layout"
                      />
                      <label
                        className="btn p-9 btn-outline-primary"
                        htmlFor="ltr-layout"
                      >
                        <i className="icon ti ti-text-direction-ltr fs-7 me-2"></i>
                        LTR
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="direction-l"
                        id="rtl-layout"
                      />
                      <label
                        className="btn p-9 btn-outline-primary"
                        htmlFor="rtl-layout"
                      >
                        <i className="icon ti ti-text-direction-rtl fs-7 me-2"></i>
                        RTL
                      </label>
                    </div>

                    <h6 className="mt-5 fw-semibold fs-4 mb-2">Theme Colors</h6>

                    <div
                      className="d-flex flex-row flex-wrap gap-3 customizer-box color-pallete"
                      role="group"
                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="color-theme-layout"
                        id="Blue_Theme"
                        autoComplete="off"
                      />
                      <label
                        className="btn p-9 btn-outline-primary d-flex align-items-center justify-content-center"
                        onClick={() => handleColorTheme("Blue_Theme")}
                        htmlFor="Blue_Theme"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="BLUE_THEME"
                      >
                        <div className="color-box rounded-circle d-flex align-items-center justify-content-center skin-1">
                          <i className="ti ti-check text-white d-flex icon fs-5"></i>
                        </div>
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="color-theme-layout"
                        id="Aqua_Theme"
                        autoComplete="off"
                      />
                      <label
                        className="btn p-9 btn-outline-primary d-flex align-items-center justify-content-center"
                        onClick={() => handleColorTheme("Aqua_Theme")}
                        htmlFor="Aqua_Theme"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="AQUA_THEME"
                      >
                        <div className="color-box rounded-circle d-flex align-items-center justify-content-center skin-2">
                          <i className="ti ti-check text-white d-flex icon fs-5"></i>
                        </div>
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="color-theme-layout"
                        id="Purple_Theme"
                        autoComplete="off"
                      />
                      <label
                        className="btn p-9 btn-outline-primary d-flex align-items-center justify-content-center"
                        onClick={() => handleColorTheme("Purple_Theme")}
                        htmlFor="Purple_Theme"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="PURPLE_THEME"
                      >
                        <div className="color-box rounded-circle d-flex align-items-center justify-content-center skin-3">
                          <i className="ti ti-check text-white d-flex icon fs-5"></i>
                        </div>
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="color-theme-layout"
                        id="green-theme-layout"
                        autoComplete="off"
                      />
                      <label
                        className="btn p-9 btn-outline-primary d-flex align-items-center justify-content-center"
                        onClick={() => handleColorTheme("Green_Theme")}
                        htmlFor="green-theme-layout"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="GREEN_THEME"
                      >
                        <div className="color-box rounded-circle d-flex align-items-center justify-content-center skin-4">
                          <i className="ti ti-check text-white d-flex icon fs-5"></i>
                        </div>
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="color-theme-layout"
                        id="cyan-theme-layout"
                        autoComplete="off"
                      />
                      <label
                        className="btn p-9 btn-outline-primary d-flex align-items-center justify-content-center"
                        onClick={() => handleColorTheme("Cyan_Theme")}
                        htmlFor="cyan-theme-layout"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="CYAN_THEME"
                      >
                        <div className="color-box rounded-circle d-flex align-items-center justify-content-center skin-5">
                          <i className="ti ti-check text-white d-flex icon fs-5"></i>
                        </div>
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="color-theme-layout"
                        id="orange-theme-layout"
                        autoComplete="off"
                      />
                      <label
                        className="btn p-9 btn-outline-primary d-flex align-items-center justify-content-center"
                        onClick={() => handleColorTheme("Orange_Theme")}
                        htmlFor="orange-theme-layout"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="ORANGE_THEME"
                      >
                        <div className="color-box rounded-circle d-flex align-items-center justify-content-center skin-6">
                          <i className="ti ti-check text-white d-flex icon fs-5"></i>
                        </div>
                      </label>
                    </div>

                    <h6 className="mt-5 fw-semibold fs-4 mb-2">Layout Type</h6>
                    <div
                      className="d-flex flex-row gap-3 customizer-box"
                      role="group"
                    >
                      <div>
                        <input
                          type="radio"
                          className="btn-check"
                          name="page-layout"
                          id="vertical-layout"
                        />
                        <label
                          className="btn p-9 btn-outline-primary"
                          htmlFor="vertical-layout"
                        >
                          <i className="icon ti ti-layout-sidebar-right fs-7 me-2"></i>
                          Vertical
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          className="btn-check"
                          name="page-layout"
                          id="horizontal-layout"
                        />
                        <label
                          className="btn p-9 btn-outline-primary"
                          htmlFor="horizontal-layout"
                        >
                          <i className="icon ti ti-layout-navbar fs-7 me-2"></i>
                          Horizontal
                        </label>
                      </div>
                    </div>

                    <h6 className="mt-5 fw-semibold fs-4 mb-2">
                      Container Option
                    </h6>

                    <div
                      className="d-flex flex-row gap-3 customizer-box"
                      role="group"
                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="layout"
                        id="boxed-layout"
                      />
                      <label
                        className="btn p-9 btn-outline-primary"
                        htmlFor="boxed-layout"
                      >
                        <i className="icon ti ti-layout-distribute-vertical fs-7 me-2"></i>
                        Boxed
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="layout"
                        id="full-layout"
                      />
                      <label
                        className="btn p-9 btn-outline-primary"
                        htmlFor="full-layout"
                      >
                        <i className="icon ti ti-layout-distribute-horizontal fs-7 me-2"></i>
                        Full
                      </label>
                    </div>

                    <h6 className="fw-semibold fs-4 mb-2 mt-5">Sidebar Type</h6>
                    <div
                      className="d-flex flex-row gap-3 customizer-box"
                      role="group"
                    >
                      <div className="fullsidebar">
                        <input
                          type="radio"
                          className="btn-check"
                          name="sidebar-type"
                          id="full-sidebar"
                        />
                        <label
                          className="btn p-9 btn-outline-primary"
                          htmlFor="full-sidebar"
                        >
                          <i className="icon ti ti-layout-sidebar-right fs-7 me-2"></i>
                          Full
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          className="btn-check"
                          name="sidebar-type"
                          id="mini-sidebar"
                        />
                        <label
                          className="btn p-9 btn-outline-primary"
                          htmlFor="mini-sidebar"
                        >
                          <i className="icon ti ti-layout-sidebar fs-7 me-2"></i>
                          Collapse
                        </label>
                      </div>
                    </div>

                    <h6 className="mt-5 fw-semibold fs-4 mb-2">Card With</h6>

                    <div
                      className="d-flex flex-row gap-3 customizer-box"
                      role="group"
                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="card-layout"
                        id="card-with-border"
                      />
                      <label
                        className="btn p-9 btn-outline-primary"
                        htmlFor="card-with-border"
                      >
                        <i className="icon ti ti-border-outer fs-7 me-2"></i>
                        Border
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="card-layout"
                        id="card-without-border"
                      />
                      <label
                        className="btn p-9 btn-outline-primary"
                        htmlFor="card-without-border"
                      >
                        <i className="icon ti ti-border-none fs-7 me-2"></i>
                        Shadow
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "330px", height: "1053px" }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                width: "0px",
                transform: "translate3d(0px, 0px, 0px)",
                display: "none",
              }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "visible" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                height: "39px",
                transform: "translate3d(0px, 58px, 0px)",
                display: "block",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsSettingModalOpened(false)}
        className="offcanvas-backdrop fade show"
      ></div>
    </>
  );
}
