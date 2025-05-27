import axios from "axios";
import {
  Form,
  Button,
  Input,
  Container,
  ButtonContainer,
  Title,
  TitleContainer,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function Login() {
  const navigate = useNavigate();
  async function handleLogin() {
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/signin", {
        email: formData.email,
        password: formData.password,
      });
      const { access } = response.data;
      localStorage.setItem("token", access);
      navigate("/home");
    } catch (err) {
      console.log("Ocorreu um erro: ", err);
    }
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Form>
        <TitleContainer>
          <Title>Login</Title>
        </TitleContainer>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={handleChange}
          required
        />
        <ButtonContainer>
          <Button type="button" onClick={handleLogin}>
            Entrar
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
}
