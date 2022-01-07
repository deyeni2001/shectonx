import {Link} from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourite-context";

function MainNavigation() {
  const favouriteCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Coding Meetups</div>
      <div> 
          <ul>
              <li>
                  <Link to='/'>All Meetups</Link>
              </li>
              <li>
                  <Link to='/new-meetups'>New Meetups</Link>
              </li>
              <li>
                  <Link to='/favourites'>Favourites<span className={classes.badge}>{favouriteCtx.totalFavourites}</span></Link>
              </li>
          </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
