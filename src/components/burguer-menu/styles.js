import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: ${(props) => (props.isOpen ? "100%" : "0")};
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #fff;
  transition: max-height 0.5s ease-out;
  z-index: 2;
`;

export const CustomLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
`;
