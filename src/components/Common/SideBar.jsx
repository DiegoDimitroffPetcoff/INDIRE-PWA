import { Logo } from "./Logo";
import { Link } from "react-router-dom";

import { Login } from "@microsoft/mgt-react";

export const SideBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/">
            <Logo />
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/AddProjectPage"
                  className="nav-link"
                  aria-current="page"
                >
                  Add Project
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Search By Number
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Search By Title
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="false">
                  Disabled
                </a>
              </li>
            </ul>
            <Login />
          </div>
        </div>
      </nav>
    </>
  );
};

{
  /* SEARCHER (IF IS NECESSARY)
  <form className="d-flex" role="search">
<input
  className="form-control me-2"
  type="search"
  placeholder="Search"
  aria-label="Search"
/>
<button className="btn btn-outline-success" type="submit">
  Search
</button>
</form> */
}
