import React, { useState } from "react";

const Generate = () => {
  const [c1, setCode1] = useState("");
  const [c2, setCode2] = useState("");

  const [gene, setGene] = useState({
    code1: "#FFFF00",
    code2: "#FF0000"
  });

  const handleCode1 = (e) => {
    setCode1(e.target.value);
  };

  const handleCode2 = (e) => {
    setCode2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (c1 === "") {
      alert("please add color");
    } else if (c2 === "") {
      alert("please add color");
    } else {
      setGene({
        code1: c1,
        code2: c2
      });
      setCode1("");
      setCode2("");
    }
  };

  return (
    <React.Fragment>
      <div className="generate">
        <div className="gen-card">
          <div className="card">
            <div className="top">
              <p>Custom Generate</p>
              <p>
                <i className="fas fa-download"></i>
              </p>
            </div>
            <div
              style={{
                background: `linear-gradient(to top, ${gene.code1},${gene.code2})`
              }}
              className="mid"
            ></div>
            <div className="bottom">
              <p style={{ fontSize: "1.1rem" }}>
                <span style={{ color: `${gene.code1}` }}> {gene.code1} </span>
                &#8594;{" "}
                <span style={{ color: `${gene.code2}` }}> {gene.code2} </span>
              </p>
              <p>Copy CSS</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="update-card">
            <h1>Generate Card</h1>
            <div className="up-grp">
              <label htmlFor="code1">1.Hex Code or Name:</label>
              <input
                name="code1"
                placeholder="first color"
                value={c1}
                onChange={handleCode1}
              />
            </div>
            <div className="up-grp">
              <label htmlFor="code1">2.Hex Code or Name:</label>
              <input
                name="code1"
                placeholder="secound color"
                value={c2}
                onChange={handleCode2}
              />
            </div>
            <div className="up-grp">
              <button type="submit">update</button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Generate;
