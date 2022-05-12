import { Container, HLogoSvg } from "./styles";
import hLogo from "../../H.svg";
import BurgerMenu from "../burguer-menu/burger-menu";
import { Link } from "react-router-dom";

function HackathonHeader() {
  return (
    <Container>
      <Link to="/">
        <HLogoSvg src={hLogo} />
      </Link>
      <BurgerMenu />
    </Container>
  );
}

export default HackathonHeader;
