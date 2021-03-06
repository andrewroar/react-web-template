import React, { useState } from "react";

export default function Navitem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a
        href="#"
        className="icon-button button-hover"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}
