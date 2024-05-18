import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <div>Hello World</div>
    </Container>
  )
}

export default withAuthRedirect(Home);
