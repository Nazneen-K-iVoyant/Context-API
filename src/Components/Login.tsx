import React, { useContext, useState } from 'react'
import { LoginContext } from '../Contexts/LoginContext'

const Login = () => {
  const { setUserName, setShowProfile } = useContext(LoginContext);
  const [username, setUsername] = useState(""); // Add state for username

  const handleLogin = () => {
    setUserName(username); // Set the username in context
    setShowProfile(true); // Show the profile page
  };

  return (
    <>
      <div className='container'  >
        <h2>Login Form</h2>
      <input 
        type="text" 
        placeholder='Username...' 
        value={username} 
        onChange={(event) => setUsername(event.target.value)} // Update the username state
      />
      <br />
      <input type='text' placeholder='Password...' />
      <br />
      <button onClick={handleLogin}>LOGIN</button> {/* Use handleLogin function */}
      </div>
    </>
  )
}

export default Login

