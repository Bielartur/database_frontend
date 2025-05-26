import { useNavigate } from "react-router-dom";
import { Container, Label, Text, Title, TitleContainer, IMG } from "./styled";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

export function GameCard({
  id,
  titulo,
  img,
  descricao,
  categoria,
  ano,
  preco,
  duracao,
  entity,
}) {
  const navigate = useNavigate();
  async function deleteGame() {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/zodb/jogos/${id}`
      );
      if (response.status === 200) {
        toast.success("Jogo deletado com sucesso!");
      } else {
        toast.error("Ocorreu algum erro, tente novamente!");
      }
    } catch (err) {
      console.log("Ocorreu um erro: ", err);
    }
  }

  return (
    <Container>
      <TitleContainer>
        <X
          onClick={deleteGame}
          style={{ paddingTop: 10, cursor: "pointer" }}
          size={32}
          color="black"
        />
      </TitleContainer>

      <IMG src={img} alt={titulo} />

      <Label>ID:</Label>
      <Text>{id}</Text>

      <Label>Titulo:</Label>
      <Text>{titulo}</Text>

      <Label>Descrição:</Label>
      <Text style={{ height: 145 }}>{descricao}</Text>

      <Label>Ano:</Label>
      <Text>{ano}</Text>

      <Label>Categoria:</Label>
      <Text>{categoria}</Text>

      <Label>Duração (min):</Label>
      <Text>{duracao}</Text>

      <Label>Preço:</Label>
      <Text>{preco}</Text>

      <button
        onClick={() => navigate("/home/gameedit", { state: { jogo: entity } })}
      >
        Editar
      </button>
    </Container>
  );
}
