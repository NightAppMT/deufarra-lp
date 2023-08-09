
import { useRef, useState } from "react";
import {  Container, Content, FinishButton, Form, FormHeader, FormImages , FormInput, FormTextStyle, Input,  InputLarge,  LogoImg,  Observation,  SquareStyle,  Title } from "./styles";
import {  firebaseAuth, firebaseApp} from "../../../utils/firebase-config";
import { getFirestore , addDoc , collection } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from "firebase/auth";
import Theme from "@/styles/themes";


interface ModalProps {
  open: boolean;
  close: () => void;
}

export default function ChangeBudgetStatusModal({
  open,
  close,
}: ModalProps) {
  const db = getFirestore(firebaseApp)
  const userCollectionRef = collection(db,'Dados')
  const [isFieldsValid, setIsFieldsValid] = useState(true);
  const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [atletica, setAtletica] = useState("");
    const [telefone, setTelefone] = useState("");
    const [timeDeFut, setTimeDeFut] = useState("");
    const [duplaMasculina1, setDuplaMasculina1] = useState("");
    const [duplaMasculina2, setDuplaMasculina2] = useState("");
    const [duplaFeminina1, setDuplaFeminina1] = useState("");
    const [duplaFeminina2, setDuplaFeminina2] = useState("");
    const password = 'password';
    
  const handleSend = async () => {
    console.log("Antes de chamar handleSend");
    try {
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
        console.log("Login efetuado com sucesso!");
        const data = await addDoc(userCollectionRef,{
            name,
            email,
            telefone,
            atletica,
            timeDeFut,
            duplaMasculina1,
            duplaMasculina2,
            duplaFeminina1,
            // duplaFeminina2,
        });
        window.alert("Você realizou sua inscrição!");
        close(); // Fechar o modal após a inscrição bem-sucedida.
      } catch (error: any) {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          window.alert("O e-mail inserido já está em uso ou é inválido.");
        } else {
          window.alert("O correu um erro desconhecido, tente novamente mais tarde.");
          console.log("Erro desconhecido:", error);
          close();
        }
      }
    };
    const maskPhone = (value: string) => {
      if (!value) {
        return "";
      }
      value = value.replace(/\D/g, "");
      // (11)1111-1111
      value = value.replace(/^(\d{2})(\d)/g, "($1)$2");
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");
      return value;
    }
const isFormValid = () => {
  const isValid = 
  name.trim() !== "" && 
  email.trim() !== "" && 
  atletica.trim() !== "" && 
  (telefone.replace(/\D/g, "").length === 10 || telefone.replace(/\D/g, "").length === 11); 
  setIsFieldsValid(isValid); // Atualizamos o estado com base na validação dos campos
  return isValid;
};
const handleButtonClick = () => {
  if (isFormValid()) {
    const dados = [
      ["Seu Nome", name],
      ["Sua Atlética", atletica],
      ["Seu Telefone", telefone],
      ["Seu Email", email],
      ["Seu Time De Futebol", timeDeFut],
      ["Dupla 1 (Masculino)", duplaMasculina1],
      ["Dupla 2 (Masculino)", duplaMasculina2],
      ["Dupla 1 (Feminino)", duplaFeminina1],
      // ["Dupla 2 (Feminino)", duplaFeminina2],
    ];

    const confirmationMessage = dados
      .map(([campo, valor]) => `${campo}: ${valor}`)
      .join("\n");

    const userConfirmed = window.confirm(`Os dados abaixo estão certos?\n\n${confirmationMessage}`);

    if (userConfirmed) {
       handleSend();      
    }
  }
};
  return (
    <Container show={open} onHide={close} size='sm' >
      <Content>
        <FormHeader>
        <FormTextStyle>
        <Title>INSCRIÇÃO AQUI:</Title>
        <SquareStyle/>
        </FormTextStyle>
        <LogoImg src={'/logoNightImg.svg'}/>
        </FormHeader>
        <Form>
        <FormInput>
        <Title>*Seu Nome:</Title>
        <Input onChange={(e) => setName(e.target.value)}/>
        </FormInput>
        <FormInput>
        <Title>*Sua Atlética:</Title>
        <Input onChange={(e) => setAtletica(e.target.value)}/>
        </FormInput>
        </Form>
        <Form >
        <FormInput>
        <Title>*Seu Telefone:</Title>
        <Input value={maskPhone(telefone)}onChange={(e) => setTelefone(e.target.value)}/>
        </FormInput>
        <FormInput>
        <Title>*Seu Email:</Title>
        <Input onChange={(e) => setEmail(e.target.value)}/>
        </FormInput>
        </Form>
        <FormInput >
        <Title>Seu Time De Futbol: <Observation>Insira Todos os Nomes separando por virgulas (7 a 11 participantes)</Observation></Title>
        <InputLarge onChange={(e) => setTimeDeFut(e.target.value)}/>
        </FormInput>
        <Form>
        <FormInput>
        <Title>Dupla 1 (Masculino)</Title>
        <Input onChange={(e) => setDuplaMasculina1(e.target.value)}/>
        </FormInput>
        <FormInput>
        <Title>Dupla 2 (Masculino)</Title>
        <Input onChange={(e) => setDuplaMasculina2(e.target.value)}/>
        </FormInput>
        </Form>
        <Observation >inserir os nomes das duplas aqui separando por virgulas, somente se for participar da modalidade vólei de areia masculina.</Observation>
        <Form>
        <FormInput>
        <Title>Dupla (Feminino)</Title>
        <Input onChange={(e) => setDuplaFeminina1(e.target.value)}/>
        </FormInput>
        {/* <FormInput>
        <Title>Dupla 2 (Feminino)</Title>
        <Input onChange={(e) => setDuplaFeminina2(e.target.value)}/>
        </FormInput> */}
        </Form>
        <Observation >inserir os nomes das duplas aqui separando por virgulas , somente se for participar da modalidade vólei de areia feminina.</Observation>
        <Title size={10} color="red" marginTop='10px'>{isFieldsValid ? "" : "Preencha os campos que tiverem * corretamente"}</Title>
            <FinishButton onClick={handleButtonClick}> Me Cadastrar</FinishButton>
            

      </Content>
    </Container>
  );
}
