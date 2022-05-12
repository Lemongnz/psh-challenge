import { Container, Winners, Devs } from "./styles";
import { GiTrophy } from "react-icons/gi";

export default function TopDevs() {
  const arrayNames = [
    "Hola",
    "antonio",
    "roberto",
    "jasmin",
    "violeta",
    "pedrito",
    "clavo",
    "antonio",
    "gola",
    "antonio",
    "gola",
    "antonio",
    "gola",
    "antonio",
    "gola",
    "antonio",
  ];

  return (
    <Container>
      <h1>Top Devs</h1>
      <Winners>
        {arrayNames.map((name, index) => (
          <Devs key={index}>
            {(index === 0 || index === 1 || index === 2) && <GiTrophy />}
            <p>{name}</p>
          </Devs>
        ))}
      </Winners>
    </Container>
  );
}
