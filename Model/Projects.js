import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();
    const goToContact = () => {
        navigate('/contact');
    };
    return (
        <div style={{ background: 'green' }}>
            <h1>Projects</h1>
            <button onClick={goToContact}>Contact</button>
        </div>
    );
};

export default Projects;
