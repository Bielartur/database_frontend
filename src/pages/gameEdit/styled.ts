import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`;

const GameCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  background-color: #ffbb33;
  border-radius: 8px;
  padding: 10px;
`;

const Title = styled.text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Label = styled.text`
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
`;

const Text = styled.text`
  font-size: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  border: 1px solid #eaeaea;
  margin-bottom: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  border: 1px solid #eaeaea;
  margin-bottom: 4px;
`;

export {
  Container,
  GameCard,
  Label,
  Text,
  Title,
  TitleContainer,
  Input,
  Form,
  TextArea,
};
