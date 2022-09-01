import { SocialIcon } from 'react-social-icons';

const Redes = ()=> {
    const facebook = "https://www.facebook.com/1ivan.arriola/";
    const twitter = 'https://twitter.com/1ivan_arriola';
    const allMyLinks='https://allmylinks.com/1ivan-arriola';
    const instagram = 'https://www.instagram.com/1ivan_arriola/'
    const github = 'https://github.com/ivan1arriola';
    const linkedin = 'www.linkedin.com/in/1ivan-arriola'
    


    return (<>

        <div className='container'>
            <h2>Mis redes sociales</h2>

            <SocialIcon className='icono' url={facebook} target='_blank' /> {" "}
            <SocialIcon className='icono' url={twitter} target='_blank' /> {" "}
            <SocialIcon className='icono' url={allMyLinks} target='_blank' /> {" "}
            <SocialIcon className='icono' url={instagram} target='_blank' /> {" "}
            <SocialIcon className='icono' url={github} target='_blank' /> {" "}
            <SocialIcon className='icono' url={linkedin} target='_blank' /> {" "}
              

        </div>
        <hr/>

    </>)

}
export default Redes;