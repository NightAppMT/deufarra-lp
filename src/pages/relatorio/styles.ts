import { Col } from "react-bootstrap";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #140324;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Table = styled.div`
  width: 80%;
  height: 70%;
  background-color: #fff;
  border-radius: 10px;
  overflow: scroll;
`;
export const ItemDiv = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
`;

export const Download1 = styled.button`
  width: 200px;
  height: 50px;
  background-color: green;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  align-self: center;
  margin-right: 10px;
`;
export const Download2 = styled.button`
  width: 200px;
  height: 50px;
  background-color: pink;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  align-self: center;
  margin-right: 10px;
`;
export const Download3 = styled.button`
  width: 200px;
  height: 50px;
  background-color: blue;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  align-self: center;
`;
export const DownloadButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: yellow;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  color: black;
  align-self: center;
  margin-right: 10px;
`;
export const ButtonDiv = styled.div``;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 20px;
  padding: 10px;
  color: black;
  background-color: white;
`;
export const Text = styled.textarea`
  white-space: nowrap;
  resize: none;
  text-overflow: ellipsis;
  text-align: center;
`;

export const Item = styled.div`
  width: 11.11%;
  height: 50px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Adicionando estilos para permitir seleção e arraste */
  overflow: hidden;
`;
export const H1 = styled.h3`
  color: white;
`;
export const NumeroCadastro = styled.div`
  width: 200px;
  height: 30px;
  color: white;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: center;
  border: none;
  border-radius: 10px;
`;
export const Cadastros = styled.div`
  width: 80%;
  height: 50px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;
