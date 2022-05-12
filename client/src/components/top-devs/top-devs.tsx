import { Container, Winners, Devs } from "./styles";
import { GiTrophy } from "react-icons/gi";
import { getTopUsers } from "../../services/top-users.service";
import { useEffect, useState } from "react";

export default function TopDevs() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    getTopUsers().then((devs) => setDevs(devs));
  }, []);

  return (
    <Container>
      <h1>Top Devs</h1>
      <Winners>
        {devs.map((dev, index) => (
          <Devs key={dev.id}>
            {(index === 0 || index === 1 || index === 2) && <GiTrophy />}
            {index > 2 && <p># {index + 1}</p>}
            <p>{dev.name}</p>
            <p>{dev.points}</p>
          </Devs>
        ))}
      </Winners>
    </Container>
  );
}
