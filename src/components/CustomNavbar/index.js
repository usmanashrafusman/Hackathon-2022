import { useState, useEffect } from "react";

// react-router components
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import { Avatar, Button, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Badge } from "@mui/material";
import { Typography } from "@mui/material";
// mui icons
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

// custom components
import NotificationItem from "../CustomMenuBar";

// import { logOut } from "redux-store/features/auth/authSlice";
// import { useDispatch, useSelector } from "react-redux";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
} from "../../assets/styles/layouts/Dashboard";

// import sidenavLogoLabel from "layouts/common/Navs/Sidenav/styles/sidenav";

// Material UI React context
import pxToRem from "../../assets/function/pxToRem";
import {
  setTransparentNavbar,
  setMiniSidenav,
  useMaterialUIController,
} from "../../context";
import { logOut } from "../../store.js/auth";
import { useDispatch, useSelector } from "react-redux";

function DashboardNavbar({ absolute, light, isMini, isAdmin }) {
  const navigate = useNavigate();
  const [navbarType, setNavbarType] = useState();
  const [controller, dispatch] = useMaterialUIController();
  const { transparentNavbar, fixedNavbar, darkMode, miniSidenav } = controller;
  const [openMenu, setOpenMenu] = useState(false);
  const dispatchAction = useDispatch();
  const { user_name } = useSelector((state) => state.auth);
  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(
        dispatch,
        (fixedNavbar && window.scrollY === 0) || !fixedNavbar
      );
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenavClick = () => setMiniSidenav(dispatch, !miniSidenav);

  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
    >
      <NotificationItem
        icon={<SettingsOutlinedIcon />}
        title="Manage Profile"
      />
      <NotificationItem icon={<LockOutlinedIcon />} title="Change Password" />
      <NotificationItem
        icon={<LogoutOutlinedIcon />}
        title="Sign Out"
        onClick={() => dispatchAction(logOut())}
      />
    </Menu>
  );

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) =>
        navbar(theme, { transparentNavbar, absolute, light, darkMode })
      }
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <Box
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={(theme) => navbarRow(theme, { isMini })}
        >
          <Box pt={1} pb={1} px={0} textAlign="center">
            <Box display="flex" alignItems="center">
              {isAdmin && (
                <IconButton
                  size="large"
                  disableRipple
                  color="primary"
                  onClick={handleMiniSidenavClick}
                  sx={{ paddingLeft: 0, paddingRight: pxToRem(20) }}
                >
                  <Icon fontSize="large">
                    {miniSidenav ? <MenuOpenIcon /> : <MenuIcon />}
                  </Icon>
                </IconButton>
              )}
              <Box
                width="100%"
                component={NavLink}
                to="/user/home"
              >
                <Typography
                  component="h1"
                  variant="button"
                  fontWeight="medium"
                  color="primary"
                  sx={{ fontSize: "1.5rem" }}
                >
                  SMIT Student Protal
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {isMini || !isAdmin ? null : (
          <Box sx={(theme) => navbarRow(theme, { isMini })}>
            <Box color={light ? "white" : "inherit"}>
              <IconButton size="large" disableRipple onClick={handleOpenMenu}>
                <Avatar
                  src="https://bit.ly/34BY10g"
                  alt="profile-img"
                  size="sm"
                />
                <Typography
                  fontWeight="regular"
                  variant="h6"
                  color={light ? "white" : "dark"}
                  display="block"
                  textAlign="left"
                >
                  {user_name}
                  <span style={{ display: "block", fontSize: "1rem" }}>
                    <Typography variant="caption">Admin</Typography>
                  </span>
                </Typography>

                <Icon onClick={() => setOpenMenu(!openMenu)}>
                  <ArrowDropDownIcon />
                </Icon>
              </IconButton>

              {renderMenu()}
            </Box>
          </Box>
        )}
        {/* if user open the app */}

        <Box >
          <IconButton>
            <Button variant="contained">Login</Button>

          </IconButton>
          <IconButton>
            <Button variant="contained" color="secondary">Sign Up</Button>

          </IconButton>
          <IconButton onClick={() => { navigate("/user/courses") }}>
            <Button variant="contained" color="warning">New Courses</Button>
          </IconButton>
        </Box>


      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
