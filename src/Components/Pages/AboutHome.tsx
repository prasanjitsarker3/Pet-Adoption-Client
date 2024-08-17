import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const AboutHome = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        component="h1"
        color="#FE772A"
        gutterBottom
        textAlign="center"
        sx={{ mb: 4 }}
      >
        Welcome to Pet Care
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        // alignItems="center"
        justifyContent="space-between"
        gap={4}
      >
        {/* Image Section */}
        <Box
          flexBasis={{ xs: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
        >
          <Image
            src="https://img.freepik.com/premium-photo/american-cocker-spaniel-red-cat-together-floor-room_392895-563498.jpg?ga=GA1.1.1828852587.1722179846&semt=ais_hybrid"
            alt="Pet Care"
            width={500}
            height={500}
            style={{ borderRadius: "10px" }}
          />
        </Box>

        {/* Text Section */}
        <Box
          flexBasis={{ xs: "100%", md: "50%" }}
          display="flex"
          flexDirection="column"
          alignItems={{ xs: "center", md: "flex-start" }}
          textAlign={{ xs: "center", md: "left" }}
          gap={3}
        >
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ textAlign: "justify" }}
          >
            Broadcast neglectful and poignantly well until and some listlessly
            amidst successful concentrically ably dachshund more far but
            forwardly echidna outside tiger split thanks far vibrantly gosh
            hence pangolin however notwithstanding leapt untruthful gauchely
            yikes komodo dully more.
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ textAlign: "justify" }}
          >
            As abandoned winced this more far wow jeepers near more wow goodness
            so revealed much along worm some grasshopper.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#FE772A",
              ":hover": {
                backgroundColor: "#FFBB95",
              },
            }}
          >
            Explore Our Service
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutHome;
