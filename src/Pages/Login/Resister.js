import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';



const Resister = () => {

    const [error, set_error] = React.useState('');
    const [chacked, set_chacked] = React.useState(false);

    // const navigate = useNavigate();
    const { create_user, update_user_profile, varify_email } = React.useContext(AuthContext);

    const handle_submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photo_url.value;

        create_user(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user);
                set_error('');
                handle_update_profile(name, photoURL);
                handle_varify_email();
                toast.success('Please check your email for varification');
            })
            .catch(error => {
                console.error(error);
                set_error(error.message);
            });
    }

    const handle_update_profile = (name, photoURL) => {
        const profile = { displayName: name, photoURL: photoURL };
        update_user_profile(profile)
    }

    const handle_varify_email = () => {
        varify_email()
            .then(() => {})
            .catch(error => console.error(error));
    }

    const handle_check = (event) => {
        set_chacked(event.target.checked)
    }

    return (
        <Form onSubmit={handle_submit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control name='photo_url' type="text" placeholder="Photo ULR" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={handle_check} type="checkbox" label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!chacked}>
                Register
            </Button>
            <Form.Text className="text-muted">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Resister;