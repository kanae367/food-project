import Layout from "./layout/Layout";
import classes from './app.module.scss';

function App() {
  return (
    <Layout>
      <main className={classes.main}>
        <h1 className={classes.title}>Рецепты со всего мира</h1>
        <div className={classes.container}>
          <div className={`${classes.item} ${classes["item_large"]} ${classes.pumpkin}`}>
            <img className={classes.image} src="/home/pumpkin.webp" alt="Тыква" />
            <div className={classes.inner}>
              <h2 className={classes["item__title"]}>Тыква: польза и вред, как выбирать и готовить </h2>
              <span className={classes.subtitle}>ОПИСАНИЕ ПРОДУКТА, КАК ЕЕ ХРАНИТЬ, СКОЛЬКО МОЖНО ЕСТЬ И С ЧЕМ СОЧЕТАТЬ</span>
            </div>
          </div>
          <div className={`${classes.item} ${classes.cookie}`}>
            <img className={classes.image} src="/home/cookies.webp" alt="Новогоднее печенье" />
            <div className={classes.inner}>
              <h2 className={classes["item__title"]}>Что поставить на новогодний стол разным знакам зодиака </h2>
              <span className={classes.subtitle}>КОММЕНТАРИИ АСТРОЛОГА И РЕЦЕПТЫ</span>
            </div>
          </div>
          <div className={`${classes.item} ${classes.beet}`}>
            <img className={classes.image} src="/home/beet.webp" alt="Свекла" />
            <div className={classes.inner}>
              <h2 className={classes["item__title"]}>Свекла: польза, вред и как готовить </h2>
              <span className={classes.subtitle}>РЕЦЕПТЫ БЛЮД ИЗ СВЕКЛЫ, РАССКАЗ ДИЕТОЛОГА, ОСОБЕННОСТИ ВЫБОРА И ХРАНЕНИЯ</span>
            </div>
          </div>
          <div className={`${classes.item} ${classes.soup}`}>
            <img className={classes.image} src="/home/soup.webp" alt="Тыквенный суп" />
            <div className={classes.inner}>
              <h2 className={classes["item__title"]}>Лучшие рецепты тыквенных супов от шеф-поваров </h2>
              <span className={classes.subtitle}>ПРОСТЫЕ И ПАРАДНЫЕ, С КАРТОШКОЙ И С ЛАНГУСТИНАМИ, ПОСТНЫЕ И НЕ ТОЛЬКО</span>
            </div>
          </div>
          <div className={`${classes.item} ${classes.coffee}`}>
            <img className={classes.image} src="/home/coffee.webp" alt="Кофе" />
            <div className={classes.inner}>
              <h2 className={classes["item__title"]}>Как сварить дома вкусный кофе в турке</h2>
              <span className={classes.subtitle}>ПОШАГОВАЯ ИНСТРУКЦИЯ ОТ ВЫБОРА ТУРКИ ДО ТОНКОСТЕЙ ПРИГОТОВЛЕНИЯ</span>
            </div>
          </div>
          <div className={`${classes.item} ${classes.hurma}`}>
            <img className={classes.image} src="/home/hurma.webp" alt="Хурма" />
            <div className={classes.inner}>
              <h2 className={classes["item__title"]}>Хурма: польза и вред для здоровья </h2>
              <span className={classes.subtitle}>ОПИСАНИЕ ПРОДУКТА, КАК ЕЕ ХРАНИТЬ, СКОЛЬКО МОЖНО ЕСТЬ И С ЧЕМ СОЧЕТАТЬ</span>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default App;
