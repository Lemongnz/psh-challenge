import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

export const Container = styled.div`
  background-color: #a57638;
  background-image: linear-gradient(
    248deg,
    #a57638 0%,
    #b98b29 33%,
    #b98b29 77%,
    #a57638 100%
  );

  border-radius: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;

  &[data-isopen="true"] {
    height: 40%;
    border-radius: 0;
    padding-bottom: 30px;
  }
`;

export const HackathonTextContainer = styled.div`
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 15px;

  span {
    border: 1px solid #fff;
    padding: 4px;
    border-radius: 20px;
    color: #fff;
  }
`;

export const HackathonNameContainer = styled.div`
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
  /* height: 20%; */

  &[data-isopen="true"] {
    font-size: 200%;
  }
`;

export const BackRowButton = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 30px;
  width: 30px;
  background: #0000000f;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 20px;
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
  ${(props) => {
    props.dataisopen === true &&
      css`
        bottom: 0;
        height: calc(60vh + 30px);
        border-radius: 30px 30px 0 0;
        visibility: visible;
        overflow: scroll;
      `;
  }}
`;

export const HackathonCardPrincipal = styled(motion.div)`
  ${(props) => {
    props.dataisopen === true &&
      css`
        width: 100vw;
        position: fixed;
        z-index: 10;
        height: 100vh;
        top: 0;
        left: 0;
        border-radius: 0;
      `;
  }}
`;

export const HackathonInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;

  p {
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 160px;
  }
`;

export const CalendarIcon = styled(AiOutlineCalendar)`
  color: #1717c5;
  margin-right: 7px;
  font-size: 25px;
`;

export const LocationIcon = styled(HiLocationMarker)`
  color: #be0d0d;
  margin-right: 7px;
  font-size: 25px;
`;

export const MotionCard = styled(motion.div)`
  &[data-isopen="true"] {
    width: 100vw;
    position: fixed;
    z-index: 10;
    height: 100vh;
    top: 0;
    left: 0;
    border-radius: 0;
  }
`;
