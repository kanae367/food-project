import Layout from "./layout/Layout";
import './app.scss';

function App() {
  return (
    <Layout>
      <main className="main">
        <h1 className="title">Рецепты со всего мира</h1>
        <div className="container">
          <div className="item item_large pumpkin">
            <img className="item__image" src="/home/img11.png" alt="Тыква" />
            <div className="item__inner">
              <h2 className="item__title">Тыква: польза и вред, как выбирать и готовить </h2>
              <span className="item__subtitle">ОПИСАНИЕ ПРОДУКТА, КАК ЕЕ ХРАНИТЬ, СКОЛЬКО МОЖНО ЕСТЬ И С ЧЕМ СОЧЕТАТЬ</span>
            </div>
          </div>
          <div className="item cookie">
            <img className="item__image" src="/home/img2.png" alt="Тыква" />
            <div className="item__inner">
              <h2 className="item__title">Что поставить на новогодний стол разным знакам зодиака </h2>
              <span className="item__subtitle">КОММЕНТАРИИ АСТРОЛОГА И РЕЦЕПТЫ</span>
            </div>
          </div>
          <div className="item beet">
            <img className="item__image" src="/home/img3.png" alt="Тыква" />
            <div className="item__inner">
              <h2 className="item__title">Свекла: польза, вред и как готовить </h2>
              <span className="item__subtitle">РЕЦЕПТЫ БЛЮД ИЗ СВЕКЛЫ, РАССКАЗ ДИЕТОЛОГА, ОСОБЕННОСТИ ВЫБОРА И ХРАНЕНИЯ</span>
            </div>
          </div>
          <div className="item soup">
            <img className="item__image" src="/home/img6.png" alt="Тыква" />
            <div className="item__inner">
              <h2 className="item__title">Лучшие рецепты тыквенных супов от шеф-поваров </h2>
              <span className="item__subtitle">ПРОСТЫЕ И ПАРАДНЫЕ, С КАРТОШКОЙ И С ЛАНГУСТИНАМИ, ПОСТНЫЕ И НЕ ТОЛЬКО</span>
            </div>
          </div>
          <div className="item coffee">
            <img className="item__image" src="/home/img5.png" alt="Тыква" />
            <div className="item__inner">
              <h2 className="item__title">Как сварить дома вкусный кофе в турке</h2>
              <span className="item__subtitle">ПОШАГОВАЯ ИНСТРУКЦИЯ ОТ ВЫБОРА ТУРКИ ДО ТОНКОСТЕЙ ПРИГОТОВЛЕНИЯ</span>
            </div>
          </div>
          <div className="item hurma">
            <img className="item__image" src="/home/img4.png" alt="Тыква" />
            <div className="item__inner">
              <h2 className="item__title">Хурма: польза и вред для здоровья </h2>
              <span className="item__subtitle">ОПИСАНИЕ ПРОДУКТА, КАК ЕЕ ХРАНИТЬ, СКОЛЬКО МОЖНО ЕСТЬ И С ЧЕМ СОЧЕТАТЬ</span>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default App;
