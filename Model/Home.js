import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
const Home = () => { 
    const navigate = useNavigate(); 
    const goToProjects = () => { 
        navigate('/projects');
     };
     return (
         <div style={{ background: 'blue' }}>
         <h1>Home</h1>
          <button onClick={goToProjects}>Projects</button> 
          </div> 
          );
           };
            export default Home;
            