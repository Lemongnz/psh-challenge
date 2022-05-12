import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
  }
`;

export const Winners = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  gap: 5px;
  max-width: 600px;
`;

export const Devs = styled.div`
  flex-basis: 100%;
  order: 3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  font-size: 20px;

  p {
    margin: 0 10px;
  }

  &:first-child {
    order: 2;
    flex-basis: calc(33.33% - 5px);
    min-height: 120px;
    justify-content: flex-start;
    font-size: 32px;
    flex-direction: column;
    p {
      margin: 0;
    }

    svg {
      color: #dab14c;
      border-bottom: 1px solid;
    }
  }

  &:nth-child(2) {
    order: 1;
    flex-basis: calc(33.33% - 5px);
    min-height: 120px;
    font-size: 29px;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    p {
      margin: 0;
    }

    svg {
      color: #bfb9b9;
      border-bottom: 1px solid;
    }
  }

  &:nth-child(3) {
    flex-basis: calc(33.33% - 5px);
    min-height: 120px;
    font-size: 25px;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0;
    p {
      margin: 0;
    }

    svg {
      color: #7c4f16;
      border-bottom: 1px solid;
    }
  }
`;
