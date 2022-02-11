import React, { useState } from "react";
import gradiena from "./data";

const GradientCard = () => {
  const [grad] = useState(gradiena);

  return (
    <React.Fragment>
      {grad.map((item) => (
        <div key={item.id}>
          <div className="card">
            <div className="top">
              <p>
                {item.id}. {item.name}
              </p>
              <p>
                <i className="fas fa-download"></i>
              </p>
            </div>
            <div
              style={{
                background: `linear-gradient(to top, ${item.code1}, ${item.code2}`
              }}
              className="mid"
            ></div>
            <div className="bottom">
              <p>
                <span>{item.code1}</span> &#8594; <span>{item.code2}</span>
              </p>
              <p>Copy CSS</p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default GradientCard;
