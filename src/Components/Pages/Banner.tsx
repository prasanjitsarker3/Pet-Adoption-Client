"use client";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  "Find Your Furry Friend",
  "Give a Home, Get a Heart",
  "Homeless Pets Need You",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 4000); // Change title every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack width="100%" pt={0} mt={0} sx={{ height: "100vh" }}>
      <Container>
        <Grid container sx={{ height: "100vh" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ xs: "center", sm: "flex-start" }}
              textAlign={{ xs: "center", sm: "left" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    color="#FE772A"
                  >
                    {titles[currentIndex]}
                  </Typography>
                </motion.div>
              </AnimatePresence>

              <Typography
                variant="h5"
                component="p"
                pb={3}
                gutterBottom
                color="#313131"
              >
                Open your heart to a loving companion. Discover adorable pets
                waiting for their forever homes. Adopt today and make a
                difference!
              </Typography>
              <Link href="/pet" passHref>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowRightIcon />}
                  sx={{
                    backgroundColor: "#FE772A",
                    ":hover": {
                      backgroundColor: "#FE772A",
                    },
                  }}
                >
                  Browse Adoptable Pets
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box display="flex" justifyContent="center">
              <video
                src={"/Banner/pet.mp4"}
                autoPlay
                loop
                muted
                style={{ width: "80%", height: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Banner;
