import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'



export const Footer = () => {
    return (
        <div>
            <div className='marca'>
                <h1>FRUTAPP</h1>
            </div>

            <hr />

            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <FontAwesomeIcon icon={faFacebook} size="2xl" />
                </div>

                <div className="footer-icons-container">
                    <FontAwesomeIcon icon={faTwitter} size="2xl" />
                </div>

                <div className="footer-icons-container">
                    <FontAwesomeIcon icon={faInstagram} size="2xl" />
                </div>
            </div>
            <div className="footer-copyright">
                <p>©Derechos reservados</p>

            </div>

        </div>
    )
}
