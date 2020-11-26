import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { UserContext } from '../../App';
import Volunteer from '../Volunteer/Volunteer';

const Home = () => {
    const [volunteerInfo, setVolunteerInfo] = useContext(UserContext);

    return (
        <div className="container mb-5">
            <div className="d-flex flex-column align-items-center mt-5 mb-5">
                <h1>I grow by helping people in need.</h1>

                <Form className='form-inline'>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <Button className="btn btn-primary my-2 my-sm-0" type="submit">Search</Button>
                </Form>
            </div>

            <div className="row">
                {
                    volunteerInfo.map(info => <Volunteer key={info.id} volunteer={info}></Volunteer>)
                }
            </div>

        </div>
    );
};

export default Home;