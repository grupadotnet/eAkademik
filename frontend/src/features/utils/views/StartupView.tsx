import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { get } from '../../../lib/rest';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const StartupView = () => {

  const getAllUsers = () => {
    get('https://localhost:5001/api/users').then(data => {
      console.log(data)
    })
  }

useEffect(() => {
  getAllUsers()
}, [])

  return (
    <Container>
      <div>eAkademik</div>
      <div><Link to="/components">sandbox</Link></div>
    </Container>
  )
};

export default StartupView;
