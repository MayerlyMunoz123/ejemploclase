import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert, Modal, Box } from '@mui/material';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false); 
  const [showEmptyFieldError, setShowEmptyFieldError] = useState(false); 
  const [showModal, setShowModal] = useState(false); 
  const handleSubmit = (e) => {
    e.preventDefault();


    if (!username || !password) {
      setShowEmptyFieldError(true);
      return;
    }

    if (password.length < 8) {
      setShowError(true);
      return;
    }

  
    setShowError(false);
    setShowEmptyFieldError(false);


    setShowModal(true);

    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleCloseModal = () => {

    setShowModal(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #FFDAB9, #FF5722)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <div>
          <Typography variant="h4" component="h2" gutterBottom style={{ color: '#FFFFFF' }}>
            Sistema de Ahorros
          </Typography>
        
          {showEmptyFieldError && (
            <Alert variant="filled" severity="error" style={{ marginBottom: 10 }}>
              Todos los campos son obligatorios.
            </Alert>
          )}
         
          {showError && (
            <Alert variant="filled" severity="error" style={{ marginBottom: 10 }}>
              La contraseña es demasiado corta.
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              type="password"
              label="Password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Container>

      <Modal open={showModal} onClose={handleCloseModal}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',  background: 'linear-gradient(to bottom, #FFD59A, #FFF1D8)', boxShadow: 24, p: 4, minWidth: 300 }}>
          <Typography variant="h6" gutterBottom>
            Bienvenido
          </Typography>
          <Typography variant="body1">
            Has iniciado sesión con éxito como {username}.
          </Typography>
          <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
            Cerrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginForm;
