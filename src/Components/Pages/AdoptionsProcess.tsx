import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const AdoptionsProcess = () => {
  const imageStyle = {
    border: "2px solid #FE772A",
    borderRadius: "8px",
  };
  return (
    <Box py={8} bgcolor="">
      <Container>
        <Typography variant="h4" gutterBottom color="#FE772A">
          How We Work
        </Typography>
        <Typography variant="h5" gutterBottom>
          Pet Adoption Process
        </Typography>

        <Grid container spacing={5} pt={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box style={imageStyle} p={3}>
              <Box textAlign="center">
                <Box display="flex" justifyContent="center">
                  <Image
                    src="https://img.freepik.com/free-psd/two-golden-retriever-puppies-wearing-scarves_53876-73985.jpg?t=st=1716664291~exp=1716667891~hmac=c0945b3c5763be2120c657c8ba25a9f995831b1339d602a074344e5a7e41dc63&w=740"
                    alt=""
                    height={200}
                    width={200}
                  />
                </Box>
              </Box>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                color="#FE772A"
              >
                Find your pet
              </Typography>
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
            </Box>
          </Grid>
          {/* Repeat the same structure for the other grid items */}

          <Grid item xs={12} sm={6} md={4}>
            <Box style={imageStyle} p={3}>
              <Box display="flex" justifyContent="center">
                <Box>
                  <Image
                    src="https://img.freepik.com/free-psd/two-golden-retriever-puppies-wearing-scarves_53876-73985.jpg?t=st=1716664291~exp=1716667891~hmac=c0945b3c5763be2120c657c8ba25a9f995831b1339d602a074344e5a7e41dc63&w=740"
                    alt=""
                    height={200}
                    width={200}
                  />
                </Box>
              </Box>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                color="#FE772A"
              >
                Find your pet
              </Typography>
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
            </Box>
          </Grid>
          {/* Repeat the same structure for the other grid items */}

          <Grid item xs={12} sm={6} md={4}>
            <Box style={imageStyle} p={3}>
              <Box display="flex" justifyContent="center">
                <Box>
                  <Image
                    src="https://img.freepik.com/free-psd/two-golden-retriever-puppies-wearing-scarves_53876-73985.jpg?t=st=1716664291~exp=1716667891~hmac=c0945b3c5763be2120c657c8ba25a9f995831b1339d602a074344e5a7e41dc63&w=740"
                    alt=""
                    height={200}
                    width={200}
                  />
                </Box>
              </Box>
              <Typography
                variant="h6"
                align="center"
                gutterBottom
                color="#FE772A"
              >
                Find your pet
              </Typography>
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </Typography>
            </Box>
          </Grid>
          {/* Repeat the same structure for the other grid items */}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdoptionsProcess;
