import {FaFacebook} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer() {
    return (
        <footer>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaWhatsapp /></li>
                <li><FaInstagram /></li>
            </ul>
            <p>Todos os Direitos Reservados.</p>
        </footer>
    )
}

export default Footer