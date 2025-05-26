import { useLocation } from "react-router-dom";
import {
  Container,
  GameCard,
  Input,
  Label,
  Text,
  Title,
  TitleContainer,
  Form,
  TextArea,
} from "./styled";
import { toast, ToastContainer } from "react-toastify";
import { ButtonContainer, Button } from "../gameForm/styled";
import { useState } from "react";
import axios from "axios";

export function GameEdit() {
  const location = useLocation();
  const jogo = location.state.jogo;

  const [formData, setFormData] = useState({
    titulo: jogo.titulo,
    descricao: jogo.descricao,
    ano: jogo.ano,
    categoria: jogo.categoria,
    duracao: jogo.duracao,
    preco: jogo.preco,
    url_imagem: jogo.url_imagem,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit() {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/zodb/jogos/${jogo.id}`,
        {
          titulo: formData.titulo,
          descricao: formData.descricao,
          ano: formData.ano,
          categoria: formData.categoria,
          duracao: formData.duracao,
          preco: formData.preco,
          url_imagem: formData.url_imagem,
        }
      );
      if (response.status === 200) {
        toast.success("Jogo foi editado com sucesso! ");
      } else {
        toast.error("Ocorreu um erro, tente novamente!");
      }
    } catch (err) {
      console.log("Ocorreu um erro: ", err);
    }
  }

  console.log(formData);

  return (
    <Container>
      <Form onSubmit={() => console.log("oi")}>
        <TitleContainer>
          <Title>Editar Game</Title>
        </TitleContainer>

        <Label>Título:</Label>
        <Input
          name="titulo"
          placeholder="Título"
          value={formData.titulo}
          onChange={handleChange}
        />

        <Label>Imagem (URL):</Label>
        <Input
          name="url_imagem"
          placeholder="Imagem"
          value={formData.url_imagem}
          onChange={handleChange}
        />

        <Label>Descrição:</Label>
        <TextArea
          name="descricao"
          rows={10}
          cols={50}
          placeholder="Descrição"
          value={formData.descricao}
          onChange={handleChange}
        />

        <Label>Ano de Lançamento:</Label>
        <Input
          name="ano"
          placeholder="Ano de Lançamento"
          value={formData.ano}
          onChange={handleChange}
        />

        <Label>Categoria:</Label>
        <Input
          name="categoria"
          placeholder="Categoria"
          value={formData.categoria}
          onChange={handleChange}
        />

        <Label>Duração (min):</Label>
        <Input
          name="duracao"
          placeholder="Duração (min)"
          value={formData.duracao}
          onChange={handleChange}
        />

        <Label>Preço:</Label>
        <Input
          name="preco"
          placeholder="Preço"
          value={formData.preco}
          onChange={handleChange}
        />

        <ButtonContainer>
          <Button type="submit">Criar Jogo</Button>
        </ButtonContainer>
      </Form>

      <ToastContainer position="top-center" autoClose={2000} />
    </Container>
  );
}
