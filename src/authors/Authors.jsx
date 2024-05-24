import Layout from '../layout/Layout';
import './authors.scss';

const Authors = () => {
    return(
        <Layout>
            <main className='authors'>
                <h1 className='author__title'>Авторы месяца</h1>
                <div className='author__container'>
                    <div className='author__item'>
                        <p className='author__ranking'>2</p>
                        <img className='author__image' src="/authors/anastasia.webp" alt="Анастасия Белякова" />
                        <h2 className='author__name'>Анастасия Белякова</h2>
                    </div>
                    <div className='author__item'>
                        <p className='author__ranking'>1</p>
                        <img className='author__image' src="/authors/roman.webp" alt="Роман Петрикин" />
                        <h2 className='author__name'>Роман Петрикин</h2>
                    </div>
                    <div className='author__item'>
                        <p className='author__ranking'>3</p>
                        <img className='author__image' src="/authors/vigen.webp" alt="Виген Горбунов" />
                        <h2 className='author__name'>Виген Горбунов</h2>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Authors;