import Theme from "@/styles/themes";
import {
  BackGround,
  BigTitle,
  Button,
  Container,
  Content,
  FormLogo,
  Logo,
  NewLogo,
  SquareStyle,
  SubTitle,
  Title,
} from "./styles";
import Icon from "../../../public/favicon.ico";
import RegistrationCard from "@/components/home/registrationCard";
import { useRef, useState } from "react";

import Ico2 from "../../../public/2.svg";
import Ico3 from "../../../public/3.svg";
import Ico4 from "../../../public/4.svg";
import ChangeBudgetStatusModal from "@/components/home/Modal";

export default function Home() {
  const registrationCardRef = useRef(null);
  const [modalShow, setModalShow] = useState(false);
  const handleButtonClick = () => {
    setModalShow(true);
  };
  return (
    <Container>
      <Content>
        {/* <BackGround src={"/bg1.jpeg"} width={1000} height={2000}></BackGround> */}
        <ChangeBudgetStatusModal
          open={modalShow}
          close={() => setModalShow(false)}
        />
        <NewLogo src={"/logoNight.svg"} />
        {/* <FormLogo>
          <Logo src={"/logoNight.svg"} /> <Logo src={"/newLogo.png"} />
        </FormLogo>
        <Title marginTop="30px">
          SE INSCREVA AGORA NO CAMPEONATO DEU FARRA UNIVERSITÁRIA
        </Title>
        <SquareStyle />
        <SubTitle marginTop="10px">
          Campeonato de futebol 7 masculino <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(min. 7 inscritos e max. 11)
        </SubTitle>
        <SubTitle>
          Campeonato de vôlei de areia masculino
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; (1 dupla)
        </SubTitle>
        <SubTitle>
          Campeonato de vôlei de areia Feminino
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(1 dupla)
        </SubTitle>
        <Title marginTop="20px">PREMIAÇÃO</Title>
        <SquareStyle />
        <SubTitle marginTop="10px">1º lugar R$ 2.500,00</SubTitle>
        <SubTitle>2º lugar R$1.500,00</SubTitle>
        <SubTitle>3º lugar R$800,00</SubTitle> */}
        <Button onClick={handleButtonClick}>Me Cadastrar</Button>
      </Content>
    </Container>
  );
}
