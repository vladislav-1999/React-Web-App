export default function Header() {
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
