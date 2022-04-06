import { useEffect, useRef, useState } from "react";
import "./styles/Gallery.scss";
import "./styles/GalleryAnimation.scss";
import Link from 'react-router-dom'
import SecondPage from "./views/SecondPage";
import FirstPage from "./views/FirstPage";
import act1 from './images/screenshots/act1.png'
import act2 from './images/screenshots/act2.png'
import act3 from './images/screenshots/act3.png'
import act4 from './images/screenshots/act4.png'
import adm from './images/screenshots/adm.png'
import nr1 from './images/screenshots/nr1.png'
import nr2 from './images/screenshots/nr2.png'


function App() {
  const data = [
    [
      {
        title: "Онлайн школа",
        tech: ["React, Redux", "ReactBootstrap", "HTML, CSS"],
        // links: ["https://www.google.ru/", "https://www.google.ru/"],
        tag: ["Commerical"],
        text: "Верстка макета для разных устройств, логика приложения на стороне пользователя",
        images: [act2, act1, act3, act4]
      },
      {
        title: "Nr-design",
        tech: ["HTML, CSS, JS"],
        text: "Правки по верстке",
        tag: ["Commerical"],
        images: [nr1, nr2]
      },
      {
        title: "CRUD",
        tech: ["React, Redux", "Django"],
        links: ["https://github.com/YegorVn/cards"],
        tag: ["Pet-project"],
      },
    ],
    [
      {
        title: "CodePen",
        text: "Несколько небольших проектов на codepen",
        tech: ["HTML, CSS, JS"],
        links: ["https://codepen.io/midomen"],
        tag: ["Commerical"],
      },
      {
        title: "Админка",
        tech: ["React", "Redux"],
        tag: ["Commerical"],
        text: "Админка для онлайн школы",
        images: [adm]
      },
      {
        title: "Поиск видео",
        text: "Приложения для сохранения результатов поиска видео с Youtube",
        tech: ["React", "NodeJs", "AntDesign", "Axios"],
        links: ["https://github.com/YegorVn/sibdevvideos"],
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
