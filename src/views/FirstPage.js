import { useState } from "react";
import { Link } from "react-router-dom";
import mail from "../images/icons/mail.png";
import github from "../images/icons/github.png";
import hh from "../images/icons/hh.png";
import react from "../images/icons/react.svg";
import redux from "../images/icons/redux.svg";
import html from "../images/icons/html.png";
import css from "../images/icons/css.png";
import "../styles/Modifiers.scss";
import "../styles/Burger.scss";
import "../styles/BurgerAnimation.scss";

const FirstPage = () => {
  const [hiddenBurger, setHiddenBurger] = useState(false);

  return (
    <div
      className={
        hiddenBurger ? "first-page-slide-left" : "first-page-slide-right"
      }
    >
      <div className={"burger " + (hiddenBurger ? "burger-hidden" : "")}>
        {(!hiddenBurger && (
          <>
            <div className="burger__block">
              <div className="burger__subblock">
                <div className="burger__title">Внуков Егор CV</div>
                <div className="burger__subtitle uppercase">Технологии</div>
                <ul className="burger__tehlist">
                  {[
                    { text: "React", color: "#9de7fb", icon: react },
                    { text: "Redux-Saga", color: "#707070", icon: redux },
                    { text: "HTML5", color: "#d85331", icon: html },
                    { text: "CSS3", color: "#0d3ea2", icon: css },
                  ].map((el) => {
                    return (
                      <li className="burger__tehname" key={el.text}>
                        <img src={el.icon} width={20} height={20} alt=""></img>
                        <span style={{ color: el.color }}>{el.text}</span>
                      </li>
                    );
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
                  МЭИ (2018-2020)
                  <span>
                    <br></br>
                  </span>
                  СФУ (2021-2022)
                </div>
              </div>
              <div className="burger__subblock">
                <div className="burger__subtitle uppercase">Контакты</div>
                <div className="burger__text">
                  <div className="burger__row">
                    <img src={mail} width={20} height={20} alt="" />
                    <span>midomen@yandex.ru</span>
                  </div>
                  <br></br>
                  <div className="burger__row">
                    <img src={github} width={24} height={24} alt="" />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/YegorVn"
                    >
                      <span>gitHub/YegorVn</span>
                    </a>
                  </div>
                  <br></br>
                  <div className="burger__row">
                    <img src={hh} width={24} height={24} alt="" />
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://krasnoyarsk.hh.ru/applicant/resumes?hhtmFrom=negotiations_item&hhtmFromLabel=header"
                    >
                      <span>Внуков Егор</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )) || (
          <div className="burger__block_rolledup">
            <div className="burger__title_rolledup">Портфолио</div>
            <div className="burger__subtitle_rolledup">Основной стэк</div>
            <ul className="burger__tehlist">
              {[
                { text: "React", color: "#9de7fb", icon: react },
                { text: "Redux-Saga", color: "", icon: redux },
                { text: "HTML5", color: "", icon: html },
                { text: "CSS#", color: "", icon: css },
              ].map((el) => {
                return (
                  <li className="burger__tehname" key={el.text}>
                    <img src={el.icon} width={18} height={18} alt=""></img>
                    <span style={{ color: el.color }}>{el.text}</span>
                  </li>
                );
              })}
            </ul>
            <div className="burger__subtitle_rolledup">Контакты</div>
            <div className="burger__links-list">
              <a className="burger__link" href="mailto:midomen@yandex.ru">
                <img src={mail} width={20} height={20} alt="" />
              </a>
              <a className="burger__link" href="/">
                <img src={github} width={24} height={24} alt="" />
              </a>
              <a className="burger__link" href="/">
                <img src={hh} width={24} height={24} alt="" />
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="burger-button">
        <div className="burger-button__circle">
          <input
            type="checkbox"
            checked={!hiddenBurger}
            onClick={() => setHiddenBurger(!hiddenBurger)}
          />
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </div>
        <div className="burger-button__rectangle"></div>
      </div>
    </div>
  );
};

export default FirstPage;
