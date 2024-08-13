import { useState } from 'react';
import { login } from '../services/authService';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  margin: 40px auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  margin: 10px 0;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  display:flex;
  margin-top: 16px;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
`;

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, token } = await login(username, password);
      console.log('Logged in user:', user);
      console.log('Received token:', token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Email" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
    </FormContainer>
  );
};

export default AuthForm;
