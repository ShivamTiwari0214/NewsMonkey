import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav  className="fixed-top navbar navbar-expand-lg  navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News-Monkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/scienceNews">
                  science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/businessNews"
                >
                  business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/entertainmentNews"
                >
                  entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/healthNews"
                >
                  health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/sportsNews"
                >
                  sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/technologyNews"
                >
                  technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
