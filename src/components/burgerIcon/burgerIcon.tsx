

import React from "react";
import style from "./burgerIcon.module.scss";



function IconBurger({ isOpen, toggle }): JSX.Element {
  const c = isOpen ? `${style.burger} ${style.open}` : style.burger;

  return (
    <div className={c} onClick={() => toggle(!isOpen)}>
      <span className="bar1"></span>
      <span className="bar2"></span>
      <span className="bar3"></span>
    </div>
  );
}

export default IconBurger;
