import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Search2Icon } from "@chakra-ui/icons";
import Slidercomp from "../Components/Slider";
import Multislider from "../Components/Multislider";
import { NavLink } from "react-router-dom";

export function Medicinecard() {
  return (
    <>
      <Navbar />
      <DIV>
        <div>
          <Box>
            <Flex
              justifyContent={"space-between"}
              m={10}
              gap={"10px"}
              direction={["column", "column", "row", "row"]}
            >
              <HStack
                width={"100%"}
                border={"1px solid gray"}
                p={1}
                pl={"2"}
                pr={"2"}
                borderRadius={"30px"}
              >
                <Search2Icon />{" "}
                <Input
                  m={[2, 2]}
                  variant={"unstyled"}
                  type="search"
                  placeholder="Search Madicine"
                />
                <Button p={3} variant={"unstyled"}>
                  Search
                </Button>
              </HStack>
              <HStack width={"100%"} justifyContent={"center"}>
                <Button
                  width={"50%"}
                  padding={4}
                  gap={2}
                  display={"flex"}
                  bg={"#14BEF0"}
                  borderRadius={0}
                  color={"white"}
                  variant={"unstyled"}
                >
                  <AiOutlineShoppingCart />
                  VIEW CART
                </Button>
              </HStack>
            </Flex>
            <Slidercomp />
          </Box>
          <Heading textAlign={"left"} ml="5" as={"h2"}>
            Browse medicines & health products
          </Heading>
          <Box boxSizing="border-box" m={[0, 7, 0, 7]} marginBottom={"10px"}>
            <Multislider />
          </Box>
        
        </div>
      </DIV>
    </>
  );
}
const DIV = styled.div`
  * {
    font-family: "Roboto", sans-serif;
  }
`;
