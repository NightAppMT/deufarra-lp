import Theme from "@/styles/themes";
import { styled } from "styled-components";
import { Image } from "react-bootstrap";
import px2vw from "@/utils/size";

interface Props {
    color?: string ;
    marginTop?: string ;
    marginLeft?: string ;
    marginBottom?: string ;
    size?: string | number;
    flexDirection?: string;
    width?: string;
    height?: string;
    justifyContent?: string;
    open?: boolean;
  }

export const Container = styled.div`
    display: flex;
    background-color: ${Theme.color.primary_80};
    border: none;
`;
export const Registration = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Theme.color.secondary_100};
    justify-content: center;
    align-items: center;
    width: 100vw;
    border-radius: 30px;
    margin-bottom: 100px;
    @media (max-width: 768px) {
    margin-bottom: ${px2vw(100, 768)};

  }

`;
export const Input = styled.input`
  width: 90%;
  height: 50px;
  background-color: white;
  color: ${Theme.color.primary_100};
  font-size: 20px;
  font-family: bold;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  &::placeholder {
      color: ${Theme.color.primary_100};
    }

    @media (min-width: 768px) {
      width: 70%;;
  }
`;
export const Button = styled.button`
  width: 250px;
  height: 60px;
  background-color: ${Theme.color.primary_100};
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 50px;
  font-size: 18px;
  font-family: bold;
  color: #fff;
  

`;
export const Title = styled.label<Props>`
  font-size: ${(props) => (props.size ? props.size : 52)}px;
  font-family: bold;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '0px')};
  justify-content: center;
  text-align: center;
  @media (max-width: 600px) {
    font-size: ${px2vw(42, 500)};
  }

`;
export const SubTitle = styled.label<Props>`
  font-size: 20px;
  font-family: bold;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '40px')};
  @media (max-width: 768px) {
    font-size: ${px2vw(20, 768)};
    margin-top: ${px2vw(40, 768)};
  }

`;
export const Form = styled.div<Props>`
 display: flex;
 width: 98%;
 background-color: transparent;
 flex-direction: row;
 font-size: 18px;
 font-family: bold;
 color: #000;


`;
export const DropDownButton = styled.button<Props>`
  display: flex;
  flex-direction: row;
  align-items:center;
  margin-top: 20px;
  width: 90%;
  height: 50px;
  color: #fff;
  border: none;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: ${(props) => (props.open ? 0 : 10)}px;
  border-bottom-left-radius: ${(props) => (props.open ? 0 : 10)}px;
  border: 2px solid black;
  padding: 10px; 
  @media (min-width: 768px) {
      width: 70%;;
  }
  

`;
export const DropdownContainer = styled.div`
    width: 90%;
    height: 50px; 
    background-color: transparent ;
    margin-bottom: 100px;
    @media (min-width: 768px) {
      width: 70%;;
  }

`;
export const DropdownOption = styled.div`
  padding: 12px;
  border: 1px solid black; 
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-family: bold;
  color: #000;
`;
export const LiTitle = styled.li`
  font-size: 18px;
  font-family: bold;
  color: #000;
  background-color: transparent;
`
export const DownIco = styled(Image)`
    width: 15px;
    height: 15px;
    background-color: transparent;
`