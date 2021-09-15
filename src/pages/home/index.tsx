import { Container, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import React from "react";

function Home() {
  return (
    <Container component="main">
      <CssBaseline />
      <Typography component="h1" variant="h5">
        Home
      </Typography>
    </Container>
  );
}
export { Home };
export default Home;
