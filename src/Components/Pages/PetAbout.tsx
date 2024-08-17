/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import bannerImg from "../../assests/images/close-up-kitten-house-tent.png";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

const PetAbout = () => {
  return (
    <Box py={12}>
      <Container>
        <Stack>
          <Typography variant="h4" gutterBottom color="#ff6347">
            Dedicated to Your Pet's Well-Being
          </Typography>
          <Grid container spacing={5} pt={4}>
            <Grid item xs={12} sm={12} md={6}>
              {/* <Box
                sx={{
                  height: "300px",
                  "&& img": { height: "100%" },
                  display: "flex",
                  borderRadius: "10px",
                }}
              >
                <Image
                  src={
                    "https://img.freepik.com/premium-photo/image-dog-cat-show-their-love-each-other-pet-animals-illustration-generative-ai_132416-3886.jpg?w=740"
                  }
                  alt=""
                  height={400}
                  width={400}
                  objectFit="cover"
                />
              </Box> */}
              <Box display="flex" justifyContent="center">
                <video
                  src={"/Banner/pet.mp4"}
                  autoPlay
                  loop
                  muted
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography paragraph sx={{ textAlign: "justify" }}>
                We understand the profound bond between you and your pet. That's
                why we're dedicated to providing exceptional care, ensuring your
                furry friend's happiness, health, and well-being. From expert
                grooming and reliable veterinary support to engaging activities
                and training, we offer a comprehensive range of services to meet
                all your pet's needs.
              </Typography>
              <Box mt={2}>
                <Typography
                  variant="h6"
                  display="flex"
                  alignItems="center"
                  paragraph
                >
                  <PublishedWithChangesIcon sx={{ mr: 1, color: "#FE922D" }} />
                  Professional Grooming Services
                </Typography>

                <Typography
                  variant="h6"
                  display="flex"
                  alignItems="center"
                  paragraph
                >
                  <PublishedWithChangesIcon sx={{ mr: 1, color: "#FE922D" }} />
                  24/7 Veterinary Support
                </Typography>
                <Typography
                  variant="h6"
                  display="flex"
                  alignItems="center"
                  paragraph
                >
                  <PublishedWithChangesIcon sx={{ mr: 1, color: "#FE922D" }} />
                  Engaging and Fun Activities
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default PetAbout;
