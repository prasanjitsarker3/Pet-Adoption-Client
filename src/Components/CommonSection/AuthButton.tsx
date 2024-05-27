import { Box, Button } from "@mui/material";
import Link from "next/link";
import { getUserInfo, removeUser } from "../Auth/authService";
import { authKey } from "../Common/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";
import { logoutUser } from "../ServerAction/logoutUser";

const AuthButton = () => {
  const user = getUserInfo();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser(router);
    // removeUser();
    // router.refresh();
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {user?.id && user?.id ? (
        // <Button
        //   onClick={handleLogOut}
        //   variant="outlined"
        //   size="small"
        //   color="error"
        // >
        //   Logout
        // </Button>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title={user?.name || "N/A"}>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
      ) : (
        <Link href="/login">
          <Button variant="outlined" size="small">
            Login
          </Button>
        </Link>
      )}

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Link href={`/dashboard/${user?.role}`}>
            <PersonIcon /> Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/changepassword">
            <PasswordIcon />
            Change Password
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Button
            fullWidth={true}
            endIcon={<Logout />}
            onClick={handleLogOut}
            variant="outlined"
            size="small"
            color="error"
          >
            Logout
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AuthButton;
