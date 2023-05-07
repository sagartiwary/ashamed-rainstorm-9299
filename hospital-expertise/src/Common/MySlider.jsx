


import React from 'react';

import {Box,Flex,Image,Text,Heading,Spacer,Button, Grid} from '@chakra-ui/react'



let data = [
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
        prop: "Dentist",
        title: "toothing troubles?Schedule a dental checkup"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
        prop: "Gynecologist/Obsetrician",
        title: "Explore for women's health,pregnancy and infertility treatments"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
        prop: "Dietition/Nutrition",
        title: "Get guidance on eating right, weight management and sports nutrition"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
        prop: "Physiotherapist",
        title: "Pulled a muscle? Get it treated by a trained physiotherapist"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg",
        prop: "General surgeon",
        title: "Need to get operated? Find right surgeon"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg",
        prop: "Orhopedist",
        title: "For Bone and joints issues, spinal injuries and more"
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg",
        prop: "General physician",
        title: "Find the right family doctor in your neighbourhood."
    },
    {
        image: " https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg",
        prop: "Pediatrician",
        title: "Child Specialists and Doctors for infant and children"
    },
   

];

export const MySlider = () => {
    return (
        <Box w="90%" margin="auto" mt="70px" mb="40px">
           
            <Flex  overflowWrap={"break-word"} width={"100%"}>
                <Box p='4'>
                    <Heading as="h4" size="lg" mr="2" textAlign={"left"}>
                    Book an appointment for an in-clinic consultation
                    </Heading>
                    <Text fontSize="16px" textAlign={"left"} >
                    Find experienced doctors across all specialties
                    </Text>
                </Box>
            </Flex>

                <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)"]} alignItems="center" 
                gap={4}  w="100%"  mb="5px" 
                >
              
                    {
                        data.map((ele) => {
                            return <Box key={ele.title} borderRadius="15px" mb="5px" p="15px" >
                                <Box>
                                    <Image src={ele.image} alt={ele.title} w="400px" mr="4px" margin="auto"   h="200px" />
                                </Box>
                                <Box>
                                    <Text  
        _hover={{ color: "blue" }} fontSize="16px"fontWeight="bold" color="gray.600" textAlign='center' >
                                        {ele.prop}
                                    </Text>
                                    <Text fontSize="15px">{ele.title}</Text>
                                </Box>
                            </Box>
                        })
                    }
                </Grid>
          

        </Box>

    )
}


