import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const StartupView = () => (
  <Container>
    <div>eAkademik</div>
    <div><Link to="/components">sandbox</Link></div>
    <div><Link to="/users">usersView</Link></div>
  </Container>
);

export default StartupView;
