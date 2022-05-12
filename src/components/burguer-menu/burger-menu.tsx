import { useState } from "react";

import { MenuButton } from "./button/button";
import { Menu, CustomLink } from "./styles";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Menu isOpen={isOpen}>
        <CustomLink to="/top" onClick={() => setIsOpen(false)}>
          Top
        </CustomLink>
        <CustomLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </CustomLink>
      </Menu>
    </>
  );
}
