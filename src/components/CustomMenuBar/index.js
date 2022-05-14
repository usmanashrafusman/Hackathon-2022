import { forwardRef } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

// Material Dashboard 2 PRO React components
import { Box } from "@mui/system";
import { Typography } from "@mui/material"; 

// custom styles for the NotificationItem
import menuItem from "../../assets/styles/components/CustomMenuBar";

const NotificationItem = forwardRef(({ icon, title, ...rest }, ref) => (
  <MenuItem {...rest} ref={ref} sx={(theme) => menuItem(theme)}>
     <Box
      component={Link}
      py={0.5}
      display="flex"
      alignItems="center"
      lineHeight={1}
    >
       <Typography variant="body1" color="primary" lineHeight={0.75}>
        {icon}
       </Typography>
       <Typography
        variant="button"
        fontWeight="regular"
        color="primary"
        sx={{ ml: 1 }}
      >
        {title}
       </Typography>
     </Box>
  </MenuItem>
));

// Typechecking props for the NotificationItem
NotificationItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default NotificationItem;
