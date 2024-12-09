import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import useLocalStorage from '../hooks/useLocalStorage';
import { Link } from 'react-router-dom';
import '../styles/formStyles.css';

const LoginForm: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [storedEmail, setStoredEmail] = useLocalStorage<string>('rememberedEmail', '');

    const initialValues = {
        email: storedEmail || '',
        password: '',
    };

    const validateEmail = (email: string) => {
        let error;
        if (!email) {
            error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            error = 'Invalid email format';
        }
        return error;
    };

    const validatePassword = (password: string) => {
        let error;
        if (!password) {
            error = 'Password is required';
        }
        return error;
    };

    const handleSubmit = (values: { email: string; password: string }) => {
        if (rememberMe) setStoredEmail(values.email);
        setSuccessMessage('Login Successful');
    };

    return (
        <div className='container'>
            <h2>Login</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue }) => (
                    <Form aria-label="Login Form" className='form-contents'>
                        <div>
                            <label className='label' htmlFor="email">Email</label>
                            <Field className="input-field" type="email" id="email" name="email" validate={validateEmail} />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div>
                            <label className='label' htmlFor="password">Password</label>
                            <Field className="input-field" type="password" id="password" name="password" validate={validatePassword} />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <div>
                            <label className='label2'>
                                <Field
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                Remember Me
                            </label>
                        </div>
                        <button type="submit">Login</button>
                    </Form>
                )}
            </Formik>
            {successMessage && <p className="success">{successMessage}</p>}
            <footer>
                <Link to="/signup">Don't have an account? Register</Link>
            </footer>
        </div>
    );
};

export default LoginForm;
