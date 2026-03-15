import { Card, Container, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ textAlign: "center", padding: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Project 1
            </Typography>
            <Typography variant="body1">
              Description of Project 1. This project is about...
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Project 2
            </Typography>
            <Typography variant="body1">
              Description of Project 2. This project is about...
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card sx={{ padding: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Project 3
            </Typography>
            <Typography variant="body1">
              Description of Project 3. This project is about...
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
