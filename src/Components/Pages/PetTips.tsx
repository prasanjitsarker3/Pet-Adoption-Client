import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const PetTips = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={3} py={8}>
          <Grid item xs={12} sm={12} md={4}>
            <Stack
              direction="row"
              justifyContent="center"
              //   alignItems="center"
              gap={3}
              bgcolor="#F4F7FE"
              py={5}
              px={3}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/128/1807/1807570.png"
                  }
                  alt="Grooming Services"
                  height={200}
                  width={200}
                />
              </Box>
              <Box>
                <Typography variant="h6" component="h2" color="#FE772A">
                  Grooming Services
                </Typography>
                <Typography>
                  Our grooming services offer a complete pampering experience
                  for your pets.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Stack
              direction="row"
              justifyContent="center"
              //   alignItems="center"
              gap={3}
              bgcolor="#F4F7FE"
              py={5}
              px={3}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/128/2809/2809789.png"
                  }
                  alt="Grooming Services"
                  height={200}
                  width={200}
                />
              </Box>
              <Box>
                <Typography variant="h6" component="h2" color="#FE772A">
                  Veterinary 24/7
                </Typography>
                <Typography>
                  Our Veterinary 24/7 service ensures that your pets receive the
                  best medical care.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Stack
              direction="row"
              justifyContent="center"
              //   alignItems="center"
              gap={3}
              bgcolor="#F4F7FE"
              py={5}
              px={3}
            >
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src={
                    "https://cdn-icons-png.flaticon.com/128/6988/6988855.png"
                  }
                  alt="Grooming Services"
                  height={200}
                  width={200}
                />
              </Box>
              <Box>
                <Typography variant="h6" component="h2" color="#FE772A">
                  Fun Activities
                </Typography>
                <Typography>
                  Our fun activities program is designed to keep your pets
                  engaged, active, happy.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PetTips;
