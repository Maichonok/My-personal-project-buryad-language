import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-links">
          <ul>
            <li>
              <NavLink to="/" className="active" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/lessons" className="active">
                Lessons
              </NavLink>
            </li>
            <li>
              <NavLink to="/words" className="active">
                Words
              </NavLink>
            </li>
            <li>
              <NavLink to="/quiz" className="active">
                Quiz
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
