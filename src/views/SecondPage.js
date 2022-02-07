import { useEffect, useRef, useState } from "react";
import "../styles/Gallery.scss";
import "../styles/GalleryAnimation.scss";
import "../styles/Card.scss";
import "../styles/Modifiers.scss";
import {Card} from '../components/Card'

const SecondPage = ({data}) => {
    const [card, setCard] = useState("");
    const activeCard = useRef();
    const inactiveCard = useRef();

    

    return (
    <div className="second-page">
      <div className="gallery">
        {data.map((el, index) => {
          return (
            <div
              className={
                "gallery__block " +
                (el.every((elem) => elem.title !== card)
                  ? "gallery__block-inactive"
                  : "gallery__block-active")
              }
              key={index}
            >
              {el.map((item, index) => {
                return (
                  <Card item={item} index={index} card={card} setCard={setCard}/>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondPage;
