import React from "react";

function Photo() {
  return (
    <div className="photography" id="photography">
      <div className="photography-left"></div>
      <div className="photography-right">
        <div className="photography-content">
          <h2 className="photography-title">А еще...</h2>
          <p className="photography-text">
            У нас крутые фотографы, которые могут сделать вам фотки
          </p>
        </div>
        <div className="photography-bg">
          <p className="bg-text">Мы полны сюрпризов</p>
          <div className="bg-img"></div>
        </div>
      </div>
    </div>
  );
}

export default Photo;
