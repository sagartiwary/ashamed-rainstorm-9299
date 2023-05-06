

import { Box, Flex, Heading, Text ,Button,Image} from '@chakra-ui/react'
import React from 'react'

export const ArticleDoctor = () => {
  return (

    <Box  w="90%" margin="auto" borderTop="1px solid black" borderBottom="1px solid black">
    <Flex alignItems="center" justify="space-between" mb="20px" direction={{base :"column",sm:"column",md :"row",lg :"row"}}  >

    <Box w="28%"  h="250px" ml="80px" mt={2}>
     <Heading as="h4" size="lg" textAlign="left" color="grey.600">
      Read top articles from health experts
     </Heading>
      <Text fontSize={"16px"} textAlign={"left"}>
      Health articles that keep you informed about good health practices and achieve your goals.
      </Text>
      <Button mt="25px" colorScheme="blue"
      size="md"
      ml="-12px"
      display="inline-block"
      
      >See all articles</Button>
    </Box>



    <Box w={"27%"} mt="35px">
                            <Box >
                                <Image src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" alt="sagar" w="400px" h="200px" mt="4" margin="auto" />
                            </Box>


                            <Box mt="2">
                                <Text fontSize="sm" color="gray.600" textAlign='left' p="2px">
                                    CORONAVIRUS
                                </Text>
                                <Text fontSize="14px" color='' textAlign="left">12 Coronavirus Myths and Facts That You Should Be Aware Of</Text>
                                <Text fontSize="sm" color="gray.600" textAlign='left' p="2px">
                                    Dr.Diano Borgio
                                </Text>
                            </Box>
                        </Box>


                        <Box w={"27%"} mt="35px" mr="80px" >
                            <Box >
                                <Image src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" alt="sagar" w="400px" h="200px" mt="4" margin="auto" />
                            </Box>


                            <Box mt="2" mr="60px">
                                <Text fontSize="sm" color="gray.600" textAlign='left' p="2px">
                                    VITAMINS AND SUPPLEMENTS
                                </Text>
                                <Text fontSize="14px" color='' textAlign="left">Eating Right To Build Immunity Against Cold and Viral Infections</Text>
                                <Text fontSize="sm" color="gray.600" textAlign='left' p="2px">
                                    Dr.Diano Borgio
                                </Text>
                            </Box>
                        </Box>



    </Flex>
    </Box>
  )
}
