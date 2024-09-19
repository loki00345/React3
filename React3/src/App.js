import React from 'react';
import Article from './Article';

const App = () => {
  const font = {
    family: 'Arial',
    size: '16px',
    color: 'black',
  };

  return (
    <div>
      <Article
        title="Текст"
        author="Леся Українка"
        text="Ні долі, ні волі у мене нема,
        Зосталася тільки надія одна:
        Надія вернутись ще раз на Вкраїну,
        Поглянути ще раз на рідну країну,
        Поглянути ще раз на синій Дніпро, –
        Там жити чи вмерти, мені всеодно;
        Поглянути ще раз на степ, могилки,
        Востаннє згадати палкії гадки…
        Ні долі, ні волі у мене нема,
        Зосталася тільки надія одна."
        publicationDate="1887 р"
        image="https://library.kname.edu.ua/images/news/%D0%9B%D0%B5%D1%81%D1%8F-%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%BA%D0%B0.jpg"
        titleAlignment="center"
        imagePosition="left"
        font={font}
        backgroundColor="#f0f0f0"
      />
    </div>
  );
};

export default App;