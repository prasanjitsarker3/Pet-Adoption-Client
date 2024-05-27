import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

const AboutBanner = () => {
  return (
    <Box
      height="100vh"
      sx={{
        backgroundImage: `url(https://img.freepik.com/premium-photo/image-dog-cat-show-their-love-each-other-pet-animals-illustration-generative-ai_132416-3886.jpg?w=740)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
          zIndex: 1,
        }}
      />
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          color: "white",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Want a pet for your loved ones?
        </Typography>
        <Typography variant="body1" paragraph color="white">
          Elit sanctus mea no. Ne duo vocent vocibus consetetur. Singulis etam
          pericula an vis, pri graeco partiendo te, alii admodum copiosae id
          sea. Per no malis liber fierent.
        </Typography>
        <Link href="/contact" passHref>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              backgroundColor: "#FE772A",
              ":hover": {
                backgroundColor: "#FE772A",
              },
            }}
          >
            Contact Us
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default AboutBanner;
