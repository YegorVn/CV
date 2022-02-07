import { useEffect, useRef, useState } from "react";
import "./styles/Gallery.scss";
import "./styles/GalleryAnimation.scss";
import Link from 'react-router-dom'
import SecondPage from "./views/SecondPage";
import FirstPage from "./views/FirstPage";

function App() {
  const data = [
    [
      {
        title: "Проектик1",
        tech: ["React", "NodeJs"],
        links: ["https://www.google.ru/", "https://www.google.ru/"],
        tag: ["Commerical"],
      },
      {
        title: "Проектик2",
        tech: ["React", "NodeJs"],
        text: "Вместе с очередной волной коронавируса в Европу вернулись связанные с эпидемией мошенничества. Весной и летом прошлого года на пике.",
        links: ["https://www.google.ru/", "https://www.google.ru/"],
        tag: ["Commerical"],
      },
      {
        title: "Проектик3",
        text: "asdasdasd",
        tech: ["React", "NodeJs"],
        links: ["https://www.google.ru/", "https://www.google.ru/"],
        tag: ["Pet-project"],
      },
    ],
    [
      {
        title: "Проектик4",
        text: "Вместе с очередной волной коронавируса в Европу вернулись связанные с эпидемией мошенничества. Весной и летом прошлого года на пике.",
        tech: ["React", "NodeJs"],
        links: ["https://www.google.ru/", "https://www.google.ru/"],
        tag: ["Commerical"],
      },
      {
        title: "Проектик5",
        tech: ["React", "NodeJs"],
        links: ["https://www.google.ru/", "https://www.google.ru/"],
        tag: ["Pet-project"],
      },
      {
        title: "Проектик6",
        text: "Вместе с очередной волной коронавируса в Европу вернулись связанные с эпидемией мошенничества. Весной и летом прошлого года на пике.",
        tech: ["React", "NodeJs"],
        links: ["https://www.google.ru/", "https://www.google.ru/"],
        tag: ["Commerical"],
      },
    ],
  ];

  return (
    <>
      <FirstPage />
      <SecondPage data={data}/>
    </>
  );
}

export default App;
