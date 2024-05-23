import { useEffect, useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import SearchItem from './search-item/SearchItem';

const Header = () => {
    const [search, setSearch] = useState('');

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        
    }, [search])

    return(
        <header className="header">
            <a className="header__home-link" href="/">
                <img className="header__icon" src="/hat.png" alt="Повар icon"/>
            </a>
            <nav className="navbar">
                <Link to={'/posts'} className="navbar__link disabled" href="/posts" disabled={true}>Статьи</Link>
                <Link to={'/recipes'} className="navbar__link" href="/recipes">Рецепты</Link>
                <Link to={'/authors'} className="navbar__link" href="/authors">Авторы</Link>
            </nav>
            <form className="search">
                <img className="search__icon" src="/search.svg" alt="поиск"/>
                <input className="search__input" type="text" placeholder="поиск по сайту" onInput={handleInput}/>
                {
                    search && <SearchItem name={search}/>
                }
            </form>
            <button className="header__button">Войти</button>
        </header>
    )
}

export default Header;