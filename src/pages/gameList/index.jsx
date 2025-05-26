import { Container, Label, Text, Title, TitleContainer } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../../components/layout/styled";
import { GameCard } from "../../components/GameCard";

export function GameList() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  //Função para pegar a lista de Games do back
  async function renderGames() {
    try {
      console.log("Buscando a lista de games...");
      const response = await axios.get("http://127.0.0.1:8000/zodb/jogos/");
      setGames(response.data);
    } catch (err) {
      console.log("Ocorreu um erro: ", err);
    }
  }

  // useEffect para chamar a busca no banco toda vez que a página for aberta
  useEffect(() => {
    renderGames();
  }, []);

  return (
    <Container>
      {games.length === 0 ? (
        <Title>Não foi encontrado nenhum jogo</Title>
      ) : (
        games.map((jogo) => (
          <GameCard
            duracao={jogo.duracao}
            key={jogo.id}
            id={jogo.id}
            titulo={jogo.titulo}
            descricao={jogo.descricao}
            ano={jogo.ano}
            categoria={jogo.categoria}
            preco={jogo.preco}
            img={jogo.url_imagem}
            entity={jogo}
          />
        ))
      )}
    </Container>
  );
}
