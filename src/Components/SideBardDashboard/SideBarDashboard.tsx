"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Badge, Stack, Tooltip } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Sidebar from "./Sidebar";
import { getUserInfo } from "../Auth/authService";
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import { logoutUser } from "../ServerAction/logoutUser";
import Link from "next/link";

const drawerWidth = 240;

export default function SidebarDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const router = useRouter();

  const [user, setUser] = useState("");
  useEffect(() => {
    const user = getUserInfo();
    setUser(user && user);
  }, []);

  console.log("User Info", user);

  const handleLogOut = () => {
    logoutUser(router);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // Remove this const when copying and pasting into your project.

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#F4F7FE",
          boxShadow: 0,
          borderBottom: "1px solid #ddd",
          py: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "primary.main" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                noWrap
                component="h6"
                sx={{ color: "rgba(11, 17, 52, 0.6)" }}
              >
                Name:{" "}
                {user
                  ? //@ts-ignore
                    user.name
                  : "Loading"}
              </Typography>
              <Typography
                variant="body2"
                noWrap
                component="h6"
                sx={{ color: "rgba(11, 17, 52, 0.6)" }}
              >
                Email:{" "}
                {user
                  ? //@ts-ignore
                    user.email
                  : "Loading"}
              </Typography>
            </Box>

            <Stack direction="row" gap={3}>
              <Tooltip title={"Home"}>
                <Link href="/">
                  <IconButton sx={{ background: "#ffffff" }}>
                    <HomeIcon color="action" />
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip title={"Logout"}>
                <IconButton
                  onClick={handleLogOut}
                  sx={{ background: "#ffffff" }}
                >
                  <LogoutIcon color="error" />
                </IconButton>
              </Tooltip>
              {/* <Avatar alt={data?.name} src={data?.profilePhoto} /> */}
              {/* <AccountMenu /> */}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Sidebar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Sidebar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}
