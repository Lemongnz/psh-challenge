import { useState } from "react";

import { MenuButton } from "./button/button";
import {
  Menu,
  CustomLink,
  ContainerCustomLink,
  MenuLayerOne,
  MenuLayerTwo,
} from "./styles";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Menu id="menu" isOpen={isOpen}>
        <MenuLayerOne>
          <MenuLayerTwo>
            <ContainerCustomLink>
              <CustomLink to="/top" onClick={() => setIsOpen(false)}>
                Top
              </CustomLink>
            </ContainerCustomLink>
            <ContainerCustomLink>
              <CustomLink to="/" onClick={() => setIsOpen(false)}>
                Home
              </CustomLink>
            </ContainerCustomLink>
          </MenuLayerTwo>
        </MenuLayerOne>
      </Menu>
    </>
  );
}
