import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}
