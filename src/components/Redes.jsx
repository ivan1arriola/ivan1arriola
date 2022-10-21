import { SocialIcon } from 'react-social-icons';

const Redes = () => {
    const instagram = 'https://www.instagram.com/ivan1arriola/'
    const github = 'https://github.com/ivan1arriola';
    const linkedin = 'https://www.linkedin.com/in/ivan1arriola'



    return (<>

        <h2>Mis redes sociales</h2>

        <div className="d-inline-flex">
            <div><SocialIcon className='icono' url={instagram} target='_blank' /> </div>
            <div><SocialIcon className='icono' url={github} target='_blank' /> </div>
            <div><SocialIcon className='icono' url={linkedin} target='_blank' /> </div>
        </div>

        <hr />

    </>)

}
export default Redes;