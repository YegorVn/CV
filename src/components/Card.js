
import {Link} from "react-router-dom";
import open from "../images/icons/open.png";
import cross from "../images/icons/cross.svg";

export const Card = ({card, item, index, setCard, activeCard, inactiveCard}) => {
    return (
      <div
        // ref={(card === item.title && activeCard) || inactiveCard}
        className={
          "gallery__card " +
          (card === item.title
            ? "gallery__card-active"
            : "gallery__card-inactive")
        }
        key={index}
      >
        <div className="gallery__content">
          <div className="gallery__row">
            <div className="gallery__title">{item.title}</div>
            <div className="gallery__taglist">
              {item.tag.map((elem) => {
                return (
                  <div className="gallery__tag" key={elem}>
                    {elem}
                  </div>
                );
              })}
            </div>
            <button
              className={
                "gallery__close " + (card === item.title ? "d-block" : "d-none")
              }
              onClick={() => setCard("")}
            >
              <img src={cross} width={30} height={30} alt="" />
            </button>
          </div>

          <div className="gallery__subtitle">Технологии</div>
          <div className="gallery__text">
            <ul type="square">
              {item.tech.map((elem) => {
                return <li key={elem}>{elem}</li>;
              })}
            </ul>
          </div>

          {card === item.title && (
            <>
              {item.text && (
                <>
                  <div className="gallery__subtitle">Аннотация</div>
                  <div className="gallery__text">{item.text}</div>
                </>
              )}
              {item.links && (
                <>
                  <div className="gallery__subtitle">Ссылки</div>
                  <div className="gallery__links">
                    {item.links.map((elem) => {
                      return (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={elem}
                          key={elem}
                        >
                          {elem}
                        </a>
                      );
                    })}
                  </div>
                </>
              )}
              {item.images && (
                <>
                  <div className="gallery__subtitle">Скриншоты</div>
                  <div className="gallery__screenshots">
                    {item.images.map((elem) => {
                      return (
                        <img
                          src={elem}
                          alt=""
                          className="gallery__screenshot"
                        />
                      );
                    })}
                  </div>
                </>
              )}
            </>
          )}
          <button
            className={
              "gallery__button " + (card === item.title ? "d-none" : "")
            }
            value={item.title}
            onClick={(e) => {
              console.log(e.target.value);
              setCard(e.target.value);
            }}
          >
            <>ОТКРЫТЬ</>
            <img src={open} width="15" height="15" alt=""></img>
          </button>
        </div>
      </div>
    );
}
