import React from 'react';
import gallery1 from "./img/pictures/gallery1.png"
import gallery2 from "./img/pictures/gallery2.png"
import gallery3 from "./img/pictures/gallery3.png"
import gallery4 from "./img/pictures/gallery4.png"
import gallery5 from "./img/pictures/gallery5.png"
import gallery6 from "./img/pictures/gallery6.png"
import gallery7 from "./img/pictures/gallery7.png"

function Showcase() {
    return(
        <div className="gallery" id="gallery">
        <h2 className="gallery-title">Наше портфолио</h2>
        <div className="gallery-content">
          <img
            src = {gallery1}
            className="gallery-item item1"
          />
          <img
            src= {gallery2}
            className="gallery-item item2"
          />
          <img
            src= {gallery3}
            className="gallery-item item3"
          />
          <img
            src= {gallery4}
            alt="item4"
            className="gallery-item item4"
          />
          <img
            src= {gallery5}
            alt="item5"
            className="gallery-item item5"
          />
          <img
            src= {gallery6}
            alt="item6"
            className="gallery-item item6"
          />
          <img
            src= {gallery7}
            alt="item7"
            className="gallery-item item7"
          />
        </div>
      </div>
    )
}

export default Showcase