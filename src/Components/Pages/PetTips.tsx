"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const petServices = [
  {
    id: 1,
    title: "Grooming Services",
    description:
      "Our grooming services offer a complete pampering experience for your pets.",
    imageSrc: "https://cdn-icons-png.flaticon.com/128/1807/1807570.png",
  },
  {
    id: 2,
    title: "Veterinary 24/7",
    description:
      "Our Veterinary 24/7 service ensures that your pets receive the best medical care.",
    imageSrc: "https://cdn-icons-png.flaticon.com/128/2809/2809789.png",
  },
  {
    id: 3,
    title: "Fun Activities",
    description:
      "Our fun activities program is designed to keep your pets engaged, active, happy.",
    imageSrc: "https://cdn-icons-png.flaticon.com/128/6988/6988855.png",
  },
];

const PetTips = () => {
  return (
    <Box py={5}>
      <Container>
        <Typography
          variant="h4"
          component={motion.h1}
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            background: "linear-gradient(90deg, #E25554, #FE772A)", // Initial gradient
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"], // Animate the gradient position
          }}
          transition={{
            duration: 2, // Duration of the animation
            ease: "easeInOut",
            repeat: Infinity, // Infinite animation
            repeatType: "reverse", // Reverse the direction after each iteration
          }}
        >
          Comprehensive Pet Care Services
        </Typography>
        <Grid container spacing={3} py={5}>
          {petServices.map((service) => (
            <Grid key={service.id} item xs={12} sm={6} md={4}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  gap={3}
                  bgcolor="#fff9f8"
                  position="relative"
                  py={5}
                  px={3}
                  className="bg-hover-gradient"
                >
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ zIndex: "20" }}
                  >
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      height={150}
                      width={150}
                    />
                  </Box>
                  <Box sx={{ zIndex: "20" }}>
                    <Typography
                      variant="h6"
                      component="h2"
                      color="#FE772A"
                      sx={{ zIndex: "20" }}
                    >
                      {service.title}
                    </Typography>
                    <Typography sx={{ zIndex: "20" }}>
                      {service.description}
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PetTips;
