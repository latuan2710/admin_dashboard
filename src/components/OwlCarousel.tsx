export default function OwlCarousel() {
  return (
    <div className="owl-carousel counter-carousel owl-theme">
      <div className="item">
        <div className="card border-0 zoom-in bg-primary-subtle shadow-none">
          <div className="card-body">
            <div className="text-center">
              <img
                src="./assets/images/svgs/icon-user-male.svg"
                width="50"
                height="50"
                className="mb-3"
                alt="modernize-img"
              />
              <p className="fw-semibold fs-3 text-primary mb-1">Employees</p>
              <h5 className="fw-semibold text-primary mb-0">96</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="card border-0 zoom-in bg-warning-subtle shadow-none">
          <div className="card-body">
            <div className="text-center">
              <img
                src="./assets/images/svgs/icon-briefcase.svg"
                width="50"
                height="50"
                className="mb-3"
                alt="modernize-img"
              />
              <p className="fw-semibold fs-3 text-warning mb-1">Clients</p>
              <h5 className="fw-semibold text-warning mb-0">3,650</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="card border-0 zoom-in bg-info-subtle shadow-none">
          <div className="card-body">
            <div className="text-center">
              <img
                src="./assets/images/svgs/icon-mailbox.svg"
                width="50"
                height="50"
                className="mb-3"
                alt="modernize-img"
              />
              <p className="fw-semibold fs-3 text-info mb-1">Projects</p>
              <h5 className="fw-semibold text-info mb-0">356</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="card border-0 zoom-in bg-danger-subtle shadow-none">
          <div className="card-body">
            <div className="text-center">
              <img
                src="./assets/images/svgs/icon-favorites.svg"
                width="50"
                height="50"
                className="mb-3"
                alt="modernize-img"
              />
              <p className="fw-semibold fs-3 text-danger mb-1">Events</p>
              <h5 className="fw-semibold text-danger mb-0">696</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="card border-0 zoom-in bg-success-subtle shadow-none">
          <div className="card-body">
            <div className="text-center">
              <img
                src="./assets/images/svgs/icon-speech-bubble.svg"
                width="50"
                height="50"
                className="mb-3"
                alt="modernize-img"
              />
              <p className="fw-semibold fs-3 text-success mb-1">Payroll</p>
              <h5 className="fw-semibold text-success mb-0">$96k</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="card border-0 zoom-in bg-info-subtle shadow-none">
          <div className="card-body">
            <div className="text-center">
              <img
                src="./assets/images/svgs/icon-connect.svg"
                width="50"
                height="50"
                className="mb-3"
                alt="modernize-img"
              />
              <p className="fw-semibold fs-3 text-info mb-1">Reports</p>
              <h5 className="fw-semibold text-info mb-0">59</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
