import React, { useState } from "react";
import { ReactComponent as Cogicon } from "./icons/cog.svg";
import { CSSTransition } from "react-transition-group";

export default function DropdownMenuBell() {
  const [activeMenu, setActiveMenu] = useState("main");
  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        className="menu-secondary"
        goToMenu="settings"
      >
        <div className="menu">
          <DropdownItem>Notice</DropdownItem>
          <DropdownItem leftIcon={<Cogicon />}>News</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
