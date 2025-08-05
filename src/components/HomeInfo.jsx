export default function HomeInfo() {
  return (
    <section className="home-info">
      <div className="home-info__flex wrapper">
        <div className="home-info__about">
          <h1 className="title home-info__about-title">Web Apps</h1>
          <p className="description home-info__about-text">
            Разработка web-приложений.
          </p>
          <div className="home-info__tasks-block">
            <span className="description">Цели:</span>
            <ul className="description home-info__tasks home-info__about-item">
              <li>1. Выучить React и перенести этот сайт и PET на React.</li>
              <li>
                2. Выбрать препроцессор и переписать CSS с его использованием.
              </li>
              <li>3. Сделать адаптивные версии сайта и PET.</li>
              <li>4. Реализовать "хлебные крошки".</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
