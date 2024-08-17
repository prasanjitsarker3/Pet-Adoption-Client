"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactBanner = () => {
  return (
    <Box>
      <Container>
        <Box pt={6} pb={12}>
          <Grid container spacing={12}>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Typography variant="h4" gutterBottom color="#ff7359">
                  Send Us a Message
                </Typography>
                {/* <Divider /> */}
                <Typography variant="body1" paragraph>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable.
                </Typography>
                <Stack direction="row" alignItems="center" spacing={3} my={3}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 50,
                      height: 50,
                      bgcolor: "#ff6347",
                      borderRadius: "50%",
                    }}
                  >
                    <PhoneInTalkIcon style={{ color: "white", fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textPrimary">
                      Call Anytime
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                      (800) 123-45789
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 50,
                      height: 50,
                      bgcolor: "#ff6347",
                      borderRadius: "50%",
                    }}
                  >
                    <EmailIcon style={{ color: "white", fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textPrimary">
                      Write Email
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                      help@yourcompany.com
                    </Typography>
                  </Box>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3} my={3}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 50,
                      height: 50,
                      bgcolor: "#ff6347",
                      borderRadius: "50%",
                    }}
                  >
                    <LocationOnIcon style={{ color: "white", fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textPrimary">
                      Visit Office
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                      214 Road New York, USA
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <TextField size="small" fullWidth label="Your Name" />
                <TextField size="small" fullWidth label="Your Email" />
                <TextField size="small" fullWidth label="Your Subject" />

                <TextField
                  size="small"
                  multiline
                  rows={5}
                  fullWidth
                  label="Your Message"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#ff6347",
                    ":hover": {
                      backgroundColor: "#ff6347",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactBanner;
