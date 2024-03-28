import  Logo  from "../../components/Common/Logo";
import Link from 'next/link'

import { Login } from "@microsoft/mgt-react";

const SideBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
{/*       <div className="container-fluid">
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
        <Link href="/">
          <Logo />
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                href="/home/Project"
                className="nav-link"
                aria-current="page"
              >
                Redigir novo projeto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/home/ProjectList">
                Pesquisa
              </Link>
            </li>
          </ul>
          <Login />
        </div>
      </div> */}
    </nav>
  );
};
export default SideBar