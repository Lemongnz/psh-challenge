import styled from "styled-components";

export const Container = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(auto-fill,90px);
  gap: 5px;
  padding: 10px;
  min-height: calc(100vh - 60px);
  position: relative;
  overflow: scroll; */

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 90px);
  gap: 5px;
  padding: 10px;
  max-height: calc(100vh - 60px);
  position: relative;
  grid-auto-rows: 90px;
  overflow: scroll;
  z-index: 1;

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
