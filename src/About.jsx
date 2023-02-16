import React from 'react';
function About() {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="about-content-left">
          <h2 className="about-title">Кто мы?</h2>
          <p className="about-text">
            Наша студия создает крутые дизайны и брендинг. Мы делаем
            качественно. В числе наших клиентов крупные компании и вообще мы
            молодцы
          </p>
        </div>
        <div className="about-content-right">
          <div className="about-rect rect1"></div>
          <div className="about-rect rect2"></div>
          <div className="about-rect rect3"></div>
        </div>
      </div>
      <div className="about-background">
        <p className="bg-text">Знакомимся</p>
      </div>
    </div>
  );
}

export default About;
