import React from "react";
function Designers() {
  return (
    <div className="contact" id="contact">
      <div className="left-side"></div>
      <div className="mid-side">
        <h2 className="contact-title">Связаться с нами</h2>
        <form action="#" className="contact-form">
          <label for="name" className="form-label">
            Имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Иван Иванов"
            className="text-input"
          />

          <label for="mail" className="form-label">
            Почта
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder="example@mail.ru"
            className="text-input"
          />

          <label for="isCompany" className="form-label">
            Вид юр. лица
          </label>
          <select name="isCompany" id="isCompany" className="select-input">
            <option value="yes">Да, мы компания</option>
            <option value="no">Нет, я физ лицо</option>
          </select>

          <label for="agreement" className="form-label">
            Согласие на обработку данных
          </label>
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            className="check-input"
          />

          <button className="form-btn">Отправить форму</button>
        </form>
      </div>
      <div className="right-side"></div>
    </div>
  );
}

export default Designers;
