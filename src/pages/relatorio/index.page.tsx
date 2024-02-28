import { firebaseApp } from "@/utils/firebase-config";
import {
  ButtonDiv,
  Cadastros,
  Container,
  Download1,
  Download2,
  Download3,
  DownloadButton,
  H1,
  Input,
  Item,
  ItemDiv,
  NumeroCadastro,
  Table,
  Text,
} from "./styles";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import fileDownload from "js-file-download";

export default function Relatorio() {
  const [senha, setSenha] = useState("");
  const [totalCadastros, setTotalCadastros] = useState(0);
  const [totalTimes, setTotalTimes] = useState(0);
  const [totalFeminino, setTotalFeminino] = useState(0);
  const [totalMasculino, setTotalMasculino] = useState(0);
  const fetchUserData = async () => {
    const userCollectionRef = collection(db, "Dados");
    const data = await getDocs(userCollectionRef);
    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return users;
  };
  const db = getFirestore(firebaseApp);
  const [userData, setUserData] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const users = await fetchUserData();
      setUserData(users);
      setTotalCadastros(users.length);
      setTotalTimes(users.filter((user: any) => user.timeDeFut).length);
      setTotalFeminino(
        users.filter((user: any) => user.duplaFeminina1 && user.duplaFeminina2)
          .length
      );
      setTotalMasculino(
        users.filter(
          (user: any) => user.duplaMasculina1 && user.duplaMasculina2
        ).length
      );
    };
    getData();
  }, []);
  const handleDownloadAll = () => {
    let content = userData
      .map(
        (user: any) =>
          `Nome: ${user.name}, Email: ${user.email}, Atletica: ${user.atletica}, Fem1: ${user.duplaFeminina1}, Fem2: ${user.duplaFeminina2}, Masc1: ${user.duplaMasculina1}, Masc2: ${user.duplaMasculina2}, Time: ${user.timeDeFut}`
      )
      .join("\n\n");

    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "relatorio Completo.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  const handleDownloadMasc = () => {
    let content = userData
      .filter((user: any) => user.duplaMasculina1 && user.duplaMasculina2)
      .map(
        (user: any) =>
          `Nome: ${user.name}, Email: ${user.email}, Atletica: ${user.atletica}, Jogador1: ${user.duplaMasculina1}, Jogador2: ${user.duplaMasculina2}`
      )
      .join("\n\n");

    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "relatorioMasculino.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  const handleDownloadFem = () => {
    let content = userData
      .filter((user: any) => user.duplaFeminina1 && user.duplaFeminina2)
      .map(
        (user: any) =>
          `Nome: ${user.name}, Email: ${user.email}, Atletica: ${user.atletica}, Jogadora1: ${user.duplaFeminina1}, Jogadora2: ${user.duplaFeminina2}`
      )
      .join("\n\n");

    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "relatorioFeminino.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  const handleDownloadTime = () => {
    let content = userData
      .filter((user: any) => user.timeDeFut)
      .map(
        (user: any) =>
          `Nome: ${user.name}, Email: ${user.email}, Atletica: ${user.atletica}, Time: ${user.timeDeFut}`
      )
      .join("\n\n");

    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "relatorioTime.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  return (
    <Container>
      {senha !== "e0102" ? (
        <Input
          placeholder="Digite a senha aqui"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      ) : (
        <>
          <H1>Numero de Cadastros</H1>
          <Cadastros>
            <NumeroCadastro
              style={{ backgroundColor: "yellow", color: "black" }}
            >
              Total: {totalCadastros}
            </NumeroCadastro>
            <NumeroCadastro style={{ backgroundColor: "green" }}>
              Times: {totalTimes}
            </NumeroCadastro>
            <NumeroCadastro style={{ backgroundColor: "pink" }}>
              Feminino: {totalFeminino}
            </NumeroCadastro>
            <NumeroCadastro style={{ backgroundColor: "blue" }}>
              Masculino: {totalMasculino}
            </NumeroCadastro>
          </Cadastros>
          <Table>
            <ItemDiv>
              <Item>Nome</Item>
              <Item>Email</Item>
              <Item>Telefone</Item>
              <Item>Atletica</Item>
              <Item>Fem1</Item>
              <Item>Fem2</Item>
              <Item>Masc1</Item>
              <Item>Masc2</Item>
              <Item>Time</Item>
            </ItemDiv>
            {userData.map((user: any, index: any) => (
              <ItemDiv key={index}>
                <Item>
                  <Text readOnly readOnly>
                    {user.name}
                  </Text>
                </Item>
                <Item>
                  <Text readOnly>{user.email}</Text>
                </Item>
                <Item>
                  <Text readOnly>{user.telefone}</Text>
                </Item>
                <Item>
                  <Text readOnly>{user.atletica}</Text>
                </Item>
                <Item>
                  <Text readOnly>{user.duplaFeminina1}</Text>
                </Item>
                <Item>
                  <Text readOnly>{user.duplaFeminina2}</Text>
                </Item>
                <Item>
                  <Text readOnly>{user.duplaMasculina1}</Text>
                </Item>
                <Item>
                  <Text readOnly>{user.duplaMasculina2}</Text>
                </Item>
                <Item>
                  <Text readOnly>{user.timeDeFut}</Text>
                </Item>
              </ItemDiv>
            ))}
          </Table>
          <ButtonDiv>
            <DownloadButton onClick={handleDownloadAll}>
              Baixar Tudo
            </DownloadButton>
            <Download1 onClick={handleDownloadTime}>
              Baixar Times de Fut
            </Download1>
            <Download2 onClick={handleDownloadFem}>
              Baixar Duplas Femininas
            </Download2>
            <Download3 onClick={handleDownloadMasc}>
              Baixar Duplas Masculinas
            </Download3>
          </ButtonDiv>
        </>
      )}
    </Container>
  );
}
