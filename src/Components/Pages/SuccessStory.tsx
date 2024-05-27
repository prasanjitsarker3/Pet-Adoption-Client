import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import pet from "../../assests/images/pet.png";
import medical from "../../assests/images/first-aid-kit.png";
import care from "../../assests/images/babysitter.png";
import rescu from "../../assests/images/rescue-dog.png";

const SuccessStory = () => {
  return (
    <Container>
      <Stack py={8}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={3}>
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={3}
              >
                <Image src={pet} alt="" height={50} width={50} />
                <Typography variant="h4" color="#FE772A">
                  1,765
                </Typography>
              </Stack>
              <Typography
                sx={{
                  backgroundColor: "#f4f4f4",
                  textAlign: "center",
                  padding: "8px 0",
                  marginTop: "8px",
                  borderRadius: "4px",
                  fontWeight: 500,
                }}
              >
                Happy Pets
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={3}
              >
                <Image src={medical} alt="" height={50} width={50} />
                <Typography variant="h4" color="#FE772A">
                  765
                </Typography>
              </Stack>
              <Typography
                sx={{
                  backgroundColor: "#f4f4f4",
                  textAlign: "center",
                  padding: "8px 0",
                  marginTop: "8px",
                  borderRadius: "4px",
                  fontWeight: 500,
                }}
              >
                Emergency Services
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={3}
              >
                <Image src={care} alt="" height={50} width={50} />
                <Typography variant="h4" color="#FE772A">
                  365
                </Typography>
              </Stack>
              <Typography
                sx={{
                  backgroundColor: "#f4f4f4",
                  textAlign: "center",
                  padding: "8px 0",
                  marginTop: "8px",
                  borderRadius: "4px",
                  fontWeight: 500,
                }}
              >
                Caretakers
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={3}
              >
                <Image src={rescu} alt="" height={50} width={50} />
                <Typography variant="h4" color="#FE772A">
                  1100
                </Typography>
              </Stack>
              <Typography
                sx={{
                  backgroundColor: "#f4f4f4",
                  textAlign: "center",
                  padding: "8px 0",
                  marginTop: "8px",
                  borderRadius: "4px",
                  fontWeight: 500,
                }}
              >
                Pet Rescues
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default SuccessStory;
