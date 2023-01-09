import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem;
  font-weight: 700;
  color: aliceblue;
  margin: auto;
  padding: 10px;
  text-shadow: 2px 2px 2px #000000;
  background: linear-gradient(30deg, #E90DCA, #1536F1);
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const SocialIconStyled = styled(SocialIcon)`
    margin: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #f5f5f5;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;

const Redes = () => {
    const instagram = 'https://www.instagram.com/ivan1arriola/'
    const github = 'https://github.com/ivan1arriola';
    const linkedin = 'https://www.linkedin.com/in/ivan1arriola'



    return (<>

        <Title>Mis Links</Title>

        <Div className="d-inline-flex">
            <SocialIconStyled className='icono' url={instagram} target='_blank' /> 
            <SocialIconStyled className='icono' url={github} target='_blank' /> 
            <SocialIconStyled className='icono' url={linkedin} target='_blank' /> 
        </Div>

        <hr />

    </>)

}
export default Redes;