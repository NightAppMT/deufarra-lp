import { styled } from "styled-components";
import Theme from "@/styles/themes";
import { Image } from "react-bootstrap";
import px2vw from "@/utils/size";

import'@fontsource/league-spartan';


interface ContainerProps {
  type: boolean;
}
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
}
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #140324;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Content = styled.div`
  
  width: 360px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-self: center;
  z-index: 1;
`;

export const BigTitle = styled.label<Props>`
  font-size: 70px;
  font-family: bold;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  @media (max-width: 768px) {
    font-size: ${px2vw(70, 768)};
  }
  @media (max-width: 1024px) {
    font-size: ${px2vw(70, 1024)};
  }
`;
export const Title = styled.label<Props>`
  font-size: 18px;
  font-family: 'League spartan';
  font-weight : bold;

  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '6px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};


`;
export const SubTitle = styled.li<Props>`
  font-size: 16px;
  font-family: 'league spartan';
  font-weight : bold;
  background-color: transparent;
  color: ${(props) => (props.color ? props.color : "#fff")};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '6px')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};  

`;
export const Logo = styled(Image) `
  width: 40vw;
  height: 20vh;
  margin-top: 10px;
  background-color: transparent;
`;
export const FormLogo = styled.div<Props>`
  width: 100%;
  height: 20vh;
  justify-content: center;
  background-color: transparent;
  display: flex;
  flex-direction: row;

`;

export const Button = styled.button`
  width: 250px;
  height: 60px;
  background-color: #D356F3;
  border-radius: 20px;
  color:#fff;
  font-size: 18px;
  font-family: 'league spartan';
  align-self: center;
  margin-top: 30px;
  
`;
export const SquareStyle = styled.div`
  height: 10px;
  width: 50px;
  background-color: #C759EC;
  margin-bottom: 10px;
  margin-left: 6px;
`;
export const BackGround = styled(Image)`
  width: 370px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #140324;
  position: absolute;
  z-index: -1;
  object-fit: cover;
`;
