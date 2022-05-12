import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuLayerOne = styled.div`
  position: absolute;
  background-color: #f5e9c3;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-radius: 0 0 0 100%;
`;

export const MenuLayerTwo = styled.div`
  position: absolute;
  background-color: #ffffff;
  top: 0;
  border-radius: 0 0 0 100%;
  width: 80%;
  right: 0;
  height: 80%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* max-height: ${(props) => (props.isOpen ? "100%" : "0")}; */
  max-width: 600px;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #b9a35f;
  transition: all 0.5s ease-out;
  z-index: 2;
  clip-path: ${(props) =>
    props.isOpen
      ? "ellipse(150% 150% at 100% 0)"
      : "ellipse(65px 65px at 100% 0)"};

  @media (min-width: 600px) {
    border-radius: 0 0 0 50%;
  }
`;

export const ContainerCustomLink = styled.div`
  margin: 10px 60px;
  border: 1px #c1a143 solid;
  border-radius: 50px;
  padding: 10px 0;
  z-index: 3;
  max-width: 250px;
  min-width: 150px;
`;

export const CustomLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
  max-width: 250px;

  min-width: 150px;
`;
