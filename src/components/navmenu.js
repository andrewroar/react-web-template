import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorBtn, setAnchorBtn] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar-container">
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onMouseMove={handleClick}
          class="navbar-btn"
        >
          Open Menu 1
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onMouseLeave={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>

      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onMouseMove={handleClick}
          class="navbar-btn"
        >
          Open Menu 2
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onMouseLeave={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </nav>
  );
}
