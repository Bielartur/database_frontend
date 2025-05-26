import axios from "axios";
import {
  Button,
  ButtonContainer,
  Container,
  Form,
  Input,
  Label,
  Title,
  TitleContainer,
  Text,
} from "./styled";
import { X } from "lucide-react";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { GameCard } from "../../components/GameCard";

export function GameSearch() {
  const [id, setId] = useState("");
  const [game, setGame] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log("Buscando o jogo com ID:", id);
      const response = await axios.get(
        `http://127.0.0.1:8000/zodb/jogos/${id}`
      );
      setGame(response.data);
    } catch {}
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TitleContainer>
          <Title>Insira o ID do game para buscá-lo:</Title>
        </TitleContainer>
        <Label>ID:</Label>
        <Input
          name="id"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <ButtonContainer>
          <Button type="submit">Buscar Jogo</Button>
        </ButtonContainer>
      </Form>

      {game.id > 0 ? (
        <GameCard
          duracao={game.duracao}
          key={game.id}
          id={game.id}
          titulo={game.titulo}
          descricao={game.descricao}
          ano={game.ano}
          categoria={game.categoria}
          preco={game.preco}
          img={game.url_imagem}
          entity={game}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}
