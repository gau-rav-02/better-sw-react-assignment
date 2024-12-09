import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/signup" element={<SignUpForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
