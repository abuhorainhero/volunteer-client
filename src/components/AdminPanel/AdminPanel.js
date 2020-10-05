import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logoHeader from '../../logos/Group 1329.png';

const AdminPanel = () => {
    const history = useHistory();
    const [volRegister, setVolRegister] = useState([]);

    const handleRegisterList = () => {
        history.push('/admin');
    }

    useEffect(() => {
        fetch('https://peaceful-beach-73677.herokuapp.com/adminPanel')
            .then(res => res.json())
            .then(data => {
                setVolRegister(data);
            })
    }, [])

    const handleAddEvent = () => {
        history.push('/adminAddEvent');
    }

    const handleDelete = (id) => {
        fetch(`https://peaceful-beach-73677.herokuapp.com/deleteRegister/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => { })
    }

    return (
        <div className="container">
            <div className="row">
                <div style={{ borderRight: '1px solid lightGray' }} className="col-md-3 ">
                    <img style={{ width: 'auto', height: '60px' }} src={logoHeader} alt="" />

                    <div className='mt-5'>
                        <button className='btn mb-5' onClick={handleRegisterList}>Volunteer register list</button>

                        <button className='btn' onClick={handleAddEvent}>Add event</button>
                    </div>

                </div>
                <div className="col-md-9">
                    <h3>Volunteer register list</h3>

                    <div className='mt-5'>
                        <table className="table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Registerting date </th>
                                    <th scope="col">Volunteer list</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    volRegister.map(info => <tr key={info._id}>
                                        <td >{info.name}</td>
                                        <td>{info.email}</td>
                                        <td>{info.date}</td>
                                        <td>{info.title}</td>
                                        <td >
                                            <button onClick={() => handleDelete(`${info._id}`)}>delete</button>
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminPanel;