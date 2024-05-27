"use client";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
} from "@mui/material";
import { useGetPetsQuery } from "../Redux/PetApi/petApi";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RecentAdoption from "./RecentAdoption";
import SkeletonCard from "./Skeleton";

const PetInfo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [size, setSize] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (searchTerm.length > 0) {
      setSize("");
      setSpecies("");
      setGender("");
    }
  }, [searchTerm]);

  const [page, setPage] = useState(1);
  const [limit] = useState(6); // Fixed limit to 6 items per page

  const query: Record<string, any> = {
    searchTerm,
    page,
    limit,
  };

  if (!searchTerm.length) {
    if (size) query["size"] = size;
    if (species) query["species"] = species;
    if (gender) query["gender"] = gender;
  }

  const { data, isLoading } = useGetPetsQuery(query);
  const petData = data?.pet?.result;
  const meta = data?.meta?.meta;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const countPage = meta ? Math.ceil(meta.total / limit) : 0;

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <div>
      <Box py={5} width="100%">
        <Container>
          <Stack
            width="100%"
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={3}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "25%",
                },
              }}
              gap={3}
            >
              <Typography
                variant="h5"
                component="h2"
                pb={2}
                pt={2}
                color="#FE772A"
              >
                Filtering Pet Information
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Pet Size</InputLabel>
                <Select
                  size="medium"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={size}
                  label="Pet Size"
                  onChange={(e) => setSize(e.target.value)}
                >
                  <MenuItem value={"SMALL"}>Small</MenuItem>
                  <MenuItem value={"MEDIUM"}>Medium</MenuItem>
                  <MenuItem value={"LARGE"}>Large</MenuItem>
                  <MenuItem value={""}>N/A</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                fullWidth
                sx={{
                  marginY: 2,
                }}
              >
                <InputLabel id="demo-simple-select-label">
                  Pet Gender
                </InputLabel>
                <Select
                  size="medium"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Pet Gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value={"MALE"}>Male</MenuItem>
                  <MenuItem value={"FEMALE"}>Female</MenuItem>
                  <MenuItem value={"UNKNOWN"}>Unknown</MenuItem>
                  <MenuItem value={""}>N/A</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Special needs
                </InputLabel>
                <Select
                  size="medium"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={species}
                  label="Special needs"
                  onChange={(e) => setSpecies(e.target.value)}
                >
                  <MenuItem value={"DOG"}>Dog</MenuItem>
                  <MenuItem value={"CAT"}>Cat</MenuItem>
                  <MenuItem value={"BIRD"}>Bird</MenuItem>
                  <MenuItem value={"RABBIT"}>Rabbit</MenuItem>
                  <MenuItem value={"REPTILE"}>Reptile</MenuItem>
                  <MenuItem value={"FISH"}>Fish</MenuItem>
                  <MenuItem value={"OTHER"}>Other</MenuItem>
                  <MenuItem value={""}>N/A</MenuItem>
                </Select>
              </FormControl>

              {/* Recent Adoption Pet */}
              <Box
                sx={{
                  display: {
                    xs: "none", // Hide on small devices
                    md: "block", // Show on medium and larger devices
                  },
                }}
              >
                <RecentAdoption />
              </Box>
            </Box>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "75%",
                },
              }}
            >
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 300,
                  mb: 2,
                  mx: "auto",
                }}
              >
                <InputBase
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Pet Info..."
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>

              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {petData?.map((pet: any) => (
                  <Grid item xs={6} sm={3} md={4} key={pet.id}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <Box
                        p={2}
                        sx={{
                          "& img": {
                            width: "full",
                            height: "150px",
                            margin: "0 auto",
                          },
                        }}
                      >
                        <Image
                          width={500}
                          height={100}
                          src={pet?.photos}
                          alt="pet image"
                        />
                      </Box>
                      <CardContent
                        sx={{
                          marginTop: 0,
                          paddingTop: 0,
                        }}
                      >
                        <Stack direction="row" justifyContent="space-between">
                          <Typography gutterBottom variant="h5" component="div">
                            {pet?.name}
                          </Typography>
                          <Typography>Age: {pet?.age}</Typography>
                        </Stack>

                        <Typography variant="body2" color="text.secondary">
                          {pet?.description}
                        </Typography>
                        {/* <Typography variant="body2">
                          Breed: {pet?.breed}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ display: "flex", justifyItems: "center" }}
                        >
                          <LocationOnIcon />
                          {pet?.location}
                        </Typography> */}
                      </CardContent>
                      <CardActions
                        sx={{
                          pt: 0,
                          px: 2,
                          pb: 2,
                          mt: "auto",
                        }}
                      >
                        <Link
                          href={`/petDetails/${pet.id}`}
                          passHref
                          style={{ width: "100%" }}
                        >
                          <Button
                            variant="outlined"
                            fullWidth={true}
                            endIcon={<KeyboardArrowRightIcon />}
                            sx={{
                              width: "100%",
                            }}
                          >
                            See Details
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Box mt={2} display="flex" justifyContent="center">
                <Pagination
                  count={countPage}
                  color="primary"
                  page={page}
                  onChange={handleChange}
                />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default PetInfo;
