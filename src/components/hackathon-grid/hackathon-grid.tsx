import { useState } from "react";
import HackathonCard from "../hackathon-card/hackathon-card";
import { Container } from "./styles";
import mock from "../../../hackatonMock.json";

function HackathonGrid() {
  const [hackathons, setHackathons] = useState(mock.hackathons);

  return (
    <Container>
      {hackathons?.map((hackathon: any) => (
        <HackathonCard key={hackathon.id} hackathon={hackathon}></HackathonCard>
      ))}
    </Container>
  );
}

export default HackathonGrid;
