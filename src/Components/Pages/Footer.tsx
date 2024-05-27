import { Box, Grid, Icon, Stack, Typography } from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import UpdateIcon from "@mui/icons-material/Update";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box bgcolor="black" py={8} px={6}>
      <Stack>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={3}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 60,
                  bgcolor: "#FE772A",
                  borderRadius: "50%",
                }}
              >
                <LocationOnIcon style={{ color: "white", fontSize: 30 }} />
              </Box>
              <Box>
                <Typography variant="h6" color="white">
                  516 Columbia Blvd
                </Typography>
                <Typography variant="h6" color="white">
                  Sonoma, CA 21202
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 60,
                  bgcolor: "#FE772A",
                  borderRadius: "50%",
                }}
              >
                <PhoneIcon style={{ color: "white", fontSize: 30 }} />
              </Box>
              <Box>
                <Typography variant="h6" color="white">
                  Office: 772-619-6309
                </Typography>
                <Typography variant="h6" color="white">
                  Inq: 772-619-6432
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 60,
                  bgcolor: "#FE772A",
                  borderRadius: "50%",
                }}
              >
                <UpdateIcon style={{ color: "white", fontSize: 30 }} />
              </Box>
              <Box>
                <Typography variant="h6" color="white">
                  Mon - Fri: 9am - 8pm
                </Typography>
                <Typography variant="h6" color="white">
                  Sat - Sun: Closed
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={3}
            >
              <Box display="flex" justifyContent="space-between" gap={3}>
                <Box>
                  <Link href="/" passHref>
                    <Typography
                      variant="body1"
                      color="white"
                      sx={{ display: "block", cursor: "pointer" }}
                    >
                      HOME
                    </Typography>
                  </Link>
                  <Link href="/pet" passHref>
                    <Typography
                      variant="body1"
                      color="white"
                      sx={{ display: "block", cursor: "pointer" }}
                    >
                      PET
                    </Typography>
                  </Link>
                </Box>
                <Box>
                  <Link href="/about-us" passHref>
                    <Typography
                      variant="body1"
                      color="white"
                      sx={{ display: "block", cursor: "pointer" }}
                    >
                      ABOUT US
                    </Typography>
                  </Link>
                  <Link href="/privacy-policy" passHref>
                    <Typography
                      variant="body1"
                      color="white"
                      sx={{ display: "block", cursor: "pointer" }}
                    >
                      Privacy Policy
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box
          display="flex"
          justifyContent="center"
          px={12}
          pt={3}
          color="white"
          gap={12}
        >
          <Typography variant="body2">© 2024 Copy Right,PS DEV-12</Typography>
          <Box display="flex" gap={2}>
            <FacebookIcon style={{ color: "white", fontSize: 20 }} />
            <LinkedInIcon style={{ color: "white", fontSize: 20 }} />
            <InstagramIcon style={{ color: "white", fontSize: 20 }} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
