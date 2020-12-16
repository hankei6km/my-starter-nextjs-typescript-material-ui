import Link from "../components/Link";
import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1">About</Typography>
        <Typography variant="body1">This is the about page</Typography>
        <p>
          <Button component={Link} naked href="/">
            Go to the main page
          </Button>
        </p>
      </Box>
    </Container>
  </Layout>
);

export default AboutPage;
