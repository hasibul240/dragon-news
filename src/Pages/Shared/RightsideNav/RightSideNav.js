import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {

    const { provider_login } = React.useContext(AuthContext);

    const google_provider = new GoogleAuthProvider();

    const handle_google_login = () => {
        
        provider_login(google_provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <ButtonGroup className='mb-4' style={{ width: "100%" }} vertical>
                <Button onClick={handle_google_login} className='mb-2' variant="outline-primary"><FaGoogle /> Log in with Google</Button>
                <Button variant="outline-dark"><FaGithub /> Log in with github</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel />
            </div>
        </div>
    );
};

export default RightSideNav;