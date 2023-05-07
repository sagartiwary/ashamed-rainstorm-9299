import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import React from "react";

export const ArticleDoctor = () => {
  return (
    <Box
      w="90%"
      margin="auto"
      borderTop="1px solid black"
      borderBottom="1px solid black"
    >
      <Flex
        // border={"1px solid red"}
        alignItems="center"
        justify="space-between"
        mb="20px"
        flexWrap={"wrap"}
      >
        <Box >
          <Heading as="h4" size="lg" textAlign="left" color="grey.600" overflowWrap={"break-word" } maxW="400px">
            Read top articles from health experts
          </Heading>
          <Text fontSize={"16px"}  fontWeight={"400"} textAlign={"left"} overflowWrap={"break-word" } maxW="400px">
            Health articles that keep you informed about good health practices
            and achieve your goals.
          </Text>
          <Button
            mt="25px"
            colorScheme="blue"
            size="md"
       
            display="inline-block"
          >
            See all articles
          </Button>
        </Box>

        <Box  cursor="pointer">
          <Box>
            <Image
              src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910"
              alt="sagar"
             maxW={"400px"}
              margin="auto"
            />
          </Box>

          <Box mt="2">
            <Text fontSize="sm" color="gray.600" textAlign="left" p="2px">
              CORONAVIRUS
            </Text>
            <Text fontSize="14px" color="" textAlign="left">
              12 Coronavirus Myths and Facts That You Should Be Aware Of
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="left" p="2px">
              Dr.Diano Borgio
            </Text>
          </Box>
        </Box>

        <Box cursor={'pointer'}>
          <Box >
            <Image
              src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c"
              alt="sagar"
           maxW={"400px"}
            />
          </Box>

          <Box mt="2"  width={"100%"}>
            <Text fontSize="sm" color="gray.600" textAlign="left" p="2px">
              VITAMINS AND SUPPLEMENTS
            </Text>
            <Text fontSize="14px" color="" textAlign="left" overflowWrap={"break-word"} width={"100%"}>
              Eating Right To Build Immunity Against Cold and Viral Infections
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="left" p="2px">
              Dr.Diano Borgio
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
