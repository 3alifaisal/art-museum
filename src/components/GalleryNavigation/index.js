import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

function GalleryNavigation({ galleries }) {
  return (
    <nav>
      <h1>galleries</h1>
      <NavLink exact to="/">
        Home
      </NavLink>
      <ul>
        {galleries.map((gallery) => {
          return (
            <li key={gallery.id}>
              <NavLink to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default GalleryNavigation;
