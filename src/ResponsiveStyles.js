// ResponsiveStyles.jsx
import React from 'react';

const ResponsiveStyles = () => {
  return (
    <style>{
      ` Общие стили */
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
      }

      /* Стили для мобильных устройств (ширина экрана меньше 768px) */
      @media screen and (max-width: 767px) {
        /* Пример стилей для мобильных устройств */
        .container {
          width: 100%;
        }
        .menu {
          display: none;
        }
      }

      /* Стили для планшетов и ноутбуков (ширина экрана от 768px до 1023px) */
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        /* Пример стилей для планшетов и ноутбуков */
        .container {
          width: 80%;
          margin: 0 auto;
        }
        .menu {
          display: block;
        }
      }

      /* Стили для десктопов (ширина экрана больше 1023px) */
      @media screen and (min-width: 1024px) {
        /* Пример стилей для десктопов */
        .container {
          width: 70%;
          margin: 0 auto;
        }
        .menu {
          display: block;
        }
      }
    `}</style>
  );
}

export default ResponsiveStyles;
