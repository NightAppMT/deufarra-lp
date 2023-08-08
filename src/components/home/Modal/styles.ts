import Theme from "@/styles/themes";
import { Image, Modal, ModalBody } from "react-bootstrap";
import { styled } from "styled-components";

interface Props {
  marginLeft?: string | number;
  marginTop?: string | number;
  size?:string | number;
  width?:string | number;
  color?: string;
}

export const Container = styled(Modal)`
  display: flex;
  justify-content: center;
  align-self: center;
  background-color: transparent;  
`;

export const Content = styled(ModalBody)`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: transparent;
  align-self: center;
`;
export const FormImages = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  @media (max-width: 997px) {
    flex-direction: column;
    
  }
`; 
export const LogoImg = styled(Image)`
height: 65px;
width: 65px;
background-color: transparent;

`;
export const Title = styled.label<Props>`

color: ${(props) => (props.color ? props.color : "#000")};
font-size: ${(props) => (props.size ? props.size : 14)}px;
font-family: BOLD;
font-weight: bold;
margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
background-color: transparent;
`;
export const Observation = styled.label<Props>`
color: ${(props) => (props.color ? props.color : "#000")};
font-size: 10px;
font-family: BOLD;
background-color: transparent;

`;
export const FormHeader= styled.div`
  display: flex;
  width:100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FinishButton = styled.button`
margin-top: 10px;
align-self: center;
background-color: #00FF01;
width: 260px;
height: 55px;
border-radius: 15px;
color: #fff ;
font-size: 20px ;
font-family: bold;
font-weight: bold;
`
export const FormText = styled.div`
  margin-left:5px;
  display:flex;
  flex-direction: column;
  background-color: transparent;
`
export const Input = styled.input`
height: 50px;
width: 90%;
background-color: #d799ed;
border-radius: 10px;
padding-left: 3%;
border: none;
`;
export const InputLarge = styled.input`
height: 70px;
width: 95%;
background-color: #d799ed;
border-radius: 10px;
padding-left: 3%;
border: none;
`;
export const Form =styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: transparent;
  margin-top: 10px;
  justify-content: center;
`;
export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-top: 10px;
`;
export const SquareStyle = styled.div`
  height: 10px;
  width: 50px;
  background-color: #C759EC;
  margin-bottom: 10px;
`;
export const FormTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
`;
