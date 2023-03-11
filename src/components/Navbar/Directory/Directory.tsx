import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Text, Icon, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import React from "react";
import { TiHome } from "react-icons/ti";
import Communities from "./Communities";
const UserMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0 6px"
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: " gray.200" }}
      >
        <Flex
          align="center"
          justifyContent="space-between"
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align="center">
            <Icon fontSize={24} mr={{ base: 1, md: 2 }} as={TiHome}></Icon>
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600} fontSize={10}>
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
