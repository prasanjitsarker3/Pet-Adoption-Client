import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
      p={3}
    >
      <Image
        src="https://img.freepik.com/premium-vector/stressed-parent-by-child-behaviour-premium-sketchy-icon_9206-6954.jpg?w=740"
        alt="404 Image"
        height={300}
        width={500}
      />
      <Typography variant="h4" mt={3} mb={2}>
        Oops! Page Not Found
      </Typography>

      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Back Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
