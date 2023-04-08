import { Container, Input, InputContainer, Label, Title } from "./Login.styles";
import { LoginButton } from "../Navbar/Navbar.styles";

const Login = () => {
  return (
    <Container>
      <Title>Sign In to see your comics!</Title>
      <InputContainer>
        <Label htmlFor="email">E-mail</Label>
        <Input type="email" placeholder="Enter your e-mail" id="email" />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          id="password"
        />
      </InputContainer>
      <LoginButton>Login</LoginButton>
    </Container>
  );
};

export default Login;
