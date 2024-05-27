import { Container, Grid, Skeleton } from "@mui/material";

const SkeletonCard = () => {
  return (
    <Container>
      <Grid container spacing={3} py={5}>
        <Grid item xs={12} sm={12} md={3} p={5}>
          <Skeleton variant="rectangular" width={250} height={150} />
          <Skeleton />
        </Grid>
        <Grid item xs={12} sm={12} md={3} p={5}>
          <Skeleton variant="rectangular" width={250} height={150} />
          <Skeleton />
        </Grid>
        <Grid item xs={12} sm={12} md={3} p={5}>
          <Skeleton variant="rectangular" width={250} height={150} />
          <Skeleton />
        </Grid>
        <Grid item xs={12} sm={12} md={3} p={5}>
          <Skeleton variant="rectangular" width={250} height={150} />
          <Skeleton />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={3} p={5}>
          <Skeleton variant="rectangular" width={250} height={150} />
          <Skeleton />
        </Grid>
        <Grid item xs={12} sm={12} md={3} p={5}>
          <Skeleton variant="rectangular" width={250} height={150} />
          <Skeleton />
        </Grid>
        <Grid item xs={12} sm={12} md={3} p={5}>
          <Skeleton variant="rectangular" width={250} height={150} />
          <Skeleton />
        </Grid>
        <Grid item xs={12} sm={12} md={3} p={5}>
          <Skeleton variant="rectangular" width={250} height={150} />
          <Skeleton />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkeletonCard;
