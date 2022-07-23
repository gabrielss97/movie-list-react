import { Link } from "react-router-dom";

export const MainMenu = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/favorites">
          Favorites
        </Link>
      </li>
    </ul>
  );
};
