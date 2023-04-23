import { NavLink } from 'react-router-dom';
// import styles from './Navigation.module.css';

export const Navigation = (props) => {
    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink className='' to="/">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink className='' to="/recipes/list">
                        Recipes
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink className='' to="/about">
                        About
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink className='' to="/contacts">
                        Contacts
                    </NavLink>
                </div>
            </div>

            <div className="right-side">
                <div className="nav-link-wrapper">
                    <NavLink to="/">
                        logout
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink className='' to="/login">
                        login
                    </NavLink>
                </div>
                <div className="nav-link-wrapper">
                    <NavLink className='' to="/register">
                        try it free
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
