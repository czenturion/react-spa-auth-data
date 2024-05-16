import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";

export default function Home() {
  const navigate = useNavigate()

  return (
    <Container maxWidth="md">
      <div>Hello World</div>
      <Button onClick={() => navigate('signin')} variant="outlined">Outlined</Button>
    </Container>
  )
}