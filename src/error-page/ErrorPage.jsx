import classes from './error-page.module.scss';
import Layout from '../layout/Layout';

const ErrorPage = () => {
    return(
        <Layout>
            <main className={classes.main}>
                <h2 className={classes.title}>Произшла ошибка</h2>
                <p className={classes.info}>Страница не существует или находится в разработке</p>
            </main>
        </Layout>
    )
}

export default ErrorPage;