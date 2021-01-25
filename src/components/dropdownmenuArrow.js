import React, { useState } from "react";
import { ReactComponent as Cogicon } from "./icons/cog.svg";
import { ReactComponent as Bellicon } from "./icons/bell.svg";
import { CSSTransition } from "react-transition-group";

export default function DropdownMenuArrow() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => {
          props.goToMenu && setActiveMenu(props.goToMenu);
        }}
      >
        <a href={props.url}>
          <span className="icon-button">{props.leftIcon}</span>
        </a>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={250}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<Bellicon />}
            url={"https://github.com/andrewroar"}
          >
            <a href="https://github.com/andrewroar">My Profile</a>
          </DropdownItem>
          <DropdownItem leftIcon={<Cogicon />} goToMenu="settings">
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={250}
        className="menu-secondary"
        onEnter={calcHeight}
      >
        <div classNames="menu">
          <DropdownItem leftIcon={<Cogicon />} goToMenu="main">
            Back
          </DropdownItem>
          <DropdownItem leftIcon={<Cogicon />}>Settings 1</DropdownItem>
          <DropdownItem leftIcon={<Cogicon />}>Settings 2</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
