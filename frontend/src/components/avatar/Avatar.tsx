import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 25px;

img{
    border-radius: 50%;
    height: 70px;
    width: 70px;
}

span{
    font-weight: 300;
    color: rgba(255, 255, 255, 0.7);
    padding-top: 10px;
    
}
`


type Props = {
    src: string;
    name: string;
}

const Avatar: React.VFC<Props> = ({ src, name }) => (
    <Container>
        <img src={src}/>
        <span>{name}</span>
    </Container>
);


export default Avatar;