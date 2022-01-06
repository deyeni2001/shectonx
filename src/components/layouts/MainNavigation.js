import {Link} from "react-router-dom";
import classes from "./MainNavigation.module.css"

function MainNavigation() {
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
                  <Link to='/favourites'>Favourites</Link>
              </li>
          </ul>
      </div>
    </header>
  );
}

export default MainNavigation;
