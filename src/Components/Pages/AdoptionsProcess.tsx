"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const AdoptionsProcess = () => {
  const imageStyle = {
    border: "2px solid #FE772A",
    borderRadius: "8px",
  };

  const hoverEffect = {
    whileHover: {
      backgroundColor: "#FF6347",
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  const textHoverEffect = {
    initial: { color: "#FE772A" },
    whileHover: { color: "#FFFFFF" },
  };

  const steps = [
    {
      title: "Find Your Perfect Pet",
      description: "Browse our adoptable pets and find your furry friend!",
      imageUrl:
        "https://img.freepik.com/free-psd/two-golden-retriever-puppies-wearing-scarves_53876-73985.jpg?t=st=1716664291~exp=1716667891~hmac=c0945b3c5763be2120c657c8ba25a9f995831b1339d602a074344e5a7e41dc63&w=740",
    },
    {
      title: "Apply to Adopt",
      description:
        "Learn more about the application process and submit your request.",
      imageUrl:
        "https://img.freepik.com/free-psd/two-golden-retriever-puppies-wearing-scarves_53876-73985.jpg?t=st=1716664291~exp=1716667891~hmac=c0945b3c5763be2120c657c8ba25a9f995831b1339d602a074344e5a7e41dc63&w=740",
    },
    {
      title: "Meet Your Match",
      description: "Schedule a meet-and-greet to see if it is a perfect fit.",
      imageUrl:
        "https://img.freepik.com/free-psd/two-golden-retriever-puppies-wearing-scarves_53876-73985.jpg?t=st=1716664291~exp=1716667891~hmac=c0945b3c5763be2120c657c8ba25a9f995831b1339d602a074344e5a7e41dc63&w=740",
    },
  ];

  return (
    <Box py={8}>
      <Container>
        <Typography variant="h4" gutterBottom color="#FE772A">
          How We Work
        </Typography>
        <Typography variant="h5" gutterBottom>
          Pet Adoption Process
        </Typography>

        <Grid container spacing={5} pt={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div {...hoverEffect}>
                <Box style={imageStyle} p={3}>
                  <Box display="flex" justifyContent="center">
                    <Image
                      src={step.imageUrl}
                      alt={step.title}
                      height={200}
                      width={200}
                    />
                  </Box>
                  <motion.div {...textHoverEffect}>
                    <Typography variant="h6" align="center" gutterBottom>
                      {step.title}
                    </Typography>
                  </motion.div>
                  <motion.div {...textHoverEffect}>
                    <Typography variant="body1" align="center">
                      {step.description}
                    </Typography>
                  </motion.div>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdoptionsProcess;
