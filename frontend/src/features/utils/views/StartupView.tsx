import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { get, remove } from '../../../lib/rest';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

type User = {
  id: string;
  name: string;
}

const StartupView = () => {

  const getAllUsers = () => {
    get<User[]>('https://localhost:5001/api/users').then(data => {
      console.log(data[0].id)
    })
  }

  const deleteUser = (id: string) => {
    remove(`https://localhost:5001/api/users/${id}`)
  }

useEffect(() => {
  getAllUsers()
  deleteUser('3cc29f11-4b32-4b36-8d2f-8c1d65da046e')
}, [])

  return (
    <Container>
      <div>eAkademik</div>
      <div><Link to="/components">sandbox</Link></div>
    </Container>
  )
};

export default StartupView;
