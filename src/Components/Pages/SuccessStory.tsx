"use client";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";
import pet from "../../assests/images/pawprint.png";
import medical from "../../assests/images/emergency-call.png";
import care from "../../assests/images/babysitter.png";
import rescu from "../../assests/images/animal-rescue.png";

// Data for the success stories
const successStories = [
  {
    id: 1,
    image: pet,
    count: "1,765",
    label: "Happy Pets",
  },
  {
    id: 2,
    image: medical,
    count: "765",
    label: "Emergency Services",
  },
  {
    id: 3,
    image: care,
    count: "365",
    label: "Caretakers",
  },
  {
    id: 4,
    image: rescu,
    count: "1,100",
    label: "Pet Rescues",
  },
];

const SuccessStory = () => {
  const MotionBox = motion(Stack);
  return (
    <Container>
      <Box py={8}>
        <Box>
          <Typography variant="h4" gutterBottom color="#ff6347" align="center">
            Our Success Stories
          </Typography>
        </Box>
        <MotionBox
          py={4}
          sx={{
            backgroundImage: "linear-gradient(90deg, #ff6347, #ffa191)",
            backgroundSize: "200% 100%",
            backgroundPosition: "left center",
            transition: "background-position 3s ease-in-out",
          }}
          // animate={{
          //   backgroundPosition: ["left center", "right center"],
          // }}
          // transition={{
          //   duration: 3,
          //   repeat: Infinity,
          //   repeatType: "mirror",
          // }}
        >
          <Grid container spacing={5}>
            {successStories.map((story) => (
              <Grid key={story.id} item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    borderRadius: "8px",
                    padding: "16px",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={3}
                  >
                    <Image
                      src={story.image}
                      alt={story.label}
                      height={50}
                      width={50}
                    />
                    <Typography variant="h4" color="white">
                      {story.count}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      padding: "8px 0",
                      marginTop: "8px",
                      borderRadius: "4px",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {story.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Box>
    </Container>
  );
};

export default SuccessStory;
