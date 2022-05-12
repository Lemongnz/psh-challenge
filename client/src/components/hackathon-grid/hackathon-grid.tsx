import { useEffect, useState } from "react";
import HackathonCard from "../hackathon-card/hackathon-card";
import { Container } from "./styles";
import { getHackathons } from "../../services/hackathon.service";

function HackathonGrid() {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    getHackathons().then((hackathon) => setHackathons(hackathon));
  }, []);

  return (
    <Container>
      {hackathons.map((hackathon: any) => (
        <HackathonCard key={hackathon.id} hackathon={hackathon}></HackathonCard>
      ))}
    </Container>
  );
}

export default HackathonGrid;
