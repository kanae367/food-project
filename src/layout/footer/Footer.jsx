import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer">
            <ul className="footer__links">
                <li>
                    <Link to={"/contacts"} className="footer__link">Контакты</Link>
                </li>
                <li>
                    <Link to={"/about-us"} className="footer__link">О нас</Link>
                </li>
                <li>
                    <Link to={"/authors"} className="footer__link" >Авторы</Link>
                </li>
                <li>
                    <Link to={"/ad"} className="footer__link">Реклама</Link>
                </li>
            </ul>
            <div className="socials">
                <h2 className="socials__title">Наши соцсети:</h2>
                <ul className="socials__links">
                    <li>
                        <a className="socials__link" href="https://vk.ru" target="blank">
                            <img className="socials__icon" src="/vk.png" alt="ВКонтакте"/>
                        </a>
                    </li>
                    <li>
                        <a className="socials__link" href="https://youtube.com" target="blank">
                            <img className="socials__icon" src="/youtube.png" alt="YouTube"/>
                        </a>
                    </li>
                    <li>
                        <a className="socials__link" href="https://telegram.org" target="blank">
                            <img className="socials__icon" src="/tg.png" alt="Telegram"/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;