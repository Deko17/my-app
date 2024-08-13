import Header from './components/Header';
import AuthForm from './components/AuthForm';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <AuthForm />
    </AppContainer>
  );
}

export default App;
