import Theme from "@/styles/themes";
import { Container, Input, Registration, Title, Button, DropDownButton, DownIco, DropdownContainer, DropdownOption, Form, SubTitle, LiTitle } from "./styles";
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  firebaseAuth, firebaseApp} from "../../../utils/firebase-config";
import { getFirestore , addDoc , collection } from 'firebase/firestore'
import WhaitlistModal from "../Modal";
import ChangeBudgetStatusModal from "../Modal";

export default function RegistrationCard() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const options = ['Advogado Pleno', 'Advogado Estagiário', 'Estudante de direito'];
    const password = 'password';
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [qualificação, setQualificação] = useState("");
    const db = getFirestore(firebaseApp)
    const userCollectionRef = collection(db,'Dados')
    const [ toolsModalShow, setToolsModalShow ]= useState(false);
    const [isFieldsValid, setIsFieldsValid] = useState(true);

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setQualificação(option);
        setShowDropdown(false);
    };
    const handleSend = async () => {
        console.log("Antes de chamar handleSend");
        try {
            await createUserWithEmailAndPassword(firebaseAuth, email, password);
            console.log("Login efetuado com sucesso!");
            const data = await addDoc(userCollectionRef,{
                name,
                email,
                whatsapp,
                qualificação,
            });
        } catch (error: any) {
            console.log(error.code);
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
        (whatsapp.replace(/\D/g, "").length === 10 || whatsapp.replace(/\D/g, "").length === 11) &&
        selectedOption !== null;
        setIsFieldsValid(isValid); // Atualizamos o estado com base na validação dos campos
        return isValid;
      };
      const handleButtonClick = () => {
        if (isFormValid()) {
            handleSend();
            setToolsModalShow(true);
        }
    };
    
    return (
        <Container id="registrationCard">
            <Registration>
                 <ChangeBudgetStatusModal
                    open={toolsModalShow}
                    close={() => setToolsModalShow(false)}
                /> 
                <SubTitle >Está pronto para Revolucionar seu Escritório?</SubTitle>
                <Title size={52} marginTop="0px" color={Theme.color.primary_100} style={{fontWeight: 'bold'}}>Entre na Lista de Espera Agora!</Title>
                <SubTitle marginTop="0px" style={{fontWeight: 'bold'}}>Entrando na Lista de Espera você concorre a Diversos Benefícios 🤝🏻</SubTitle>
                <Input onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                <Input onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"/>
                <Input  value={maskPhone(whatsapp)} onChange={(e) => setWhatsapp(e.target.value)} placeholder="WhatsApp" />
                <DropDownButton onClick={() => setShowDropdown(!showDropdown)} open={showDropdown}>
                    <Form>
                    {selectedOption || 'Que tipo de Advogado voce é ?'}
                    </Form>
                    <DownIco src={'/downArrow.svg'} />
                </DropDownButton>
                {showDropdown && (
                    <DropdownContainer >
                        {options.map((option) => (
                            <DropdownOption key={option} onClick={() => handleOptionSelect(option)}>
                               <LiTitle>{option}</LiTitle>
                            </DropdownOption>
                        ))}
                    </DropdownContainer>
                )}
                <SubTitle size={5} color="red">{isFieldsValid ? "" : "*Preencha os campos acima Corretamente"}</SubTitle>
                {/* <Button onClick={handleSend}> */}
                <Button  onClick={handleButtonClick}>
          
                    Entrar Agora
                </Button>
            </Registration>
        </Container>
    )
}
