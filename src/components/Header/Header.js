import React, { useContext } from 'react';
import './Header.css';
import logoHeader from '../../logos/Group 1329.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand" >
                    <img src={logoHeader} alt="" />
                </Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/donation'>Donation</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to='/events'>Events</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link " to='/blog'>Blog</Link>
                        </li>

                        {
                            loggedInUser.name ? <li className="nav-item active">
                            <Link className="nav-link" to='/'> {loggedInUser.name} </Link>
                        </li> : <>
                                <li className="nav-item">
                                    <Link className="nav-link " to='/register'>
                                        <Button type="button" className="btn btn-primary">Register</Button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to='/admin'>
                                        <Button type="button" className="btn btn-dark">Admin</Button>
                                    </Link>
                                </li>
                            </>
                        }

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;