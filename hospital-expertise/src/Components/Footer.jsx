


import React from 'react'
import {Box,Stack,Flex,Image,HStack,Link,Divider,VStack,Text,Icon} from '@chakra-ui/react';
import { GrInstagram,GrTwitter } from "react-icons/gr";
import { FaFacebookF ,FaLinkedinIn} from "react-icons/fa";

export const Footer = () => {
  return (
    <>
        <Box
  bg="#28328c"
  color="#fff"
  _dark={{
    bg: "gray.600",
  }}
>
  <Stack
    direction={{
      base: "column",
      lg: "row",
    }}
    w="full"
    justify="space-between"
    p={10}
  >
    <Flex justify="center">
      <Image
        src="http://localhost:3000/static/media/logo.b266559daa6513256ea4.png"
        alt="Company Logo"
        rounded="lg"
        width={{
          base: "150px",
          lg: "200px",
        }}
        height={{
          base: "75px",
          lg: "100px",
        }}
        my={{
          base: 2,
          lg: 0,
        }}
      />
    </Flex>
    <HStack
      alignItems="start"
      flex={1}
      justify="space-around"
      fontSize={{
        base: "12px",
        md: "14px",
      }}
      color="gray.800"
      _dark={{
        color: "white",
      }}
      textAlign={{
        base: "center",
        md: "left",
      }}
    >
      <Flex justify="start" direction="column">
        <Link color="#fff">Health Hospital</Link>
        <Link  color="#fff">About</Link>
        <Link  color="#fff">Blogs</Link>
        <Link  color="#fff">Careers</Link>
        <Link  color="#fff">Press</Link>
        <Link  color="#fff">Contact Us</Link>
      </Flex>
      <Flex justify="start" direction="column">
        <Link color="#fff">For patients</Link>
        <Link color="#fff">Search for doctors</Link>
        <Link color="#fff">Search for clinics</Link>
        <Link color="#fff">Search for hospitals</Link>
        <Link color="#fff">Book Diagostics Tests</Link>
        <Link color="#fff">Book Full Body Checkups</Link>
        <Link color="#fff">HealthCare Plus</Link>
        <Link color="#fff">Covid Hospital Listing</Link>
        <Link color="#fff">Health Care Clinics</Link>
        <Link color="#fff">Read Health articles</Link>
        <Link color="#fff">Read about medicines</Link>
        <Link color="#fff">Health drive</Link>
        <Link color="#fff">Health app</Link>
        <Link color="#fff">Health Plus Infinity</Link>
      </Flex>
    </HStack>
    <HStack
      alignItems="start"
      flex={1}
      justify="space-around"
      fontSize={{
        base: "12px",
        md: "14px",
      }}
      color="gray.800"
      _dark={{
        color: "white",
      }}
      textAlign={{
        base: "center",
        md: "left",
      }}
    >
      <Flex justify="start" direction="column">
        <Link color="#fff" >For doctors</Link>
        <Link color="#fff" >Health Profile</Link>

        <Link color="#fff" >Ray by Health-care</Link>
        <Link color="#fff" >Health Reach</Link>
        <Link color="#fff" >Health Tab</Link>
        <Link color="#fff" >Health Pro</Link>
      </Flex>
      <Flex justify="start" direction="column">
        <Link color="#fff" >For hospitals</Link>
        <Link color="#fff" >Insta by Health-care</Link>
        <Link color="#fff" >Qikwell by Health-care</Link>
        <Link color="#fff" >Health-care Profile</Link>
        <Link color="#fff" >Health-care Reach</Link>
        <Link color="#fff" >Health-care Drive</Link>

        <Link color="#fff" >For Corporates</Link>
        <Link color="#fff" >Wellness Plans</Link>
      </Flex>


      <Flex justify="start" direction="column">
        <Link color="#fff" >More</Link>
        <Link color="#fff" >Help</Link>
        <Link color="#fff" >Developers</Link>
        <Link color="#fff" >Privacy policy</Link>
        <Link color="#fff" >Terms and Conditions</Link>
        <Link color="#fff" >PCS T&C</Link>

        <Link color="#fff" >Healthcare Directory</Link>
        <Link color="#fff" >Health Wiki</Link>
      </Flex>

      <Flex justify="start" direction="column">
        <Link color="#fff" >Social</Link>
        <Link color="#fff" >Facebook</Link>
        <Link color="#fff" >Twitter</Link>
        <Link color="#fff" >Linkdin</Link>
        <Link color="#fff" >Youtube</Link>
        <Link color="#fff" >Github</Link>
      </Flex>

    </HStack>
  </Stack>
  <Divider
    w="95%"
    mx="auto"
    color="gray.600"
    _dark={{
      color: "#F9FAFB",
    }}
    h="3.5px"
  />
  <VStack py={3}>
    <HStack justify="center">
      <Link>
        <Icon
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          as={FaFacebookF}
        />
      </Link>
      <Link>
        <Icon
          color="gray.800"
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          as={GrTwitter}
        />
      </Link>
      <Link>
        <Icon
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          as={GrInstagram}
        />
      </Link>
      <Link>
        <Icon
          _dark={{
            color: "white",
          }}
          h="20px"
          w="20px"
          as={FaLinkedinIn}
        />
      </Link>
    </HStack>

    <Text
      textAlign="center"
      fontSize="smaller"
      _dark={{
        color: "white",
      }}
    >
      &copy;Copyright. All rights reserved.
    </Text>
  </VStack>
</Box>;

    </>
  )
}


