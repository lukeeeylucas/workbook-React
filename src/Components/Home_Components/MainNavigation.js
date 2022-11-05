import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () =>{
    return (
        <header className={classes.header}>
        <div className={classes.logo}>
                 WorkBook
        </div>
        
        <nav className={classes.nav}>
          <ul>
          <li>
              <NavLink to = '/home' activeClassName={classes.active}>
                    Home
              </NavLink>
            </li>
            <li>
              <NavLink to = '/users' activeClassName={classes.active}>
                    Users
              </NavLink>
            </li>
            <li>
              <NavLink to = '/create' activeClassName={classes.active}>
                    Add
              </NavLink>
            </li>


            
          
          </ul>
        </nav>
      </header>
    );
}

export default MainNavigation;