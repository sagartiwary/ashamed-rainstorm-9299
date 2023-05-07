import React from 'react';
import { Box, Button, Flex, Spacer, Heading, Text, Image } from '@chakra-ui/react'
let topDoctors = [
    {
        image: "https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png",
        title: "Period doubts or Pregnancy"
    },
    {
        image: "https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png",
        title: "Acne, pimple or skin issues"
    },
    {
        image: "https://www.practo.com/consult/static/images/top-speciality-sexology.svg",
        title: "Performance issues in bed"
    },
    {
        image: "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
        title: "Cold, cough and fever"
    },
    {
        image: "https://www.practo.com/consult/static/images/top-speciality-pediatric.svg",
        title: "Child not feeling well"
    },
    {
        image: "https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png",
        title: "Depression or anxiety"
    },
]

export const TopDoctors = () => {
    return (
        <Box w="90%" margin="auto" mt="70px">
            <Flex width={"100%"}>
                <Box p='4'>
                    <Heading as="h4" size="lg" mr="2" textAlign={"left"}>
                        Consult top doctors online for any health concern
                    </Heading>
                    <Text fontSize="16px" textAlign={"left"} >
                        Private online consultations with verified doctors in all specialists
                    </Text>
                </Box>
                <Spacer />
                <Box p='4'>
                    <Button bg="white" variant="outline" color="cyan.200"   borderColor="cyan.500">View All Specialities</Button>
                </Box>
            </Flex>

            <Flex alignItems="center" justify="space-between" mb="5" flexWrap={"wrap"} >
                {
                    topDoctors.map((ele) => {
                        return <Box maxW="220px" key={Math.random()}>
                            <Box>
                                <Image src={ele.image} alt={ele.title} w="100px" mr="4" margin="auto" />
                            </Box>


                            <Box mt="2">
                                <Text fontSize="sm" color="gray.600"fontWeight="bold" textAlign='center' p="2px">
                                    {ele.title}
                                </Text>
                                <Text fontSize="14px" color='cyan.600'> CONSULT NOW</Text>
                            </Box>
                        </Box>
                    })
                }
            </Flex>
        </Box>
    )
}

