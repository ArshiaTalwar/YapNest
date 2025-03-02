import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavWrapper>
      <nav className="navbar fixed-top navbar-light bg-light">
        <Link className="navbar-brand" to="/">YapNest</Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
          <a  className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Blogs">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Auth">Login</Link>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  .navbar {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;
    margin:0 65px 0 65px;
  }

  .nav-link {
    color: #264143 !important;
    font-weight: bold;
    margin-left: 20px;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #DE5499 !important;
  }

  .navbar-brand {
    font-size: 1.5rem;
    font-weight: 900;
    color: #DE5499 !important;
  }
`;
