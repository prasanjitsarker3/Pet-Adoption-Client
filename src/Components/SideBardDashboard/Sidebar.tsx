"use client";
import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getUserInfo } from "../Auth/authService";
import { drawerItems } from "./drawerItems";
import { UserRole } from "../Types/dashboard";
import SidebarItems from "./sidebarITems";
const Sidebar = () => {
  //   const { role } = getUserInfo();
  //   console.log("role", role);
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
        py={1}
        gap={2}
        component={Link}
        href="/"
        sx={{
          cursor: "pointer",
        }}
      >
        <Image
          width={30}
          height={30}
          src="https://cdn-icons-png.flaticon.com/128/4998/4998539.png"
          alt="dashboardLogo"
        />
        <Typography variant="h6" component="h1" color="#FE772A">
          PET CARE
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItems key={index} index={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
