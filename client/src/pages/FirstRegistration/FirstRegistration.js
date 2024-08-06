import React, { useState } from "react";
import API from "../../utils/API";
import { Container, Form, Button, Message } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Main/Main.css';
import Navbar from "../Navbar";

const FirstRegistration = () => {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        state: '',
        dancerType: '',
        phoneNumber: '',
        otherDescription: ''
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
        const { firstName, lastName, email, city, state, dancerType, phoneNumber, otherDescription } = formData;

        API.createAttendee({ firstName, lastName, email, city, state, dancerType, phoneNumber, otherDescription })
            .then(res => {
                setSuccess(true);
                setError(false);
                navigate('/checkout');
            })
            .catch(err => {
                setError(true);
                setSuccess(false);
                setErrorMsg(err.response.data);
            });
    }

    const options = [
        { key: 'poetry', text: i18n.language === 'am' ? 'ቅኔ' : 'Poetry', value: 'Poetry' },
        { key: 'short_story', text: i18n.language === 'am' ? 'አነስ ተረት እና አሰሳ' : 'Short Story and Essay', value: 'Short Story and Essay' },
        { key: 'short_film', text: i18n.language === 'am' ? 'አነስ ፊልም' : 'Short Film', value: 'Short Film' },
        { key: 'music_dance', text: i18n.language === 'am' ? 'ሙዚቃ እና ዳንስ' : 'Music and Dance', value: 'Music and Dance' },
        { key: 'painting_digital', text: i18n.language === 'am' ? 'ስዕል እና ዲጂታል አርት' : 'Painting and Digital Art', value: 'Painting and Digital Art' },
        { key: 'other', text: i18n.language === 'am' ? 'ሌላ' : 'Other', value: 'Other' }
    ];

    return (
        <div>
            <Navbar />
            <Container>
                <Button onClick={() => i18n.changeLanguage('en')}>English</Button>
                <Button onClick={() => i18n.changeLanguage('am')}>አማርኛ</Button>
                <h2>{t('registerForEvent')}</h2>
                <Form onSubmit={handleSubmit} success={success} error={error}>
                    <Form.Input
                        label={t('firstName')}
                        placeholder={t('firstName')}
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label={t('lastName')}
                        placeholder={t('lastName')}
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label={t('phoneNumber')}
                        placeholder={t('phoneNumber')}
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        type="tel"
                    />
                    <Form.Input
                        label={t('city')}
                        placeholder={t('city')}
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label={t('currentAddress')}
                        placeholder={t('currentAddress')}
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        label={t('email')}
                        placeholder={t('email')}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email"
                    />
                    <Form.Select
                        label={t('artForm')}
                        placeholder={t('selectArtForm')}
                        name="dancerType"
                        options={options}
                        value={formData.dancerType}
                        onChange={handleChange}
                        required
                    />
                    {formData.dancerType === 'Other' && (
                        <Form.Input
                            label={t('describeArtForm')}
                            placeholder={t('describeArtForm')}
                            name="otherDescription"
                            value={formData.otherDescription}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <Button type="submit" positive>{t('register')}</Button>
                    <Message success header={t('registrationSuccessful')} content={t('registrationSuccessMessage')} />
                    <Message error header={t('registrationFailed')} content={t('registrationFailMessage')} />
                </Form>
            </Container>
        </div>
    );
}

export default FirstRegistration;
