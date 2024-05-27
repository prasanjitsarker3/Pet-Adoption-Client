import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Link from "next/link";

const Banner = () => {
  return (
    <Stack
      width="100%"
      bgcolor="#DEDFDC"
      pt={0}
      mt={0}
      sx={{ height: "100vh" }}
    >
      <Container>
        <Grid container spacing={5} sx={{ height: "100vh" }}>
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
              padding={3}
              textAlign={{ xs: "center", sm: "left" }}
              bgcolor="#DEDFDC"
            >
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                color="#FE772A"
              >
                Ready to Adopt!
              </Typography>
              <Typography
                variant="h5"
                component="p"
                gutterBottom
                color="#313131"
              >
                Give a loving home to a pet in need. Explore our available pets
                and find your new best friend today. Your perfect companion is
                just a click away!
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
                  See More
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
            <Box
              position="relative"
              width="100%"
              height={{ xs: "200px", sm: "400px" }}
              bgcolor="#F4F7FE"
            >
              <Image
                src="https://img.freepik.com/free-psd/two-golden-retriever-puppies-wearing-scarves_53876-73985.jpg?t=st=1716725639~exp=1716729239~hmac=5943c888815d952fb0781d0d90fbfe9af5d043ebb62d81221038d808e7ab67f8&w=740"
                alt="banner"
                // width={400}
                // height={300}
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Banner;
