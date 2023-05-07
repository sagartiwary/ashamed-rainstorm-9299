import React from 'react'

import { Image, Heading, Text, Grid, Box, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from "react-router-dom";
let allData = [
  {
    image: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png",
    title: "Instant Video Consultation",
    benefits: "Connect within 60 secs",
    bgColor: "#414146",
    route:"/calling"
  },
  {
    image: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png",
    title: "Find Doctors Near You",
    benefits: "Confirmed appointments",
    bg: '',
    route:"/finddoctor"
  },
  {
    image: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png",
    title: "Medicines",
    benefits: "Essentials at your doorstep",
    route:"/medicine"
  },
  {
    image: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png",
    title: "Lab Tests",
    benefits: "Simple pickup at your home"
  },
  {
    image: "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png",
    title: "Surgeries",
    benefits: "Safe and trusted surgery centers"
  },

];


export const AllDoctors = () => {

  return (
    <Flex alignItems="center" justify="space-between" mb="5px" flexWrap={"wrap"} w="90%" margin="auto">

      {allData.map((ele) => {
        return <RouterLink to={ele.route||"/undercunstuction"}>

          <Box maxW="250px"
            key={Math.random()}
            m="10px"
            border='1px solid #f0f0f5;'
            borderWidth="1px"
            borderRadius="24PX"
            overflow="hidden"
            boxShadow="0 4px 8px rgba(0,0,0,.12)"
          >


            <Image src={ele.image} alt={ele.title} w="80%"
              h="170px"
              margin="auto"

            />

            <Box p="6">

              <Box d="flex" alignItems="baseline">
                <Heading as="h4" size="md" mr="2">
                  {ele.title}
                </Heading>
              </Box>

              <Box mt="2">
                <Text fontSize="sm" color="gray.600">
                  {ele.benefits}
                </Text>
              </Box>

            </Box>

          </Box>
        </RouterLink>
      })}

    </Flex>
  )
}
