import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import banner from "../../../../public/Banner/p1-removebg-preview.png";

const BannerNew = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Shape */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #ffefed 0%, #ffefed 100%)",
          height: "100%",
          width: "100%",
          clipPath: "polygon(63% 0, 100% 0%, 100% 100%, 67% 100%, 51% 46%)",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
        >
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              //   mb: { xs: 2, md: 0 },
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              TAKE{" "}
              <span style={{ color: "#ff6347", fontWeight: "bold" }}>
                CARE OF
              </span>
            </Typography>
            <Typography variant="h3" component="h1">
              YOUR{" "}
              <span style={{ color: "#ff6347", fontWeight: "bold" }}>
                LOVELY
              </span>{" "}
              PET
            </Typography>
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
            <Box display="flex " gap={2}>
              <Link href="/pet" passHref>
                <Button
                  endIcon={<ArrowRightIcon />}
                  sx={{
                    backgroundColor: "#ff6347",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#FE772A",
                    },
                  }}
                >
                  Adoptable Pets
                </Button>
              </Link>
              <Link href="/pet" passHref>
                <Button
                  sx={{
                    border: "2px solid #ff6347",
                    borderRadius: "8px",
                    color: "#ff6347",
                  }}
                >
                  Explore More !
                </Button>
              </Link>
            </Box>
          </Box>
          <Box sx={{ mt: { xs: 2, md: 0 }, width: { xs: "100%", md: "50%" } }}>
            <Image
              src={banner}
              alt="Adorable kitten and dog"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BannerNew;
