import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import bannerImg from "../../assests/images/close-up-kitten-house-tent.png";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

const PetAbout = () => {
  return (
    <Box py={8}>
      <Container>
        <Stack>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  height: "300px",
                  "&& img": { height: "100%" },
                  display: "flex",
                  justifyContent: "center",
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
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4" gutterBottom color="#FE922D">
                The Best for Your Pet!
              </Typography>
              <Typography paragraph>
                We understand that your pet deserves the very best care and
                attention. Our services are designed to ensure your pet is
                happiness, health, and well-being. From grooming and veterinary
                care to fun activities and training, we provide everything your
                pet needs.
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
