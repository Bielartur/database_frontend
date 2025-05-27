import axios from "axios";
import {
  Form,
  Button,
  Input,
  Container,
  TitleContainer,
  Title,
  ButtonContainer,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
export function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleLogin() {
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Usuário criado com sucesso!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error("Não foi possível criar usuário!");
      }
    } catch (err) {
      console.log("Ocorreu um erro: ", err);
    }
  }

  console.log(formData);

  return (
    <Container>
      <Form>
        <TitleContainer>
          <Title>Registre-se</Title>
        </TitleContainer>
        <Input
          type="text"
          name="name"
          placeholder="Usuário"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <ButtonContainer>
          <Button type="button" onClick={handleLogin}>
            Entrar
          </Button>
        </ButtonContainer>
      </Form>
      <ToastContainer position="top-center" autoClose={2000} />
    </Container>
  );
}
