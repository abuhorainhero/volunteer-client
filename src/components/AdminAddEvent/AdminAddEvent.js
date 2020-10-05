import React from 'react';
import { useHistory } from 'react-router-dom';
import logoHeader from '../../logos/Group 1329.png';
import { handleAddEvent } from '../AdminPanel/AdminPanel';
import './AdminAddEvent.css';

const AdminAddEvent = () => {
    const history = useHistory();

    const handleRegisterList = () => {
        history.push('/admin')
    }

    const handleAddEvent = () => {
        history.push('/adminAddEvent');
    }

    const handleAddEventSubmit = (e) => {
        e.preventDefault();

        const title = document.getElementById('titleName').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;

        const newEvent = {title: title, description, date:date}

        fetch('http://localhost:5000/addVolunteerInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent)
        })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 " style={{borderRight:"1px solid lightGray"}}>
                    <img style={{ width: 'auto', height: '60px' }} src={logoHeader} alt="" />

                    <div className='mt-5'>
                        <button className='btn mb-5' onClick={handleRegisterList}>Volunteer register list</button>

                        <button className='btn mb-5' onClick={handleAddEvent}>Add event</button>
                    </div>

                </div>
                <div className="col-md-9">
                    <h3>Add event</h3>

                    <div className='mt-5'>
                        <form onSubmit={handleAddEventSubmit} className='addFormStyle' >
                            <label htmlFor="Event Title">Event Title</label>
                            <input type="text" name="" id="titleName" placeholder="Event Title" className="form-control" required/>

                            <label htmlFor="Description">Description</label>
                            <input type="text" name="" id="description" placeholder="Description" className="form-control"/>

                            <label htmlFor="Date">Event Date</label>
                            <input type="date" name="" id="date" className="form-control" />

                            <input type="submit" value="Submit"/>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminAddEvent;