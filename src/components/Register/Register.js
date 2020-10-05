import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logoHeader from '../../logos/Group 1329.png';
import './Register.css';

const Register = () => {
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { title } = useParams()
    const [selected, setSelected] = useState({
        date: new Date(),
        title: title
    })

    const handleDate = () => {
        const newInfo = { ...selected };
        const date = document.getElementById('date').value;
        newInfo.date = date;
        setSelected(newInfo);
        console.log(date)
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        
        const newUserInfo = { ...loggedInUser, ...selected };
        console.log(newUserInfo)

        fetch('http://localhost:5000/addVolunteerUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUserInfo)
        })
        .then(res => res.json())
        .then(data => {
            history.push('/events')
        } )
    
    }

    return (
        <div className='d-flex flex-column align-items-center mt-5 mb-5'>
            <Link to='/'>
                <img style={{ height: '60px', width: '202.81px' }} src={logoHeader} alt="" />
            </Link>

            <Form onSubmit={handleRegisterSubmit}>
                <div className="form-group formStyle">
                    <h3>Register as a Volunteer </h3>

                    <input type="text" defaultValue={loggedInUser.name} id="name" className="form-control mt-5 " placeholder="your name" />

                    <input type="email" defaultValue={loggedInUser.email} id="email" className="form-control" placeholder="your email" />

                    <input type="date" name="" id="date"
                        defaultValue={new Date()}
                        onChange={handleDate}
                        className="form-control" required />

                    <input type="text" name="" id="name" className="form-control " placeholder='Description' />

                    <input type="text" defaultValue={title} name="" id="name" className="form-control " />

                    <input className='text-center form-control btn-primary' type="submit" value="Registration" />
                </div>
            </Form>

        </div>
    );
};

export default Register;