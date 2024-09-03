import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGlobalContext } from '../context'; // Import useGlobalContext

function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsLoggedIn,adminId, setAdminId } = useGlobalContext(); // Get context functions

  const login = async () => {
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
  
    const user = { email, password };
  
    try {
      const response = await axios.post("http://localhost:3000/User/adminlogin", user);
      
      if (response.data && response.data.adminId) {
        console.log('Login successful, adminId:', response.data.adminId);
        setAdminId(response.data.adminId); // Set adminId in context
        setIsLoggedIn(true); // Set isLoggedIn to true
        
        // Double-check navigate function
        console.log('Navigating to /calendar...');
        navigate('/calendar'); // Navigate to the /calendar route
      } else {
        setError('Login failed. Invalid response from server.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Login failed. Please check your credentials and try again.');
    }
  };
  
  console.log(adminId);
  

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
    },
    box: {
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      width: '300px',
      textAlign: 'center',
    },
    title: {
      marginBottom: '20px',
    },
    inputContainer: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#fff',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
    },
    forgotPassword: {
      color: '#007bff',
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Admin Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            E-mail Adresse
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </label>
          <label style={styles.label}>
            Password
            <input
              type="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </label>
          <p style={styles.forgotPassword}>Forgot my password</p>
        </div>
        <button
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          onClick={login}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default AdminLoginPage;
