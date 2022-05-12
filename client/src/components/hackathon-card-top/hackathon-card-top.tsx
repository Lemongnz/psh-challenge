import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  Container,
  HackathonNameContainer,
  HackathonTextContainer,
  BackRowButton,
  HackathonInfoContainer,
  CalendarIcon,
  LocationIcon,
  MotionCard,
} from "./styles";

export default function HackathonCardTop({
  isOpen,
  hackathon,
  closeCard,
  openCard,
}) {
  return (
    <MotionCard
      layout
      transition={{ duration: 0.3 }}
      onClick={openCard}
      data-isopen={isOpen}
    >
      <Container order={hackathon.id} data-isopen={isOpen}>
        {isOpen && (
          <BackRowButton onClick={closeCard}>
            <AiOutlineArrowLeft />
          </BackRowButton>
        )}
        <HackathonTextContainer>
          <HackathonNameContainer title={hackathon.name} data-isopen={isOpen}>
            {hackathon.name}
          </HackathonNameContainer>
          {isOpen && (
            <HackathonInfoContainer>
              <div>
                <LocationIcon />
                <p>{hackathon.location}</p>
              </div>

              <div>
                <CalendarIcon />
                <p>{hackathon.date}</p>
              </div>
            </HackathonInfoContainer>
          )}
        </HackathonTextContainer>
      </Container>
    </MotionCard>
  );
}
