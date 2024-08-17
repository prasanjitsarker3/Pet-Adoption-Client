import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import cat from "../../../../public/Banner/Cat1.png";
import dog from "../../../../public/Banner/cute-spitz-dog-removebg-preview.png";

const Discount = () => {
  return (
    <Container>
      <Box py={8}>
        <Box sx={{ backgroundColor: "#ff826c", color: "white" }}>
          <Grid container spacing={3}>
            {/* First Grid: Image */}
            <Grid item xs={12} md={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                justifyItems="center"
              >
                <Image
                  src={cat}
                  alt="Discount Image 1"
                  width={500}
                  height={500}
                  style={{ height: "250px" }}
                />
              </Box>
            </Grid>

            {/* Second Grid: Discount Price and Button */}
            <Grid
              item
              xs={12}
              md={3}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Box>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ textAlign: { xs: "center", sm: "center", md: "left" } }}
                >
                  50% OFF
                </Typography>
                <Button
                  sx={{
                    mt: 2,
                    border: "2px solid #ffffff",
                    borderRadius: "8px",
                    color: "white",
                  }}
                >
                  Get Discount
                </Button>
              </Box>
            </Grid>

            {/* Third Grid: Title and About */}
            <Grid
              item
              xs={12}
              md={3}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Special Offer
              </Typography>
              <Typography variant="body1" color="white">
                Enjoy a special discount on our premium products. Limited time
                only!
              </Typography>
            </Grid>

            {/* Fourth Grid: Image */}
            <Grid item xs={12} md={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                justifyItems="center"
              >
                <Image
                  src={dog}
                  alt="Discount Image 2"
                  width={500}
                  height={500}
                  style={{ height: "250px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Discount;
