import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logoHeader from '../../logos/Group 1329.png';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handelGoogleSignup = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const newUserInfo = {
                    name: result.user.displayName,
                    email: result.user.email
                };
                console.log(newUserInfo);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch(error => {
                console.log(error.message);
            });
    }



    return (
        <div className='d-flex flex-column align-items-center mt-5 mb-5'>
            <Link to='/'>
                <img style={{ height: '60px', width: '202.81px' }} src={logoHeader} alt="" />
            </Link>
            <div className="mt-5 loginBox d-flex flex-column align-items-center" >
                <h3>Login With</h3>
                <Button className='btn  btn-success w-75 mt-5' onClick={handelGoogleSignup}>continue with Google</Button>
            </div>
        </div>
    );
};

export default Login;