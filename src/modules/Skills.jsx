import { Chip, Container, Stack } from "@mui/material";

const Skills = () => {
  return (
    <Container sx={{ textAlign: "center", padding: 4 }}>
      <Stack
        spacing={2}
        alignItems="center"
        direction="row"
        justifyContent="center"
      >
        <Chip label="JavaScript" color="primary" />
        <Chip label="React" color="primary" />
        <Chip label="Node.js" color="primary" />
      </Stack>
    </Container>
  );
};

export default Skills;
