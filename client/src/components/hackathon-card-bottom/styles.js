import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerDetails = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  .dev {
    border-top: 1px solid #f4f4f4;
    width: 60%;
    padding: 5px;
  }

  .dev:last-child {
    border-bottom: 1px solid #f4f4f4;
  }
`;

export const CustomTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  color: #745123;
  max-width: 700px;

  th {
    border-bottom: 1px solid;
  }
  td {
    border-left: 1px solid;
  }
  td:first-child {
    border-left: 0;
  }
`;

export const HackathonCardDetails = styled(motion.div)`
  background-color: #fff;
  width: 100vw;
  position: fixed;
  z-index: 10;
  height: 60vh;
  bottom: -60vh;
  left: 0;
  border-radius: 0;
  visibility: hidden;

  &[data-isopen="true"] {
    bottom: 0;
    height: calc(60vh + 30px);
    border-radius: 30px 30px 0 0;
    visibility: visible;
    overflow: scroll;
  }
`;
