import { useState, useEffect } from "react";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRSS() {
      try {
        const response = await fetch(
          "https://rss-backend-tbjj.onrender.com/api/rss"
        );

        if (!response.ok) throw new Error("Ошибка сети");

        const data = await response.json();

        setArticles(data);
      } catch (err) {
        setError("Не удалось загрузить ленту. Убедись, что бэкенд запущен.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchRSS();
  }, []);

  return (
    <>
      <Hero />
      <StackBlock />
      <RssReader articles={articles} />
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="hero">
      <Header />
      <HomeInfo />
    </section>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-wrapper wrapper">
        <nav className="header-nav">
          <ul className="header-nav__list">
            <li className="header-nav__item header-nav__real-projects">
              <div>
                Проекты
                <ul className="header-nav__real-projects-list hidden header-nav__burger">
                  <li className="header-nav__real-projects-item">
                    <p>Скоро тут будут проекты, в которых я участвую.</p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header-nav__item header-nav__projects">
              <div>
                PET
                <ul className="header-nav__projects-list hidden header-nav__burger">
                  <li className="header-nav__projects-item">
                    <a href="cats/index.html" target="_blank">
                      Котята
                    </a>
                  </li>
                  <li className="header-nav__projects-item">
                    <a href="detox/home.html" target="_blank">
                      Лендинг "Смузи"
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header-nav__item header-nav__stack">
              <div>
                Стек
                <ul className="header-nav__stack-list hidden header-nav__burger">
                  <li className="header-nav__stack-item">
                    <a
                      href="https://ru.wikipedia.org/wiki/HTML"
                      target="_blank"
                    >
                      <img
                        className="header-nav__stack-item-img"
                        src="public/htmlicon.svg"
                        alt=""
                      />
                      <span>HTML</span>
                    </a>
                  </li>
                  <li className="header-nav__stack-item">
                    <div
                      href="https://ru.wikipedia.org/wiki/CSS"
                      target="_blank"
                    >
                      <img
                        className="header-nav__stack-item-img"
                        src="public/cssicon.svg"
                        alt=""
                      />
                      <span>CSS</span>
                    </div>
                  </li>
                  <li className="header-nav__stack-item">
                    <div href="https://react.dev/" target="_blank">
                      <img
                        className="header-nav__stack-item-img"
                        src="public/reacticon.svg"
                        alt=""
                      />
                      <span>React</span>
                    </div>
                  </li>
                  <li className="header-nav__stack-item">
                    <a href="https://github.com/vladislav-1999" target="_blank">
                      <img
                        className="header-nav__stack-item-img"
                        src="public/gicicon.svg"
                        alt=""
                      />
                      <span>Git</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header-nav__item">
              <a href="https://github.com/vladislav-1999" target="_blank">
                GitHub
              </a>
            </li>
            <li className="header-nav__item">
              <a href="/rss-reader/frontend/rss-reader/" target="_blank">
                RSS
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function HomeInfo() {
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

function StackBlock() {
  return (
    <section className="stack-block">
      <div className="wrapper">
        <div className="stack-block__list">
          <div className="stack-block__item stack-block__item-html">
            <div className="stack-block__item-person">
              <img
                src="public/TimHTML.png"
                alt=""
                className="stack-block__item-person-img"
              />
              <blockquote className="description">
                «Создавая технологии, мы формируем общество. Делайте это
                ответственно»
              </blockquote>
            </div>
            <div className="stack-block__item-stack">
              <h1 className="title stack-block__item-title">HTML</h1>
              <ul className="stack-block__item-stack-list">
                <li className="description stack-block__item-description">
                  Скилл 1
                </li>
                <li className="description stack-block__item-description">
                  Скилл 2
                </li>
                <li className="description stack-block__item-description">
                  Скилл 3
                </li>
              </ul>
            </div>
          </div>
          <div className="stack-block__item stack-block__item-css">
            <div className="stack-block__item-person">
              <img
                src="public/TimHTML.png"
                alt=""
                className="stack-block__item-person-img"
              />
              <blockquote className="description">
                «Создавая технологии, мы формируем общество. Делайте это
                ответственно»
              </blockquote>
            </div>
            <div className="stack-block__item-stack">
              <h1 className="title stack-block__item-title">CSS</h1>
              <ul className="stack-block__item-stack-list">
                <li className="description stack-block__item-description">
                  Скилл 1
                </li>
                <li className="description stack-block__item-description">
                  Скилл 2
                </li>
                <li className="description stack-block__item-description">
                  Скилл 3
                </li>
              </ul>
            </div>
          </div>
          <div className="stack-block__item stack-block__item-react">
            <div className="stack-block__item-person">
              <img
                src="public/TimHTML.png"
                alt=""
                className="stack-block__item-person-img"
              />
              <blockquote className="description">
                «Создавая технологии, мы формируем общество. Делайте это
                ответственно»
              </blockquote>
            </div>
            <div className="stack-block__item-stack">
              <h1 className="title stack-block__item-title">React</h1>
              <ul className="stack-block__item-stack-list">
                <li className="description stack-block__item-description">
                  Скилл 1
                </li>
                <li className="description stack-block__item-description">
                  Скилл 2
                </li>
                <li className="description stack-block__item-description">
                  Скилл 3
                </li>
              </ul>
            </div>
          </div>
          <div className="stack-block__item stack-block__item-git">
            <div className="stack-block__item-person">
              <img
                src="public/TimHTML.png"
                alt=""
                className="stack-block__item-person-img"
              />
              <blockquote className="description">
                «Создавая технологии, мы формируем общество. Делайте это
                ответственно»
              </blockquote>
            </div>
            <div className="stack-block__item-stack">
              <h1 className="title stack-block__item-title">Git</h1>
              <ul className="stack-block__item-stack-list">
                <li className="description stack-block__item-description">
                  Скилл 1
                </li>
                <li className="description stack-block__item-description">
                  Скилл 2
                </li>
                <li className="description stack-block__item-description">
                  Скилл 3
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper wrapper">
        <div className="footer-contacts">
          <a
            className="description footer-contacts__item"
            href="tel:+79261496683"
          >
            +7 (926) 149-66-83
          </a>
          <a
            className="description footer-contacts__item"
            href="mailto:BryxinVA@yandex.ru"
          >
            BryxinVA@yandex.ru
          </a>
        </div>
        <ul className="footer-social">
          <a
            href="https://t.me/vladzahoge"
            target="_blank"
            className="footer-social__item"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.5165 3.66544C23.812 3.55089 24.1331 3.51873 24.4454 3.57239C24.7578 3.62606 25.0497 3.76355 25.29 3.97017C25.5303 4.1768 25.71 4.4448 25.8099 4.74558C25.9098 5.04635 25.9261 5.36861 25.8571 5.67794L25.8561 5.68285L25.856 5.68284L21.7435 23.6422L21.7434 23.6427C21.6755 23.9385 21.5318 24.2116 21.3265 24.4351C21.1211 24.6586 20.8611 24.8249 20.5721 24.9176C20.283 25.0102 19.9749 25.0261 19.6778 24.9637C19.3814 24.9014 19.1062 24.7632 18.8792 24.5626C18.8787 24.5622 18.8783 24.5618 18.8778 24.5614L9.22297 16.0665L3.62308 14.9423L3.61948 14.9416C1.93748 14.5965 1.67901 12.2405 3.32292 11.5963L3.64217 12.411L3.32232 11.5965L3.32292 11.5963L23.5129 3.66684L23.5165 3.66544ZM3.96694 13.2235C3.96709 13.2245 3.96727 13.2255 3.96747 13.2264C3.9683 13.2266 3.96921 13.2268 3.97018 13.2271C3.97049 13.2271 3.97081 13.2272 3.97113 13.2273L9.79721 14.3968C9.94776 14.4271 10.0877 14.4964 10.203 14.5978L20.0358 23.2494L20.0378 23.2511L24.1491 5.29712L3.96694 13.2235ZM3.9586 13.2237C3.9586 13.2237 3.95862 13.2237 3.95864 13.2237L3.9586 13.2237Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.2203 3.99091C25.5032 4.38267 25.415 4.92962 25.0233 5.21257L10.1373 15.9641C9.74557 16.2471 9.19862 16.1589 8.91567 15.7671C8.63272 15.3754 8.72093 14.8284 9.11268 14.5455L23.9986 3.79391C24.3904 3.51096 24.9373 3.59916 25.2203 3.99091Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.625 14.3796C10.1082 14.3796 10.5 14.7714 10.5 15.2546L10.5 22.3735L10.5047 22.3687L13.9172 18.9562C14.2589 18.6145 14.8129 18.6145 15.1547 18.9562C15.4964 19.2979 15.4964 19.852 15.1547 20.1937L11.7441 23.6042C11.501 23.8499 11.1906 24.0182 10.852 24.0877C10.5121 24.1575 10.1591 24.1247 9.83785 23.9934C9.51664 23.8621 9.24171 23.6383 9.04801 23.3503C8.85431 23.0624 8.75058 22.7234 8.75 22.3764L8.75 15.2546C8.75 14.7714 9.14175 14.3796 9.625 14.3796Z"
              />
            </svg>
          </a>
          <a
            href="https://m.vk.com/zahoge1999"
            target="_blank"
            className="footer-social__item"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M17.907,15.684 l-1.735,0.024c0,0-0.374,0.073-0.864-0.265c-0.649-0.446-1.261-1.606-1.738-1.455c-0.484,0.154-0.469,1.198-0.469,1.198 s0.004,0.184-0.107,0.304c-0.12,0.129-0.355,0.116-0.355,0.116h-0.777c0,0-1.714,0.142-3.225-1.433 c-1.646-1.717-3.1-5.106-3.1-5.106S5.452,8.853,5.543,8.744C5.646,8.623,5.924,8.62,5.924,8.62l1.857-0.009 c0,0,0.175,0.031,0.301,0.123c0.103,0.076,0.162,0.219,0.162,0.219s0.3,0.761,0.698,1.45c0.776,1.343,1.137,1.637,1.4,1.493 c0.384-0.21,0.269-1.898,0.269-1.898s0.007-0.613-0.193-0.886C10.262,8.899,9.969,8.836,9.84,8.82 c-0.105-0.014,0.066-0.257,0.289-0.367c0.334-0.163,0.925-0.173,1.622-0.166c0.543,0.006,0.7,0.039,0.912,0.091 c0.641,0.155,0.423,0.753,0.423,2.188c0,0.46-0.083,1.106,0.248,1.319c0.143,0.092,0.491,0.014,1.36-1.466 c0.413-0.702,0.722-1.527,0.722-1.527s0.068-0.147,0.173-0.21c0.108-0.065,0.253-0.045,0.253-0.045l1.955-0.012 c0,0,0.587-0.071,0.683,0.196c0.1,0.279-0.219,0.93-1.018,1.995c-1.311,1.75-1.457,1.587-0.368,2.599 c1.04,0.967,1.255,1.437,1.291,1.496C18.815,15.627,17.907,15.684,17.907,15.684z"></path>
            </svg>
          </a>
        </ul>
      </div>
    </footer>
  );
}

function RssReader({ articles }) {
  return (
    <div>
      <h1>📰 Мой RSS-ридер</h1>
      <p>
        Источник: <em>HBR.org</em>
      </p>
      <hr />

      <div>
        {articles.map((item) => {
          return <NewPost item={item} key={item.title} />;
        })}
      </div>
    </div>
  );
}

function NewPost({ item }) {
  return (
    <>
      <li className="title">{item.title}</li>
      <a href={item.link}>{item.link}</a> <br />
      <span>{item.pubDate}</span>
      <p>{item.content}</p>
    </>
  );
}
