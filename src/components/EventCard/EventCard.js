import React from 'react';
import image from '../../images/extraVolunteer.png'

const EventCard = (props) => {
    const {_id, title, date } = props.eventInfo;

    const handleCancel = (id) => {
        fetch(`https://peaceful-beach-73677.herokuapp.com/deleteRegister/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => { })
    }

    return (
        <div className='col-md-6 d-flex justify-content-between mt-5' 
        style={{boxShadow: '2px 2px 5px lightGray'}}>

            <img style={{ height: "100px", width: "100px" }} src={image} alt="" />
            <div>
                <h4>{title}</h4>
                <h6>{date}</h6>
            </div>
            <button onClick={() => handleCancel(_id)} className='btn btn-default'>Cancel</button>

        </div>
    );
};

export default EventCard;