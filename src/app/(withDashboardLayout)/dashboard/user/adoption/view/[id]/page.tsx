"use client";
import { useSingleRequestPetAdoptionQuery } from "@/Components/Redux/RequestApi/requestApi";
import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";

const PetAdoptionView = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleRequestPetAdoptionQuery(id);
  console.log("Data", data?.data);

  const adoption = data?.data;
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const commonStyle = {
    backgroundColor: "#F4F7FE",
    padding: 1,
    mb: "8px",
  };

  return (
    <Box>
      <Container>
        {isLoading ? (
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              gap: 5,
            }}
          >
            <Skeleton variant="rectangular" width={300} height={250} />
            <Skeleton variant="rectangular" width={300} height={250} />
            <Skeleton variant="rectangular" width={300} height={250} />
          </Box>
        ) : (
          <Stack
            direction="row"
            justifyContent="center"
            justifyItems="center"
            gap={5}
            width={"100%"}
            p={5}
          >
            <Box
              width={"40%"}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                "&img": {
                  width: "100%",
                },
              }}
            >
              <Image
                src={adoption?.pet?.photos}
                height={300}
                width={300}
                objectFit="cover"
                alt="pet"
              />
            </Box>
            <Stack direction="row" gap={5} width="60%">
              <Box width="50%">
                <Typography sx={{ ...commonStyle }}>
                  Name:{adoption?.pet?.name}
                </Typography>
                <Typography sx={{ ...commonStyle }}>
                  Species:{adoption?.pet?.species}
                </Typography>
                <Typography sx={{ ...commonStyle }}>
                  Age:{adoption?.pet?.age}
                </Typography>
                <Typography sx={{ ...commonStyle }}>
                  Size:{adoption?.pet?.size}
                </Typography>
                <Typography sx={{ ...commonStyle }}>
                  Gender:{adoption?.pet?.gender}
                </Typography>
              </Box>
              <Box width="50%">
                <Typography sx={{ ...commonStyle }}>
                  Breed:{adoption?.pet?.breed}
                </Typography>
                <Typography sx={{ ...commonStyle }}>
                  Health Status:{adoption?.pet?.healthStatus}
                </Typography>
                <Typography sx={{ ...commonStyle }}>
                  Location:{adoption?.pet?.location}
                </Typography>

                <Typography sx={{ ...commonStyle }}>
                  Description:{adoption?.pet?.description}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default PetAdoptionView;
