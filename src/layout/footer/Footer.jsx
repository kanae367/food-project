import classes from './footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className={classes.footer}>
            <ul className={classes.links}>
                <li>
                    <Link to={"/contacts"} className={classes.link}>Контакты</Link>
                </li>
                <li>
                    <Link to={"/about-us"} className={classes.link}>О нас</Link>
                </li>
                <li>
                    <Link to={"/authors"} className={classes.link} >Авторы</Link>
                </li>
                <li>
                    <Link to={"/ad"} className={classes.link}>Реклама</Link>
                </li>
            </ul>
            <div className={classes.socials}>
                <h2 className={classes.title}>Наши соцсети:</h2>
                <ul className={classes["socials__links"]}>
                    <li>
                        <a className={classes["socials__link"]} href="https://vk.ru" target="blank">
                            <img className={classes.icon} src="/vk.png" alt="ВКонтакте"/>
                        </a>
                    </li>
                    <li>
                        <a className={classes["socials__link"]} href="https://youtube.com" target="blank">
                            <img className={classes.icon} src="/youtube.png" alt="YouTube"/>
                        </a>
                    </li>
                    <li>
                        <a className={classes["socials__link"]} href="https://telegram.org" target="blank">
                            <img className={classes.icon} src="/tg.png" alt="Telegram"/>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;