"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getUserInfo } from "../Auth/authService";
import { useRouter } from "next/navigation";

const AuthButton = dynamic(() => import("../CommonSection/AuthButton"), {
  ssr: false,
});

const drawerWidth = 240;
const navItems = ["HOME", "ABOUT", "CONTACT"];
const navItem = [
  { name: "HOME", path: "" },
  { name: "ABOUT", path: "about" },
  { name: "CONTACT", path: "contact" },
];

const Navbar = () => {
  const [userRole, setUserRole] = React.useState("");
  const [scrolling, setScrolling] = React.useState(false);

  React.useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo && userInfo.role) {
      setUserRole(userInfo.role);
    }
  }, []);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} color="#FE772A">
        PET CARE
      </Typography>
      <Divider />

      <Box gap={3}>
        <Typography
          component="div"
          sx={{
            backgroundColor: "#f4f4f4",
            textAlign: "center",
            padding: "8px 0",
            marginTop: "8px",
            borderRadius: "4px",
            fontWeight: 500,
          }}
        >
          <Link href="/" passHref>
            HOME
          </Link>
        </Typography>
        <Typography
          component="div"
          sx={{
            backgroundColor: "#f4f4f4",
            textAlign: "center",
            padding: "8px 0",
            marginTop: "8px",
            borderRadius: "4px",
            fontWeight: 500,
          }}
        >
          <Link href="/pet" passHref>
            PETS
          </Link>
        </Typography>
        <Typography
          component="div"
          sx={{
            backgroundColor: "#f4f4f4",
            textAlign: "center",
            padding: "8px 0",
            marginTop: "8px",
            borderRadius: "4px",
            fontWeight: 500,
          }}
        >
          <Link href="/about" passHref>
            ABOUT US
          </Link>
        </Typography>
        {userRole && (
          <Typography
            component="div"
            sx={{
              backgroundColor: "#f4f4f4",
              textAlign: "center",
              padding: "8px 0",
              marginTop: "8px",
              borderRadius: "4px",
              fontWeight: 500,
            }}
          >
            <Link href={`/dashboard/${userRole}`} passHref>
              DASHBOARD
            </Link>
          </Typography>
        )}
        <AuthButton />
      </Box>
    </Box>
  );

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{
            background: scrolling ? "white" : "none",
            boxShadow: "none",
            px: "65px",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "black",
              }}
            >
              <Box display="flex" justifyItems="center" gap={1}>
                <Image
                  width={35}
                  height={35}
                  src="https://cdn-icons-png.flaticon.com/128/4998/4998539.png"
                  alt="doclogo"
                />
                <Typography color="#FE772A" pt={1}>
                  PET CARE
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}
            >
              <Box display="flex" gap={3}>
                <Typography
                  component="div"
                  sx={{
                    px: 1,
                    transition: "background-color 0.3s, color 0.3s",
                    "&:hover": {
                      backgroundColor: "#FE772A",
                      color: "white",
                    },
                  }}
                >
                  <Link href="/" passHref>
                    HOME
                  </Link>
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    px: 1,
                    transition: "background-color 0.3s, color 0.3s",
                    "&:hover": {
                      backgroundColor: "#FE772A",
                      color: "white",
                    },
                  }}
                >
                  <Link href="/pet" passHref>
                    PETS
                  </Link>
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    px: 1,
                    transition: "background-color 0.3s, color 0.3s",
                    "&:hover": {
                      backgroundColor: "#FE772A",
                      color: "white",
                    },
                  }}
                >
                  <Link href="/about" passHref>
                    ABOUT US
                  </Link>
                </Typography>
                {userRole && (
                  <Typography
                    component="div"
                    sx={{
                      px: 1,
                      transition: "background-color 0.3s, color 0.3s",
                      "&:hover": {
                        backgroundColor: "#FE772A",
                        color: "white",
                      },
                    }}
                  >
                    <Link href={`/dashboard/${userRole}`} passHref>
                      DASHBOARD
                    </Link>
                  </Typography>
                )}
              </Box>
              <AuthButton />
            </Box>
          </Toolbar>
        </AppBar>
        {/* </Container> */}
        <nav>
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
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
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </Container>
  );
};

export default Navbar;
