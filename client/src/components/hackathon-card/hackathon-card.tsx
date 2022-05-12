import { useEffect, useState } from "react";
import HackathonCardTop from "../hackathon-card-top/hackathon-card-top";
import HackathonCardBottom from "../hackathon-card-bottom/hackathon-card-bottom";
import { useParams } from "react-router-dom";

function HackathonCard({ hackathon }) {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();

  const openCard = (e) => {
    setIsOpen(true);
    e.stopPropagation();
    e.preventDefault();
    window.history.pushState(null, null, `/hackathon/${hackathon.id}`);
  };

  const closeCard = (e) => {
    setIsOpen(false);
    e.stopPropagation();
    e.preventDefault();
    window.history.pushState(null, null, `/`);
  };

  useEffect(() => {
    window.addEventListener("popstate", closeCard);

    if (id == hackathon.id) {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener("popstate", closeCard);
    };
  }, []);

  useEffect(() => {
    const escFunction = (event) => {
      if (event.key === "Escape") {
        closeCard(event);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", escFunction);
    }

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [isOpen]);

  return (
    <>
      <HackathonCardTop
        openCard={openCard}
        closeCard={closeCard}
        hackathon={hackathon}
        isOpen={isOpen}
      />
      <HackathonCardBottom hackathon={hackathon} isOpen={isOpen} />
    </>
  );
}

export default HackathonCard;
