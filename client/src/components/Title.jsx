import React from "react";


  const Title = ({ text = "", title1 = "", title2 = "", titleStyle = "", paraStyle = "" }) => {
    return (
      <div className="mb-8">
        <h2 className={titleStyle}>
          {title1} <span className="text-slate-500">{title2}</span>
        </h2>
        {text ? <p className={paraStyle}>{text}</p> : null}
      </div>
    );
  };

  export default Title;