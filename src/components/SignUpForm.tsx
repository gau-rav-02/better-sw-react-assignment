import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../styles/formStyles.css';

const SignUpForm: React.FC = () => {
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [passwordStrength, setPasswordStrength] = useState<string>('');

    const validateEmail = (email: string) => {
        let error;
        if (!email) {
            error = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            error = 'Invalid email format';
        }
        return error;
    };

    const validatePassword = (password: string) => {
        let error;
        if (!password) {
            error = 'Password is required';
        } else if (password.length < 6) {
            setPasswordStrength('Weak');
            error = 'Password must be at least 6 characters';
        } else if (password.length < 10) {
            setPasswordStrength('Moderate');
        } else {
            setPasswordStrength('Strong');
        }
        return error;
    };

    return (
        <div className='container'>
            <h2>Sign Up</h2>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, { resetForm }) => {
                    setSuccessMessage('Sign Up Successful');
                    resetForm();
                }}
            >
                {(formik) => (
                    <Form aria-label="Sign Up Form" className='form-contents'>
                        <div>
                            <label className='label' htmlFor="email">Email</label>
                            <Field className="input-field" type="email" id="email" name="email" validate={validateEmail} />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div>
                            <label className='label' htmlFor="password">Password</label>
                            <Field
                                className="input-field"
                                type="password"
                                id="password"
                                name="password"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    const password = e.target.value;
                                    validatePassword(password);
                                    formik.setFieldValue('password', password);
                                }}
                            />
                            <ErrorMessage name="password" component="div" className="error" />
                            <p className='pass-strength-text'>Password Strength: <span>{passwordStrength}</span></p>
                        </div>
                        <button type="submit">Sign Up</button>
                    </Form>
                )}
            </Formik>
            {successMessage && <p className="success">{successMessage}</p>}
        </div>
    );
};

export default SignUpForm;
