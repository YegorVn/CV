import { useEffect, useRef, useState } from "react";
import "./styles/Burger.scss";
import "./styles/BurgerAnimation.scss";
import "./styles/Gallery1.scss";
import "./styles/GalleryAnimation.scss";
import "./styles/Modifiers.scss";

function App() {
  const [hiddenBurger, setHiddenBurger] = useState(false);
  const [card, setCard] = useState("");
  const activeCard = useRef();
  const inactiveCard = useRef();

  // useEffect(() => {
  //   const scrollIntoView = () => {
  //     if (activeCard.current) activeCard.current.scrollIntoView();
  //   };
  //   let time = setTimeout(() => scrollIntoView(), 10);
  //   return () => clearTimeout(time);
  // }, [activeCard, card]);

  return (
    <>
      <div
        className={
          hiddenBurger ? "first-page-slide-right" : "first-page-slide-left"
        }
      >
        <div className="burger">
          <div className="burger__block">
            <div className="burger__subblock">
              <div className="burger__title">Внуков Егор CV</div>
              <div className="burger__subtitle uppercase">Технологии</div>
              <ul className="burger__tehlist">
                {["asd", "qwe"].map((el) => {
                  return <li className="burger__tehname">{el}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="burger__block">
            <div className="burger__subblock">
              <div className="burger__subtitle uppercase">Опыт работы</div>
              <div className="burger__text">
                Фриланс (1 год),<br></br>
                Студия Юрия Клименко, Junior React Frontend (полгода)
              </div>
            </div>
            <div className="burger__subblock">
              <div className="burger__subtitle uppercase">Образование</div>
              <div className="burger__text">
                МЭИ (2018-2020)<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>СФУ
                (2021-2022)
              </div>
            </div>
            <div className="burger__subblock">
              <div className="burger__subtitle uppercase">Контакты</div>
            </div>
          </div>
        </div>
        <div className="burger-button">
          <div className="burger-button__circle">
            <input
              type="checkbox"
              onClick={() => setHiddenBurger(!hiddenBurger)}
            />
            <span id="span1"></span>
            <span id="span2"></span>
            <span id="span3"></span>
          </div>
          <div className="burger-button__rectangle"></div>
        </div>
      </div>
      <div className="second-page">
        <div className="intro">
          <div className="intro__title">Порфтолио</div>
          <div className="intro__text">Всем привет! Меня завут Багдан</div>
        </div>
        <div className="gallery">
          {[
            ["Галерея", "Бургер", "Оранжерея"],
            ["Галерея1", "Бургер1", "Оранжерея1"],
            ["Галерея2", "Бургер2", "Оранжерея2"],
          ].map((el, index) => {
            return (
              <div
                className={
                  "gallery__block " +
                  (el.includes(card)
                    ? "gallery__block-active"
                    : "gallery__block-inactive")
                }
                key={index}
              >
                {el.map((item, index) => {
                  return (
                    <div
                      ref={(card === item && activeCard) || inactiveCard}
                      className={
                        "gallery__card " +
                        (card === item
                          ? "gallery__card-active"
                          : "gallery__card-inactive")
                      }
                      key={index}
                    >
                      <div className="gallery__content">
                        <div className="gallery__row">
                          <div className="gallery__title">{item}</div>
                          <div className="gallery__taglist">
                            {["Beautiful", "Amazing", "Commerical"].map(
                              (el) => {
                                return (
                                  <div className="gallery__tag">{item}</div>
                                );
                              }
                            )}
                          </div>
                          <button
                            className={
                              "gallery__close " +
                              (card === item ? "d-block" : "d-none")
                            }
                            onClick={() => setCard("")}
                          >
                            X
                          </button>
                        </div>

                        <div className="gallery__subtitle">{item}</div>
                        <div className="gallery__text">
                          <ul>
                            <li>React</li>
                            <li>Scss</li>
                            <li>Node</li>
                          </ul>
                        </div>
                        <button
                          className={
                            "gallery__button " + (card === item ? "d-none" : "")
                          }
                          value={item}
                          onClick={(e) => {
                            console.log(e.target.value);
                            setCard(e.target.value);
                          }}
                        >
                          ОТКРЫТЬ
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
