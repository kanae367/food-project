import Layout from '../layout/Layout';
import classes from './authors.module.scss';

const Authors = () => {
    return(
        <Layout>
            <main className={classes.authors}>
                <h1 className={classes.title}>Авторы месяца</h1>
                <div className={classes.container}>
                    <div className={classes.item}>
                        <p className={classes.ranking}>2</p>
                        <img className={classes.image} src="/authors/anastasia.webp" alt="Анастасия Белякова" />
                        <h2 className={classes.name}>Анастасия Белякова</h2>
                    </div>
                    <div className={classes.item}>
                        <p className={classes.ranking}>1</p>
                        <img className={classes.image} src="/authors/roman.webp" alt="Роман Петрикин" />
                        <h2 className={classes.name}>Роман Петрикин</h2>
                    </div>
                    <div className={classes.item}>
                        <p className={classes.ranking}>3</p>
                        <img className={classes.image} src="/authors/vigen.webp" alt="Виген Горбунов" />
                        <h2 className={classes.name}>Виген Горбунов</h2>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Authors;