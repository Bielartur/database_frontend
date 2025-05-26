import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  background-color: #ffbb33;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  text-align: justify;
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

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const IMG = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 4px;
`;

export { Container, Label, Text, Title, TitleContainer, IMG };
