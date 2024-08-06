import React, { useState } from "react";
import API from "../../utils/API";
import { Container, Form, Button, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import '../Main/Main.css';
import Navbar from "../Navbar";

const FirstRegistration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        state: '',
        dancerType: ''
    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleChange = (event, { name, value }) => {
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, city, state, dancerType } = formData;

        API.createAttendee({ firstName, lastName, email, city, state, dancerType })
            .then(res => {
                setSuccess(true);
                setError(false);
                navigate('/checkout'); // Redirect to /checkout
            })
            .catch(err => {
                setError(true);
                setSuccess(false);
                setErrorMsg(err.response.data);
            });
    }

    const options = [
        { key: 'poetry', text: 'Poetry', value: 'Poetry' },
        { key: 'short_story', text: 'Short Story and Essay', value: 'Short Story and Essay' },
        { key: 'short_film', text: 'Short Film', value: 'Short Film' },
        { key: 'music_dance', text: 'Music and Dance', value: 'Music and Dance' },
        { key: 'painting_digital', text: 'Painting and Digital Art', value: 'Painting and Digital Art' },
        { key: 'other', text: 'Other (State the art form)', value: 'Other' }
    ];

    return (
        <div>
            <Navbar />
            <Container>
                <h2>Register for the Event</h2>
                <Form onSubmit={handleSubmit} success={success} error={error}>
                    <Form.Input
                        label="First Name"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label="Last Name"
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label="Email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email"
                    />
                    <Form.Input
                        label="City"
                        placeholder="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label="State"
                        placeholder="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                    <Form.Select
                        label="Program"
                        placeholder="Select your art form"
                        name="dancerType"
                        options={options}
                        value={formData.dancerType}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" positive>Register</Button>
                    <Message success header="Registration Successful" content="You have been registered successfully!" />
                    <Message error header="Registration Failed" content={errorMsg} />
                </Form>
            </Container>
        </div>
    );
}

export default FirstRegistration;
